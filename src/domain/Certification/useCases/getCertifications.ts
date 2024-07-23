import { fetchCertificationAPI } from "domain/Certification/api/CertificationAPI";
import { Certification } from "domain/Certification/models/Certification";

export async function getCertifications(): Promise<Certification[] | null> {
  const data = await fetchCertificationAPI();

  if (!data?.records || data.records.length < 1) {
    return null;
  }

  const result: Certification[] = data.records.map((record) => {
    return { ...record.fields, id: record.id } as Certification;
  });

  return result;
}
