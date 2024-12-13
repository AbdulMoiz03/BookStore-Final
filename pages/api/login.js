import fs from "fs";
import path from "path";

export default function handler(req, res) {
    if (req.method === "POST") {
        const { email, password } = req.body;

        const filePath = path.join(process.cwd(), "data", "users.json");
        const fileData = fs.readFileSync(filePath, "utf8");
        const users = JSON.parse(fileData);

        const user = users.find(
            (u) => u.email === email && u.password === password
        );

        if (user) {
            res.status(200).json({
                id: user.id,
                email: user.email,
                message: "Login successful",
            });
        } else {
            res.status(401).json({ message: "Invalid email or password" });
        }
    } else {
        res.status(405).json({ message: "Method not allowed" });
    }
}
