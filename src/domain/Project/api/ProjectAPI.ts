import { APIResponseProject } from "domain/Project/models/Project";
import { AIRTABLE_API_URL } from "domain/shared/api/constant";
import { APIResponse } from "domain/shared/models/ApiResponse";

export async function fetchProjectAPI(): Promise<APIResponse<APIResponseProject> | null> {
  try {
    const sortBy = "?sort%5B0%5D%5Bfield%5D=id&sort%5B0%5D%5Bdirection%5D=desc";

    const res = await fetch(`${AIRTABLE_API_URL}/Recent%20Projects${sortBy}`, {
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
    console.error("Error fetching project data, err:", error);
    return null;
  }
}
