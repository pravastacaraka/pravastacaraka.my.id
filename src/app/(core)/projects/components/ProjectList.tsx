import { getProjects } from "domain/Project/useCases/getProjects";
import ProjectCard from "ui/common/components/card/Project/ProjectCard";
import { CustomReactMarkdown } from "ui/common/components/markdown/Markdown";
import { Center, SimpleGrid, Stack } from "ui/common/providers/theme.provider";

const ProjectList = async () => {
  const data = await getProjects();

  if (!data) {
    return (
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
  }

  return (
    <Stack spacing={4}>
      <SimpleGrid columns={{ base: 1, sm: 2 }} gap={4}>
        {data.map((project) => (
          <ProjectCard key={project.id} data={project} />
        ))}
      </SimpleGrid>
    </Stack>
  );
};

export default ProjectList;
