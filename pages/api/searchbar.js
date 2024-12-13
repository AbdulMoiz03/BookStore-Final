import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
    if (req.method === 'POST') {
        const data = req.body;
        const search = data?.search || ''; // Default to empty string if `search` is undefined
        const filePath = path.join(process.cwd(), 'Data', 'Data.json');

        fs.readFile(filePath, 'utf-8', (err, fileData) => {
            if (err) {
                res.status(500).json({ message: 'An error occurred while reading the file.' });
                return;
            }

            try {
                const parsedData = JSON.parse(fileData);
                const books = Array.isArray(parsedData) 
                    ? parsedData // Handle if JSON is directly an array
                    : Array.isArray(parsedData.books) 
                    ? parsedData.books // Handle if JSON has a `books` key
                    : [];

                const searchResult = books.filter(book => 
                    book.title?.toLowerCase().includes(search.toLowerCase())
                );

                res.status(200).json({ books: searchResult });
            } catch (parseError) {
                res.status(500).json({ message: 'An error occurred while parsing the JSON file.' });
            }
        });
    } else {
        res.status(405).json({ message: 'Method not allowed.' });
    }
}
