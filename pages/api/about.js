import { getTable } from "@app-libs/airtable";
import { getPlaiceholder } from "plaiceholder";

export default async function handler(req, res) {
  let status = 200;

  let response = {
    header: {
      process_time: "",
      error_msg: "",
      error_code: "",
    },
    data: {
      about: null,
      aboutPic: null,
    },
    status: "OK",
  };

  switch (req.method) {
    case "GET":
      const aboutData = await getTable("About Me");
      if (aboutData.length < 0) {
        break;
      }
      response.data.about = aboutData[0];
      if (aboutData[0].fields.cover_im.length > 0) {
        const { base64, img } = await getPlaiceholder(aboutData[0].fields.cover_im[0].url);
        response.data.aboutPic = { blurDataURL: base64, src: img.src, type: img.type };
      }
      break;
    default:
      status = 405;
      response.status = "Method Not Allowed";
      response.header.error_msg = `method ${req.method} is not allowed`;
  }

  res.status(status).json(response);
}
