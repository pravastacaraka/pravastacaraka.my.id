import { ProjectCard } from "@app-components/Card";
import { Center, SimpleGrid, Stack, Text } from "@app-providers/chakra-ui";
import { getPlaiceholder } from "plaiceholder";

async function fetchProjectsData() {
  const res = await fetch(
    `https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/Recent%20Projects/listRecords`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.AIRTABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        sort: [
          {
            field: "id",
            direction: "desc",
          },
        ],
      }),
      next: { revalidate: 60 },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const json = await res.json();

  const records = await Promise.all(
    json.records.map(async (record) => {
      const { base64, img } = await getPlaiceholder(record.fields.images[0]?.url);
      record.fields.image = { src: img.src, type: img.type, blurDataURL: base64 };
      delete record.fields.images;
      return { id: record.id, ...record.fields };
    })
  ).then((values) => values);

  return records;
}

async function Page() {
  const projectsData = await fetchProjectsData();

  if (projectsData.length < 1) {
    return (
      <Center
        h={{
          base: "calc(100vh - 30rem)",
          xs: "calc(100vh - 30rem + 41px)",
          sm: "calc(100vh - 30rem + 87px)",
          md: "calc(100vh - 30rem + 2px)",
        }}
        textAlign="center"
      >
        <Text>Don&apos;t have any projects.</Text>
      </Center>
    );
  }

  return (
    <Stack spacing={4}>
      <SimpleGrid columns={{ base: 1, sm: 2 }} gap={4}>
        {projectsData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </SimpleGrid>
    </Stack>
  );
}

export default Page;
