import { getKnowledges } from "domain/Knowledge/useCases/getKnowledges";
import KnowledgeCard from "ui/common/components/card/Knowledge/KnowledgeCard";
import { CustomReactMarkdown } from "ui/common/components/markdown/Markdown";
import { Center, SimpleGrid } from "ui/common/providers/theme.provider";

const Knowledge = async () => {
  const data = await getKnowledges();

  if (!data) {
    return (
      <Center>
        <CustomReactMarkdown>**Error:** Failed fetching knowledge data. Please reload!</CustomReactMarkdown>
      </Center>
    );
  }

  return (
    <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} rowGap={8} columnGap={2} mt={8}>
      <KnowledgeCard data={data["language"]} label="Languages" />
      <KnowledgeCard data={data["framework"]} label="Frameworks" />
      <KnowledgeCard data={data["database"]} label="Databases" />
      <KnowledgeCard data={data["cms"]} label="Headless CMS" />
      <KnowledgeCard data={data["tool"]} label="Deployments" />
      <KnowledgeCard data={data["ci/cd"]} label="Tools" />
    </SimpleGrid>
  );
};

export default Knowledge;
