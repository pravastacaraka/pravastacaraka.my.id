import { APIResponseAbout } from "domain/About/models/About";
import { AIRTABLE_API_URL } from "domain/shared/api/constant";
import { APIResponse } from "domain/shared/models/ApiResponse";

export async function fetchAboutAPI(): Promise<APIResponse<APIResponseAbout> | null> {
  try {
    const res = await fetch(`${AIRTABLE_API_URL}/About%20Me`, {
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
    console.error("Error fetching about data, err:", error);
    return null;
  }
}
