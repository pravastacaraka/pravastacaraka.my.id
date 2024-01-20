import { Heading, Stack } from "@app-providers/chakra-ui";
import Awards from "./Awards";
import Licenses from "./Licenses";

async function fetchData(url) {
  const res = await fetch(url, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${process.env.AIRTABLE_API_KEY}`,
    },
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const json = await res.json();

  const records = json.records.map((record) => {
    return { id: record.id, ...record.fields };
  });

  return records;
}

async function getAwardsData() {
  const url = `https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/Awards`;
  return await fetchData(url);
}

async function getLicensesData() {
  const url = `https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/Licenses`;
  return await fetchData(url);
}

async function Page() {
  const [awardsData, licensesData] = await Promise.all([getAwardsData(), getLicensesData()]);
  return (
    <>
      <Stack spacing={4}>
        <Heading size="lg" fontWeight="semibold">
          Awards and Funding
        </Heading>
        <Awards data={awardsData} />
      </Stack>

      <Stack spacing={4}>
        <Heading size="lg" fontWeight="semibold">
          Licenses and Certifications
        </Heading>
        <Licenses data={licensesData} />
      </Stack>
    </>
  );
}

export default Page;
