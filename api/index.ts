import { VercelRequest, VercelResponse } from "@vercel/node";

export default function handler(req: VercelRequest, res: VercelResponse) {
    res.status(200).json({
        name: "Portfolio",
        author: "Azad",
        message: "successfully!",
        time: new Date().toISOString()
    });
}
