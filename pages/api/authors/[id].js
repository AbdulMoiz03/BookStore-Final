import fs from 'fs';
import path from 'path';

export default function handler(req, res){
    if(req.method =="GET"){
        const id = req.query.id;
        const p = path.join(process.cwd(), "Data", "Data.json");
        const fileData = fs.readFileSync(p, "utf-8");
        const parsedData = JSON.parse(fileData);
        const author = parsedData.authors.find(author => author.id === id);
        res.status(200).json({ author: author });
    }
}