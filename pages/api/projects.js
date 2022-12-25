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
    data: null,
    status: "OK",
  };

  switch (req.method) {
    case "GET":
      const projects = await getTable("Recent Projects", {
        sort: [{ field: "id", direction: "desc" }],
      });
      response.data = await Promise.all(
        projects.map(async (project) => {
          const res = { ...project.fields, id: project.id };
          const { base64, img } = await getPlaiceholder(res.images[0]?.url);

          res.image = {
            src: img.src,
            type: img.type,
            blurDataURL: base64,
          };

          delete res.images;
          return res;
        })
      ).then((values) => values);
      break;
    default:
      status = 405;
      response.status = "Method Not Allowed";
      response.header.error_msg = `method ${req.method} is not allowed`;
  }

  res.status(status).json(response);
}
