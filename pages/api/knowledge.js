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
      const knowledgeData = await getTable("Knowledge Base", {
        sort: [{ field: "name", direction: "asc" }],
      });
      response.data = knowledgeData;
      break;
    default:
      status = 405;
      response.status = "Method Not Allowed";
      response.header.error_msg = `method ${req.method} is not allowed`;
  }

  res.status(status).json(response);
}
