import { AspectRatio, Center } from "@chakra-ui/react";
import { getAbout } from "domain/About/useCases/getAbout";
import Image from "next/image";
import { CustomReactMarkdown } from "ui/common/components/markdown/Markdown";

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

      <CustomReactMarkdown>{data.long_desc}</CustomReactMarkdown>

      <CustomReactMarkdown>
        You can reach out via email at [hello@pravastacaraka.my.id](mailto:hello@pravastacaraka.my.id), or via
        socials on the footer.
      </CustomReactMarkdown>
    </>
  );
};

export default About;
