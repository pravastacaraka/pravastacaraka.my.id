import { ProjectCard } from "@app-components/Card";
import { CustomReactMarkdown } from "@app-components/markdown";
import { Center, SimpleGrid, Stack } from "@app-providers/chakra-ui";
import { getPlaiceholder } from "plaiceholder";
import { Suspense } from "react";
import Loading from "./loading";

const BASE_URL = `https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}`;

async function getImage(src) {
  const buffer = await fetch(src).then(async (res) => Buffer.from(await res.arrayBuffer()));

  const {
    base64,
    metadata: { format },
  } = await getPlaiceholder(buffer, { size: 10 });

  return {
    base64,
    img: { src, format },
  };
}

async function getData() {
  const headers = {
    Authorization: `Bearer ${process.env.AIRTABLE_API_KEY}`,
    "Content-Type": "application/json",
  };

  const body = JSON.stringify({
    sort: [
      {
        field: "id",
        direction: "desc",
      },
    ],
  });

  const res = await fetch(`${BASE_URL}/Recent%20Projects/listRecords`, {
    method: "POST",
    headers,
    body,
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const json = await res.json();

  const records = await Promise.all(
    json?.records?.map(async (record) => {
      if (!record?.fields || !record.fields.images[0]) {
        return null;
      }

      let imgUrl = "/assets/images/no-image.webp";
      try {
        imgUrl = new URL(record.fields.images[0].url).toString();
      } catch (err) {
        console.log("failed to get image url, err:", err);
      }

      const { base64, img } = await getImage(imgUrl);
      record.fields.image = { src: img.src, type: img.format, blurDataURL: base64 };
      delete record.fields.images;

      return { id: record.id, ...record.fields };
    }) || [],
  );

  return records;
}

const NotFound = () => (
  <Center
    h={{
      base: "calc(100vh - 30rem)",
      xs: "calc(100vh - 30rem + 35px)",
      sm: "calc(100vh - 30rem + 81px)",
      md: "calc(100vh - 30rem - 4px)",
    }}
    textAlign="center"
  >
    <CustomReactMarkdown>Don&apos;t have any projects.</CustomReactMarkdown>
  </Center>
);

const ProjectList = ({ projects }) => (
  <Stack spacing={4}>
    <SimpleGrid columns={{ base: 1, sm: 2 }} gap={4}>
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </SimpleGrid>
  </Stack>
);

async function Page() {
  const projects = await getData();

  if (!projects || projects.length === 0) {
    return <NotFound />;
  }

  return (
    <Suspense fallback={<Loading />}>
      <ProjectList projects={projects} />
    </Suspense>
  );
}

export default Page;
