"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const path_1 = __importDefault(require("path"));
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
const buildPath = process.cwd() + "/" + "src" + "/" + "build";
const assetsPath = process.cwd() + "/" + "src" + "/" + "build" + "/" + "assets";
const indexfilePath = process.cwd() + "/" + "src" + "/" + "build" + "/" + "index.html";
app.use(express_1.default.static(path_1.default.resolve(buildPath)));
app.use(express_1.default.static(path_1.default.resolve(assetsPath)));
app.get("/api/hello/", (req, res) => {
    res.json({
        message: "AA"
    });
});
app.use("*", (req, res) => {
    res.sendFile(path_1.default.resolve(indexfilePath));
});
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
//# sourceMappingURL=index.js.map