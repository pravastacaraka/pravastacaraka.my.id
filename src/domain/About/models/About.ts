export type AboutData = {
  long_desc: string;
  about_img: string;
};

export type APIResponseAboutData = AboutData & {
  cover_im: { url: string }[];
};
