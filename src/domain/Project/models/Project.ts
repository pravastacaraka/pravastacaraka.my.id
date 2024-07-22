export type ProjectImage = {
  url: string;
};

export type Project = {
  id: string;
  name: string;
  desc: string;
  demo_url: string;
  stack: string[];
  images: ProjectImage[];
};

export type APIResponseProject = Project & {};
