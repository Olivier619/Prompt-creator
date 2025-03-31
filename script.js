document.addEventListener("DOMContentLoaded", () => {
  const generateBtn = document.getElementById("generate");
  const copyBtn = document.getElementById("copy");
  const resultArea = document.getElementById("result");
  
  generateBtn.addEventListener("click", async () => {
    const textInput = document.getElementById("text-input").value;
    const expression = document.getElementById("expression").value;
    const position = document.getElementById("position").value;
    const imageSize = document.getElementById("image-size").value;
    const angle = document.getElementById("angle").value;
    
    if (!textInput) {
      alert("Veuillez entrer un texte !");
      return;
    }

    // 🔗 URL de ton back-end (remplace par ton vrai lien)
    const apiUrl = "https://URL_DE_TON_BACKEND/generate";

    const requestData = {
      text: textInput,
      expression: expression,
      position: position,
      imageSize: imageSize,
      angle: angle
    };

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(requestData)
      });

      if (!response.ok) {
        throw new Error(`Erreur HTTP ${response.status}`);
      }

      const data = await response.json();
      resultArea.value = data.prompt || "Erreur : réponse vide";
    } catch (error) {
      console.error("Erreur API :", error);
      resultArea.value = "Impossible de générer le prompt.";
    }
  });

  copyBtn.addEventListener("click", () => {
    resultArea.select();
    document.execCommand("copy");
    alert("Prompt copié !");
  });
});

