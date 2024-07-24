import { APIResponseKnowledge } from "domain/Knowledge/models/Knowledge";
import { AIRTABLE_API_URL } from "domain/shared/api/constant";
import { APIResponse } from "domain/shared/models/ApiResponse";

export async function fetchKnowledgeAPI(): Promise<APIResponse<APIResponseKnowledge> | null> {
  try {
    const sortBy = "?sort%5B0%5D%5Bfield%5D=name&sort%5B0%5D%5Bdirection%5D=asc";

    const res = await fetch(`${AIRTABLE_API_URL}/Knowledge%20Base${sortBy}`, {
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
    console.error("Error fetching knowledge data, err:", error);
    return null;
  }
}
