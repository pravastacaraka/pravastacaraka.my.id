import { KnowledgeCard } from "@app-components/Card";
import { CustomReactMarkdown } from "@app-components/markdown";
import { AspectRatio, SimpleGrid } from "@app-providers/chakra-ui";
import Image from "next/image";
import { getPlaiceholder } from "plaiceholder";

const BASE_URL = `https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}`;

async function fetchAboutData() {
  const res = await fetch(`${BASE_URL}/About%20Me`, {
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

  const [record] = await Promise.all(
    json?.records?.map(async (record) => {
      if (!record?.fields || !record.fields.cover_im[0]) {
        return null;
      }

      let imgUrl = "/static/images/no-image.webp";
      try {
        imgUrl = new URL(record.fields.cover_im[0].url).toString();
      } catch (err) {
        console.log("failed to get image url, err:", err);
      }

      const { base64, img } = await getPlaiceholder(imgUrl);
      record.fields.about_img = { src: img.src, type: img.type, blurDataURL: base64 };
      delete record.fields.cover_im;

      return { id: record.id, ...record.fields };
    }) || []
  );

  return record;
}

async function fetchKnowledgeData() {
  const res = await fetch(`${BASE_URL}/Knowledge%20Base`, {
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
    json?.records?.map((record) => {
      return { id: record.id, ...record.fields };
    }) || []
  );

  return records;
}

async function Page() {
  const [aboutData, knowledgeData] = await Promise.all([fetchAboutData(), fetchKnowledgeData()]);

  if (!aboutData) {
    <CustomReactMarkdown>Failed fetching about data</CustomReactMarkdown>;
  }

  if (!knowledgeData || !Array.isArray(knowledgeData) || knowledgeData.length < 1) {
    <CustomReactMarkdown>Failed fetching knowledge data</CustomReactMarkdown>;
  }

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
          {...aboutData.about_img}
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
