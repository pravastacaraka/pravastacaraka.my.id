export type About = {
  long_desc: string;
  about_img: string;
};

export type APIResponseAbout = About & {
  cover_im: { url: string }[];
};
