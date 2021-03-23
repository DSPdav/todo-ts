const Airtable = require('airtable');

const base = new Airtable({ apiKey: process.env.REACT_APP_AIRTABLE_API_KEY }).base(
    process.env.REACT_APP_AIRTABLE_BASE_ID
);

const table = base(process.env.REACT_APP_AIRTABLE_TABLE_NAME);

export { table };

