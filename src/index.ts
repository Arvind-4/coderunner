import cors from "cors";
import path from "path";
import express  from "express";

const app = express();

app.use(cors());

const buildPath = process.cwd() + "/" + "src" + "/" + "build"
const assetsPath = process.cwd() + "/" + "src" + "/" + "build" + "/" + "assets";
const indexfilePath = process.cwd() + "/" + "src" + "/" + "build" + "/" + "index.html";

app.use(express.static(path.resolve(buildPath)));
app.use(express.static(path.resolve(assetsPath)));

app.get("/api/hello/", (req, res) => {
    res.json({
        message: "AA"
    });
});

app.use("*", (req, res) => {
    res.sendFile(path.resolve(indexfilePath));
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})