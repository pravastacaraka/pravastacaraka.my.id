import type { Project, ProjectImage } from "domain/Project/models/Project";
import Image from "next/image";
import {
  AspectRatio,
  Heading,
  LinkBox,
  LinkOverlay,
  Stack,
  Tag,
  Text,
  Wrap,
  WrapItem,
} from "ui/common/providers/theme.provider";

type ProjectImageProps = {
  data: ProjectImage[];
};

const ProjectImage = ({ data }: ProjectImageProps) => {
  let src = "";

  if (data.length > 0) {
    src = data[0].url;
  } else {
    src = "/assets/images/no-image.webp";
  }

  return src && <Image alt="Preview of the project" src={src} style={{ objectFit: "cover" }} fill={true} />;
};

type ProjectCardProps = {
  data: Project;
};

function ProjectCard({ data }: ProjectCardProps) {
  return (
    <LinkBox
      _hover={{ boxShadow: "lg", transform: "scale(1.05)" }}
      bgColor="whiteAlpha.50"
      overflow="hidden"
      role="group"
      rounded="md"
      transform="auto-gpu"
      transitionDuration="slow"
      transitionProperty="transform"
      transitionTimingFunction="cubic-bezier(.175,.885,.32,1.275)"
    >
      <AspectRatio ratio={16 / 9} _groupHover={{ filter: "blur(2px)" }}>
        <ProjectImage data={data.images} />
      </AspectRatio>

      <Stack
        _groupHover={{ opacity: 1 }}
        align="center"
        bgColor="blackAlpha.800"
        inset={0}
        justify="center"
        opacity={0}
        pos="absolute"
        px={8}
        py={4}
        textAlign="center"
        transitionDuration="normal"
        transitionProperty="opacity"
        transitionTimingFunction="cubic-bezier(.39,.575,.565,1)"
      >
        <Heading size={{ lg: "md" }} color="white" noOfLines={2}>
          {data.name}
        </Heading>
        <Text fontSize={["xs", "sm"]} color="white" noOfLines={2}>
          {data.desc}
        </Text>
        {data.demo_url && <LinkOverlay href={data.demo_url} isExternal />}
        <Wrap display={["none", "block"]} justify="center">
          {data.stack.map((st) => (
            <WrapItem key={st}>
              <Tag size={["xs", "sm"]} variant="subtle">
                {st}
              </Tag>
            </WrapItem>
          ))}
        </Wrap>
      </Stack>
    </LinkBox>
  );
}

export default ProjectCard;
