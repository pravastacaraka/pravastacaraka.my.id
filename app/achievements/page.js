import { Heading, Stack } from "@app-providers/chakra-ui";
import Awards from "./Awards";
import Licenses from "./Licenses";

async function fetchAwardsData() {
  const res = await fetch(`https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/Awards`, {
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

async function fetchLicensesData() {
  const res = await fetch(`https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/Licenses`, {
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

async function Page() {
  const awardsData = await fetchAwardsData();
  const licensesData = await fetchLicensesData();
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
