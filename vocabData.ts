export interface WeatherChallenge {
  sentence: string;
  translation: string;
  options: string[];
  correctAnswer: string;
  imagePrompt: string;
  explanation: string;
  alternative?: string; // Alternative way to say it (e.g. Hay -> Está variant)
}

export const WEATHER_CHALLENGES: WeatherChallenge[] = [
  // HAY (Noun)
  {
    sentence: "___ tormenta.",
    translation: "Ամպրոպ է (Ամպրոպ կա):",
    options: ["Hay", "Está", "Hace"],
    correctAnswer: "Hay",
    imagePrompt: "a powerful thunderstorm with lightning in a dark purple sky, dramatic lighting",
    explanation: "Hay + գոյական (tormenta)",
    alternative: "Está -> Esta tormenta es fuerte (Այս ամպրոպը ուժեղ է)"
  },
  {
    sentence: "___ niebla.",
    translation: "Մառախուղ է (Մառախուղ կա):",
    options: ["Hay", "Está", "Hace"],
    correctAnswer: "Hay",
    imagePrompt: "a thick white fog covering a mysterious forest, soft morning light",
    explanation: "Hay + գոյական (niebla)",
    alternative: "Está -> El tiempo está muy feo por la niebla"
  },
  {
    sentence: "___ muchas nubes.",
    translation: "Շատ ամպեր կան:",
    options: ["Hay", "Está", "Hace"],
    correctAnswer: "Hay",
    imagePrompt: "a blue sky filled with many large white fluffy clouds",
    explanation: "Hay + գոյական (nubes)",
    alternative: "Está -> El cielo está nublado (Երկինքը ամպամած է)"
  },
  {
    sentence: "___ mucho viento.",
    translation: "Շատ քամի կա:",
    options: ["Hay", "Está", "Hace"],
    correctAnswer: "Hay",
    imagePrompt: "trees bending under a strong wind, leaves flying in the air",
    explanation: "Hay + գոյական (viento)",
    alternative: "Hace -> Hace mucho viento (Քամի է)"
  },
  
  // ESTÁ (Adjective)
  {
    sentence: "Hoy ___ soleado.",
    translation: "Այսօր արևոտ է:",
    options: ["Hay", "Está", "Hace"],
    correctAnswer: "Está",
    imagePrompt: "a bright sunny day with a golden sun in a clear blue sky",
    explanation: "Está + ածական (soleado)",
    alternative: "Hace -> Hace sol (Արև է)"
  },
  {
    sentence: "___ nublado.",
    translation: "Ամպամած է:",
    options: ["Hay", "Está", "Hace"],
    correctAnswer: "Está",
    imagePrompt: "an overcast grey sky completely covered with clouds",
    explanation: "Está + ածական (nublado)",
    alternative: "Hay -> Hay muchas nubes (Ամպեր կան)"
  },
  {
    sentence: "El cielo ___ despejado.",
    translation: "Երկինքը պարզ է:",
    options: ["Hay", "Está", "Hace"],
    correctAnswer: "Está",
    imagePrompt: "a perfectly clear deep blue sky without any clouds",
    explanation: "Está + ածական (despejado)",
    alternative: "Hace -> Hace un día despejado"
  },
  {
    sentence: "El tiempo ___ húmedo.",
    translation: "Եղանակը խոնավ է:",
    options: ["Hay", "Está", "Hace"],
    correctAnswer: "Está",
    imagePrompt: "tropical jungle with misty air and dew on green leaves, humid atmosphere",
    explanation: "Está + ածական (húmedo)",
    alternative: "Hay -> Hay mucha humedad"
  },

  // HACE (Feeling/Weather type)
  {
    sentence: "___ frío.",
    translation: "Ցուրտ է:",
    options: ["Hay", "Está", "Hace"],
    correctAnswer: "Hace",
    imagePrompt: "a frozen window with ice crystals, snowy winter landscape, cold vibes",
    explanation: "Hace + եղանակային զգացողություն (frío)",
    alternative: "Está -> Está helado (Սառնամանիք է)"
  },
  {
    sentence: "___ calor.",
    translation: "Շոգ է:",
    options: ["Hay", "Está", "Hace"],
    correctAnswer: "Hace",
    imagePrompt: "heat waves rising from a desert road under a scorching sun",
    explanation: "Hace + եղանակային զգացողություն (calor)",
    alternative: "Está -> El tiempo está muy caluroso"
  },
  {
    sentence: "___ viento.",
    translation: "Քամի է:",
    options: ["Hay", "Está", "Hace"],
    correctAnswer: "Hace",
    imagePrompt: "a lighthouse in a stormy sea with violent wind and waves",
    explanation: "Hace + viento (քամի է)",
    alternative: "Hay -> Hay mucho viento (Շատ քամի կա)"
  },
  {
    sentence: "___ buen tiempo.",
    translation: "Լավ եղանակ է:",
    options: ["Hay", "Está", "Hace"],
    correctAnswer: "Hace",
    imagePrompt: "a beautiful spring park with flowers and mild sunshine, perfect weather",
    explanation: "Hace + buen tiempo",
    alternative: "Está -> El tiempo está muy bueno"
  },

  // Verbs
  {
    sentence: "Hoy ___ mucho.",
    translation: "Այսօր շատ է անձրևում:",
    options: ["llueve", "nieva", "graniza"],
    correctAnswer: "llueve",
    imagePrompt: "heavy rain falling on a city street, puddles on the ground",
    explanation: "Llueve - անձրև է գալիս (հատուկ բայ)",
    alternative: "Esta -> Esta lluvia es fuerte"
  },
  {
    sentence: "En invierno ___.",
    translation: "Ձմռանը ձյուն է գալիս:",
    options: ["llueve", "nieva", "hace sol"],
    correctAnswer: "nieva",
    imagePrompt: "gentle snowflakes falling on a cozy mountain cabin, winter night",
    explanation: "Nieva - ձյուն է գալիս (հատուկ բայ)",
    alternative: "Hay -> Hay nieve en el suelo"
  },
  {
    sentence: "___ en la montaña.",
    translation: "Լեռներում կարկուտ է գալիս:",
    options: ["Graniza", "Nieva", "Llueve"],
    correctAnswer: "Graniza",
    imagePrompt: "hail stones bouncing off a mountain trail, cold storm",
    explanation: "Graniza - կարկուտ է գալիս (հատուկ բայ)",
    alternative: "Hay -> Hay granizo"
  }
];
