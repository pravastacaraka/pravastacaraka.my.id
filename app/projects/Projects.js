"use client";

import { ProjectCard } from "@app-components/Card";
import { useGetProjects } from "@app-helper/api.helper";
import { AspectRatio, Center, SimpleGrid, Skeleton, Text } from "@app-providers/chakra-ui";

function Loading() {
  return (
    <SimpleGrid columns={{ base: 1, sm: 2 }} gap={4}>
      <AspectRatio ratio={16 / 9}>
        <Skeleton rounded="md" />
      </AspectRatio>
      <AspectRatio ratio={16 / 9}>
        <Skeleton rounded="md" />
      </AspectRatio>
      <AspectRatio ratio={16 / 9}>
        <Skeleton rounded="md" />
      </AspectRatio>
      <AspectRatio ratio={16 / 9}>
        <Skeleton rounded="md" />
      </AspectRatio>
      <AspectRatio ratio={16 / 9}>
        <Skeleton rounded="md" />
      </AspectRatio>
      <AspectRatio ratio={16 / 9}>
        <Skeleton rounded="md" />
      </AspectRatio>
    </SimpleGrid>
  );
}

function Projects() {
  const { data, error, isLoading } = useGetProjects();

  if (error)
    return (
      <Center
        h={{
          base: "calc(100vh - 30rem)",
          xs: "calc(100vh - 30rem + 20px)",
          sm: "calc(100vh - 30rem + 25px)",
          md: "calc(100vh - 30rem + 2px)",
        }}
        textAlign="center"
      >
        <Text>Oh no! Something went wrong, please try again!</Text>
      </Center>
    );
  if (isLoading) return <Loading />;

  const projects = data.data;

  return projects ? (
    <SimpleGrid columns={{ base: 1, sm: 2 }} gap={4}>
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </SimpleGrid>
  ) : (
    <Center
      h={{
        base: "calc(100vh - 30rem)",
        xs: "calc(100vh - 30rem + 20px)",
        sm: "calc(100vh - 30rem + 25px)",
        md: "calc(100vh - 30rem + 2px)",
      }}
      textAlign="center"
    >
      <Text>Don&apos;t have any projects.</Text>
    </Center>
  );
}

export default Projects;
