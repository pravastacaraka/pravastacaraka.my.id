import { KnowledgeCard } from "@app-components/Card";
import { CustomReactMarkdown } from "@app-components/markdown";
import { AspectRatio, SimpleGrid } from "@app-providers/chakra-ui";
import Image from "next/image";
import { getPlaiceholder } from "plaiceholder";

async function fetchAboutData() {
  const res = await fetch(`https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/About%20Me`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${process.env.AIRTABLE_API_KEY}`,
    },
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const json = await res.json();

  const records = await Promise.all(
    json.records.map(async (record) => {
      const { base64, img } = await getPlaiceholder(record.fields.cover_im[0]?.url);
      record.fields.cover_im = { src: img.src, type: img.type, blurDataURL: base64 };
      return { id: record.id, ...record.fields };
    })
  ).then((values) => values);

  return records[0];
}

async function fetchKnowledgeData() {
  const res = await fetch(`https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/Knowledge%20Base`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${process.env.AIRTABLE_API_KEY}`,
    },
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const json = await res.json();

  const records = json.records.map((record) => {
    return { id: record.id, ...record.fields };
  });

  return records;
}

async function Page() {
  const aboutData = await fetchAboutData();
  const knowledgeData = await fetchKnowledgeData();

  const languages = knowledgeData.filter((val) => val.type === "language");
  const frameworks = knowledgeData.filter((val) => val.type === "framework");
  const databases = knowledgeData.filter((val) => val.type === "database");
  const cms = knowledgeData.filter((val) => val.type === "cms");
  const tools = knowledgeData.filter((val) => val.type === "tool");
  const deployments = knowledgeData.filter((val) => val.type === "ci/cd");

  return (
    <>
      <AspectRatio ratio={16 / 9} w="full">
        <Image
          alt="Picture of the Author"
          placeholder="blur"
          quality={100}
          style={{ objectFit: "cover" }}
          fill={true}
          {...aboutData.cover_im}
        />
      </AspectRatio>

      <CustomReactMarkdown>{aboutData.long_desc}</CustomReactMarkdown>

      <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} gap={8} w="full" py={4}>
        <KnowledgeCard data={languages} label="Languages" />
        <KnowledgeCard data={frameworks} label="Frameworks" />
        <KnowledgeCard data={databases} label="Databases" />
        <KnowledgeCard data={cms} label="Headless CMS" />
        <KnowledgeCard data={deployments} label="Deployments" />
        <KnowledgeCard data={tools} label="Tools" />
      </SimpleGrid>

      <CustomReactMarkdown>
        You can reach out via email at [hello@pravastacaraka.my.id](mailto:hello@pravastacaraka.my.id), or via
        socials below.
      </CustomReactMarkdown>
    </>
  );
}

export default Page;
