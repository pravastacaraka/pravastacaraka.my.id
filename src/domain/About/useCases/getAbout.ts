import { fetchAboutAPI } from "domain/About/api/aboutAPI";
import { AboutData } from "domain/About/models/About";

export async function getAbout(): Promise<AboutData | null> {
  const data = await fetchAboutAPI();

  if (!data?.records || data.records.length < 1) {
    return null;
  }

  const aboutData: AboutData = {
    long_desc: data.records[0].fields.long_desc,
    about_img: data.records[0].fields.cover_im[0]?.url || "",
  };

  return aboutData;
}
