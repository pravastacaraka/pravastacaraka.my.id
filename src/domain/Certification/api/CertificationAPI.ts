import { APIResponseCertification } from "domain/Certification/models/Certification";
import { AIRTABLE_API_URL } from "domain/shared/api/constant";
import { APIResponse } from "domain/shared/models/ApiResponse";

export async function fetchCertificationAPI(): Promise<APIResponse<APIResponseCertification> | null> {
  try {
    const res = await fetch(`${AIRTABLE_API_URL}/Licenses`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.AIRTABLE_API_KEY}`,
      },
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      return null;
    }

    return await res.json();
  } catch (error) {
    console.error("Error fetching certification data, err:", error);
    return null;
  }
}
