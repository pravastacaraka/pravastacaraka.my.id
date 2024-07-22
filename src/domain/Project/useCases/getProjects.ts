import { fetchProjectAPI } from "domain/Project/api/ProjectAPI";
import { Project, ProjectImage } from "domain/Project/models/Project";

export async function getProjects(): Promise<Project[] | null> {
  const data = await fetchProjectAPI();

  if (!data?.records || data.records.length < 1) {
    return null;
  }

  const result: Project[] = data.records.map((record) => {
    const finalImages: ProjectImage[] = record.fields.images.map((image) => {
      return {
        url: image.url,
      } as ProjectImage;
    });

    return {
      id: record.id,
      name: record.fields.name,
      desc: record.fields.desc,
      demo_url: record.fields.demo_url,
      stack: record.fields.stack,
      images: finalImages,
    } as Project;
  });

  return result;
}
