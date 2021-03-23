import { Context } from 'aws-lambda';
import { table } from '../utils/Airtable'

export async function handler(event: any, context: Context) {
    try {
        const records = await table.select({
            maxRecords: 1,
            view: "Grid view"
        }).firstPage();

        return {
            statusCode: 200,
            body: JSON.stringify(records)
        }
    } catch (err) {
        return {
            statusCode: 500,
            body: JSON.stringify({ msg: err.message }) // Could be a custom message or object i.e. JSON.stringify(err)
        };
    }
}