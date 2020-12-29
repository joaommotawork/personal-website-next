import { table } from './utils/Airtable'

export default async (req, res) => {
    const data = req.body

    try {
        const createdRecords = await table.create([{ fields: data }])
        const createdRecord = {
            id: createdRecords[0].id,
            fields: createdRecords[0].fields
        }
        res.statusCode = 200
        res.json(createdRecord)
    } catch (error) {
        res.statusCode = 500
        res.json({ msg: 'Something Went Wrong!' })
    }
}
