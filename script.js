const translations = {
    spanish: {
      title: "¡Únete a nuestra causa!",
      content: "Ponte en contacto con nosotros para ser parte del cambio y transformar vidas.",
    },
    english: {
      title: "Join our cause!",
      content: "Get in touch with us to be part of the change and transform lives.",
    },
  };
  
  document.getElementById("language-button").addEventListener("click", () => {
    const currentLanguage = document.getElementById("language-button").textContent;
    const translatedText = document.getElementById("translated-text");
    if (currentLanguage === "Español") {
      translatedText.innerHTML = `
        <h1>${translations.english.title}</h1>
        <p>${translations.english.content}</p>
      `;
      document.getElementById("language-button").textContent = "English";
    } else {
      translatedText.innerHTML = `
        <h1>${translations.spanish.title}</h1>
        <p>${translations.spanish.content}</p>
      `;
      document.getElementById("language-button").textContent = "Español";
    }
  });
  
  