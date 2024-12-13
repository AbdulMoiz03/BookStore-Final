import fs from 'fs';
import path from 'path';

export default function handler(req, res){
    if(req.method === "GET"){
        const p = path.join(process.cwd(), "Data", "Data.json");
        const filedData = fs.readFileSync(p, "utf-8");
        const parsedData = JSON.parse(filedData);
        res.status(200).json({ authors: parsedData.authors});
    }
}