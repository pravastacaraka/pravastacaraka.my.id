import { fetchKnowledgeAPI } from "domain/Knowledge/api/KnowledgeAPI";
import { KnowledgeDataMap } from "domain/Knowledge/models/Knowledge";

export async function getKnowledges(): Promise<KnowledgeDataMap | null> {
  const data = await fetchKnowledgeAPI();

  if (!data?.records || data.records.length < 1) {
    return null;
  }

  const knowledgeData: KnowledgeDataMap = data.records.reduce((acc, record) => {
    const type = record.fields.type;

    if (!acc[type]) {
      acc[type] = [];
    }

    acc[type].push({ ...record.fields, id: record.id });

    return acc;
  }, {} as KnowledgeDataMap);

  return knowledgeData;
}
