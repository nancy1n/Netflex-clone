"use client";
import { useState } from "react";

export default function LanguageDemoSingle() {
  const [language, setLanguage] = useState("en");
  const [text, setText] = useState("What is Netflix?");
  const [loading, setLoading] = useState(false);

  // helper that calls the free MyMemory API
  async function translateText(textToTranslate: string, targetLang: string) {
    const url =
      `https://api.mymemory.translated.net/get?q=${encodeURIComponent(textToTranslate)}&langpair=en|${targetLang}`;
    const res = await fetch(url);
    const json = await res.json();
    // responseData.translatedText holds the translated string
    return json?.responseData?.translatedText ?? textToTranslate;
  }

  async function handleLanguageChange(e:React.ChangeEvent<HTMLSelectElement>) {
    const newLang = e.target.value;
    setLanguage(newLang);

    if (newLang === "en") {
      // no API call for English — just use the original
      setText("What is Netflix?");
      return;
    }

    setLoading(true);
    try {
      const translated = await translateText("What is Netflix?", newLang);
      setText(translated);
    } catch (err) {
      console.error("Translate error:", err);
      setText("Translation failed — check console");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div style={{ color: "white", padding: 20 }}>
      <div>
        <label style={{ marginRight: 8 }}>Language:</label>
        <select value={language} onChange={handleLanguageChange}>
          <option value="en">English</option>
          <option value="fr">Français</option>
        </select>
      </div>

      <div style={{ marginTop: 16 }}>
        <p>{loading ? "Translating..." : text}</p>
      </div>
    </div>
  );
}
