import fs from 'fs';
import path from 'path';

export default async function handler(req, res) {
    if(req.method === 'GET') {
        const p = path.join(process.cwd(), 'Data', 'Data.json');
        const fileData = fs.readFileSync(p, 'utf-8'); 
        const parsedData = JSON.parse(fileData); 
        const allbooks = parsedData.books;
        res.status(200).json({ books: allbooks });
    }
}