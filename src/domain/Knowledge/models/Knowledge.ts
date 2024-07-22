export type Knowledge = {
  id: string;
  name: string;
  icon: string;
  type: string;
};

export type KnowledgeMap = {
  [knowledgeType: string]: Knowledge[];
};

export type APIResponseKnowledge = Knowledge & {};
