document.getElementById("generatePrompt").addEventListener("click", function() {
    const description = document.getElementById("description").value;
    const expression = document.getElementById("expression").value;
    const position = document.getElementById("position").value;
    const imageSize = document.getElementById("imageSize").value;
    const cameraAngle = document.getElementById("cameraAngle").value;

    fetch("/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ description, expression, position, imageSize, cameraAngle })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById("resultPrompt").value = data.prompt;
    });
});

document.getElementById("copyPrompt").addEventListener("click", function() {
    const promptText = document.getElementById("resultPrompt");
    promptText.select();
    document.execCommand("copy");
    alert("Prompt copié !");
});
