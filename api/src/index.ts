import cors from "cors";
import express  from "express";

const app = express();

app.use(cors());

app.get("/api/hello/", (req, res) => {
    res.json({
        message: "AA"
    });
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})