import Airtable from "airtable";

const base = new Airtable({
  apiKey: process.env.AIRTABLE_API_KEY,
}).base(process.env.AIRTABLE_BASE_ID);

// gets the data we want and puts it into variables
const minifyRecord = (record) => {
  return {
    id: record.id,
    fields: record.fields,
  };
};

// maps over the records, calling minifyRecord, giving us required data
const getMinifiedRecords = (records) => {
  return records.map((record) => minifyRecord(record));
};

async function getTable(table, args = {}) {
  const records = await base(table).select(args).all();
  const minifiedRecords = await getMinifiedRecords(records);

  return minifiedRecords;
}

export { getTable };
