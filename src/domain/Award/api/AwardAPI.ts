import { APIResponseAward } from "domain/Award/models/Award";
import { AIRTABLE_API_URL } from "domain/shared/api/constant";
import { APIResponse } from "domain/shared/models/ApiResponse";

export async function fetchAwardAPI(): Promise<APIResponse<APIResponseAward> | null> {
  try {
    const res = await fetch(`${AIRTABLE_API_URL}/Awards`, {
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
    console.error("Error fetching award data, err:", error);
    return null;
  }
}
