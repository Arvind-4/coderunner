import cors from "cors";
import Express  from "express";
import { Request, Response } from "express";

const app = Express();

app.use(cors());


app.get("/api/hello/", (req: Request, res: Response) => {
    res.json({
        message: "AA"
    });
});

app.listen(8000, () => {
    console.log("Server running on port 8000");
})