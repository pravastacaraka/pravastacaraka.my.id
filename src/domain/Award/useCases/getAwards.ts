import { fetchAwardAPI } from "domain/Award/api/AwardAPI";
import { Award } from "domain/Award/models/Award";

export async function getAwards(): Promise<Award[] | null> {
  const data = await fetchAwardAPI();

  if (!data?.records || data.records.length < 1) {
    return null;
  }

  const result: Award[] = data.records.map((record) => {
    return { ...record.fields, id: record.id } as Award;
  });

  return result;
}
