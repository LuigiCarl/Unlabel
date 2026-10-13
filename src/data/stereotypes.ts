export const stereotypeThemes = ["Education", "Work", "Leadership", "Everyday life"] as const;

export type StereotypeLabel = { id: string; phrase: string; category: (typeof stereotypeThemes)[number]; reflection: string; position: [number, number, number]; rotation: [number, number, number]; color: string };

export const stereotypeLabels: StereotypeLabel[] = [
  { id: "emotion", phrase: "BOYS DON'T CRY", category: "Everyday life", reflection: "Emotion is human, not gendered. Treating openness as weakness can make honest expression feel unsafe.", position: [-2.25, 1.25, .1], rotation: [0, .28, -.12], color: "#c7ff61" },
  { id: "lead", phrase: "WOMEN CAN'T LEAD", category: "Leadership", reflection: "Leadership is shaped by judgment, communication and responsibility—not by gender.", position: [2.15, 1.1, -.15], rotation: [0, -.3, .1], color: "#f0efe9" },
  { id: "career", phrase: "THAT JOB IS FOR MEN", category: "Work", reflection: "A job asks for skills and interest. Gendered expectations can narrow a path before a person has the chance to explore it.", position: [-2.3, -1.15, -.35], rotation: [0, .35, .1], color: "#a980ef" },
  { id: "care", phrase: "CARE IS WOMEN'S WORK", category: "Everyday life", reflection: "Care is a shared human responsibility. Assigning it by gender limits everyone’s choices and participation.", position: [2.15, -1.2, .05], rotation: [0, -.3, -.08], color: "#c7ff61" },
  { id: "study", phrase: "GIRLS AREN'T TECHNICAL", category: "Education", reflection: "Curiosity and ability do not arrive with a gender. Encouragement helps interests grow into real options.", position: [0, 2.15, -.65], rotation: [.1, 0, 0], color: "#f0efe9" },
  { id: "math", phrase: "BOYS ARE BETTER AT MATH", category: "Education", reflection: "Confidence and opportunity shape learning. A stereotype can discourage someone before their ability has room to grow.", position: [-1.2, 1.9, -.35], rotation: [0, .18, -.08], color: "#a980ef" },
  { id: "feelings", phrase: "MEN SHOULD HIDE FEELINGS", category: "Everyday life", reflection: "Emotional honesty is not a gendered weakness. People need room to express themselves and ask for support.", position: [1.3, 1.8, -.2], rotation: [0, -.2, .1], color: "#c7ff61" },
  { id: "careers", phrase: "WOMEN SHOULD STAY HOME", category: "Work", reflection: "Family and career choices belong to the people making them. Shared responsibilities create more possibilities for everyone.", position: [-1.4, -1.8, -.4], rotation: [0, .25, .08], color: "#f0efe9" },
  { id: "voice", phrase: "LEADERS MUST BE LOUD", category: "Leadership", reflection: "Leadership can be thoughtful, collaborative, quiet, or direct. Volume alone does not measure judgment or impact.", position: [1.4, -1.75, -.15], rotation: [0, -.25, -.1], color: "#a980ef" },
  { id: "colors", phrase: "PINK IS FOR GIRLS", category: "Everyday life", reflection: "Colors and interests do not have a gender. Expanding everyday choices gives people more room to be themselves.", position: [0, -.15, -.7], rotation: [.08, .05, .04], color: "#c7ff61" },
];
