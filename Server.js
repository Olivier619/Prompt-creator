const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.static("public"));
app.use(express.json());

app.post("/generate", (req, res) => {
    const { description, expression, position, imageSize, cameraAngle } = req.body;

    let prompt = description.trim();
    
    if (expression) prompt += `, avec une expression ${expression}`;
    if (position) prompt += `, en position ${position}`;
    if (imageSize) prompt += `, format ${imageSize}`;
    if (cameraAngle) prompt += `, prise de vue ${cameraAngle}`;

    res.json({ prompt: `"${prompt}"` });
});

app.listen(PORT, () => console.log(`Serveur démarré sur http://localhost:${PORT}`));
