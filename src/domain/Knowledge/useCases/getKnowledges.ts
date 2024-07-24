import { fetchKnowledgeAPI } from "domain/Knowledge/api/KnowledgeAPI";
import { KnowledgeMap } from "domain/Knowledge/models/Knowledge";

export async function getKnowledges(): Promise<KnowledgeMap | null> {
  const data = await fetchKnowledgeAPI();

  if (!data?.records || data.records.length < 1) {
    return null;
  }

  const result: KnowledgeMap = data.records.reduce((acc, record) => {
    const type = record.fields.type;

    if (!acc[type]) {
      acc[type] = [];
    }

    acc[type].push({ ...record.fields, id: record.id });

    return acc;
  }, {} as KnowledgeMap);

  return result;
}
