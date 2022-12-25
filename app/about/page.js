"use client";

import { KnowledgeCard } from "@app-components/Card";
import { BaseMarkdown } from "@app-components/markdown";
import { AspectRatio, SimpleGrid, Skeleton, SkeletonText, Stack } from "@chakra-ui/react";
import { useGetAbout, useGetKnowledge } from "helper/api.helper";
import Image from "next/image";
import ReactMarkdown from "react-markdown";

function About() {
  const { about, aboutError, aboutLoading } = useGetAbout();
  const { knowledge, knowledgeError, knowledgeLoading } = useGetKnowledge();

  const languages = knowledge?.data?.filter((val) => val.fields.type === "language");
  const frameworks = knowledge?.data?.filter((val) => val.fields.type === "framework");
  const databases = knowledge?.data?.filter((val) => val.fields.type === "database");
  const cms = knowledge?.data?.filter((val) => val.fields.type === "cms");
  const tools = knowledge?.data?.filter((val) => val.fields.type === "tool");
  const deployments = knowledge?.data?.filter((val) => val.fields.type === "ci/cd");

  return (
    <Stack as="section" spacing={8}>
      <AspectRatio ratio={16 / 9} w="full">
        {aboutLoading || aboutError ? (
          <Skeleton speed={1.2} />
        ) : (
          <Image
            alt="Picture of the Author"
            placeholder="blur"
            quality={100}
            style={{ objectFit: "cover" }}
            {...about.data.aboutPic}
            fill
          />
        )}
      </AspectRatio>

      <Stack lineHeight="tall" spacing={4}>
        {aboutLoading || aboutError ? (
          <SkeletonText noOfLines={16} skeletonHeight="16px" speed={1.2} />
        ) : (
          <ReactMarkdown components={BaseMarkdown}>{about.data.about.fields.long_desc}</ReactMarkdown>
        )}
      </Stack>

      {/* <Heading as="h1" size="lg" id="skills">
          Knowledge Base
        </Heading> */}
      <Stack lineHeight="tall" spacing={4}>
        {/* <ReactMarkdown components={BaseMarkdown}>
            After a few years of being a computer engineering student and also learning something new on my own, I
            have a wide range of skills and knowledge about software development.
          </ReactMarkdown> */}
        <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} gap={8} w="full">
          <KnowledgeCard
            data={languages}
            label="Languages"
            isError={knowledgeError}
            isLoading={knowledgeLoading}
          />
          <KnowledgeCard
            data={frameworks}
            label="Frameworks"
            isError={knowledgeError}
            isLoading={knowledgeLoading}
          />
          <KnowledgeCard
            data={databases}
            label="Databases"
            isError={knowledgeError}
            isLoading={knowledgeLoading}
          />
          <KnowledgeCard data={cms} label="Headless CMS" isError={knowledgeError} isLoading={knowledgeLoading} />
          <KnowledgeCard
            data={deployments}
            label="Deployments"
            isError={knowledgeError}
            isLoading={knowledgeLoading}
          />
          <KnowledgeCard data={tools} label="Tools" />
        </SimpleGrid>
      </Stack>

      <Stack lineHeight="tall" spacing={4}>
        <ReactMarkdown components={BaseMarkdown}>
          You can reach out via email at [hello@pravastacaraka.my.id](mailto:hello@pravastacaraka.my.id), or via
          socials below.
        </ReactMarkdown>
      </Stack>
    </Stack>
  );
}

export default About;
