import { getTable } from "@app-libs/airtable";

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
      const awards = await getTable("Awards", {
        sort: [{ field: "id", direction: "desc" }],
      });
      response.data = awards.map((award) => ({ ...award.fields, id: award.id }));

      // const awardsPlaiceholder = await Promise.all(
      //   awards.map(async (item) => {
      //     const path = item.fields?.images ? item.fields.images[0].url : undefined;
      //     const { base64, img } = path != undefined ? await getPlaiceholder(path) : { base64: "", img: "" };
      //     return { base64, img };
      //   })
      // ).then((values) => values);

      break;
    default:
      status = 405;
      response.status = "Method Not Allowed";
      response.header.error_msg = `method ${req.method} is not allowed`;
  }

  res.status(status).json(response);
}
