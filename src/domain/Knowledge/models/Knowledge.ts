export type KnowledgeData = {
  id: string;
  name: string;
  icon: string;
  type: string;
};

export type KnowledgeDataMap = {
  [knowledgeType: string]: KnowledgeData[];
};

export type APIResponseKnowledgeData = KnowledgeData & {};
