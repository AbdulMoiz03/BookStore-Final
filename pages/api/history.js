import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
    const filePath = path.join(process.cwd(), 'Data', 'SearchHistory.json');

    // Ensure the file exists and is initialized with an empty object if needed
    if (!fs.existsSync(filePath)) {
        fs.writeFileSync(filePath, JSON.stringify({}, null, 2)); // Initialize with an empty object
    }

    if (req.method === 'POST') {
        // Store search query
        const { email, search } = req.body;

        if (!email || !search) {
            res.status(400).json({ message: 'Email and search query are required.' });
            return;
        }

        try {
            const fileData = fs.readFileSync(filePath, 'utf-8');
            const history = fileData ? JSON.parse(fileData) : {}; // Handle case where file might be empty

            if (!history[email]) {
                history[email] = [];
            }
            history[email].push(search);

            fs.writeFileSync(filePath, JSON.stringify(history, null, 2));
            res.status(200).json({ message: 'Search query stored successfully.' });
        } catch (err) {
            console.error('Error writing to file:', err);
            res.status(500).json({ message: 'Failed to store search query.' });
        }
    } else if (req.method === 'GET') {
        // Retrieve search history
        const { email } = req.query;

        if (!email) {
            res.status(400).json({ message: 'Email is required.' });
            return;
        }

        try {
            const fileData = fs.readFileSync(filePath, 'utf-8');
            const history = fileData ? JSON.parse(fileData) : {}; // Handle case where file might be empty

            const userHistory = history[email] || [];
            res.status(200).json({ history: userHistory });
        } catch (err) {
            console.error('Error reading file:', err);
            res.status(500).json({ message: 'Failed to retrieve search history.' });
        }
    } else {
        res.status(405).json({ message: 'Method not allowed.' });
    }
}
