import { Box, Heading, HStack, Icon, Text, Wrap, WrapItem } from "ui/common/providers/theme.provider";
import { CustomReactMarkdown } from "../../markdown/Markdown";

type KnowledgeData = {
  id: string;
  name: string;
  icon: string;
  type: string;
};

type Props = {
  data: KnowledgeData[] | null;
  label: string;
};

function KnowledgeCard({ data, label }: Props) {
  if (!data) {
    return <CustomReactMarkdown>**Error:** Failed fetching data</CustomReactMarkdown>;
  }

  return (
    <Box>
      <Heading mb={4} size="md" letterSpacing="tighter" fontWeight="600">
        {label}
      </Heading>
      <Box>
        <Wrap>
          {data ? (
            data.map((item) => (
              <WrapItem key={item.id}>
                <HStack w={{ base: "110px", md: "135px" }}>
                  <Icon boxSize={4} fill="currentcolor" role="img" viewBox="0 0 24 24">
                    <title>{`${item.name}`}</title>
                    <path d={item.icon} />
                  </Icon>
                  <Text noOfLines={1}>{item.name}</Text>
                </HStack>
              </WrapItem>
            ))
          ) : (
            <CustomReactMarkdown>**Error:** Failed fetching data</CustomReactMarkdown>
          )}
        </Wrap>
      </Box>
    </Box>
  );
}

export default KnowledgeCard;
