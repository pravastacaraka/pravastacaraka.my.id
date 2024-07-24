import { getAbout } from "domain/About/useCases/getAbout";
import Image from "next/image";
import { CustomReactMarkdown } from "ui/common/components/markdown/Markdown";
import { AspectRatio, Center, VStack } from "ui/common/providers/theme.provider";

const About = async () => {
  const data = await getAbout();

  if (!data) {
    return (
      <>
        <Center mb={6}>
          <AspectRatio ratio={16 / 9} width="85%">
            <Image alt="Image not available" fill={true} src="/assets/images/no-image.webp" />
          </AspectRatio>
        </Center>

        <Center>
          <CustomReactMarkdown>**Error:** Failed fetching about data. Please reload!</CustomReactMarkdown>
        </Center>
      </>
    );
  }

  return (
    <>
      <Center mb={6}>
        <AspectRatio ratio={16 / 9} width="85%">
          <Image alt="Picture of the Author" priority={true} fill={true} src={data.about_img} />
        </AspectRatio>
      </Center>

      <VStack spacing={4} textAlign="justify">
        <CustomReactMarkdown>{data.long_desc}</CustomReactMarkdown>
      </VStack>
    </>
  );
};

export default About;
