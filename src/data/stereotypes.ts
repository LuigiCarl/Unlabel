export const stereotypeThemes = ["Education", "Work", "Leadership", "Everyday life"] as const;

export type StereotypeLabel = { id: string; phrase: string; category: (typeof stereotypeThemes)[number]; reflection: string; position: [number, number, number]; rotation: [number, number, number]; color: string };

export const stereotypeLabels: StereotypeLabel[] = [
  { id: "emotion", phrase: "BOYS DON'T CRY", category: "Everyday life", reflection: "Emotion is human, not gendered. Treating openness as weakness can make honest expression feel unsafe.", position: [-2.25, 1.25, .1], rotation: [0, .28, -.12], color: "#c7ff61" },
  { id: "lead", phrase: "WOMEN CAN'T LEAD", category: "Leadership", reflection: "Leadership is shaped by judgment, communication and responsibility—not by gender.", position: [2.15, 1.1, -.15], rotation: [0, -.3, .1], color: "#f0efe9" },
  { id: "career", phrase: "THAT JOB IS FOR MEN", category: "Work", reflection: "A job asks for skills and interest. Gendered expectations can narrow a path before a person has the chance to explore it.", position: [-2.3, -1.15, -.35], rotation: [0, .35, .1], color: "#a980ef" },
  { id: "care", phrase: "CARE IS WOMEN'S WORK", category: "Everyday life", reflection: "Care is a shared human responsibility. Assigning it by gender limits everyone’s choices and participation.", position: [2.15, -1.2, .05], rotation: [0, -.3, -.08], color: "#c7ff61" },
  { id: "study", phrase: "GIRLS AREN'T TECHNICAL", category: "Education", reflection: "Curiosity and ability do not arrive with a gender. Encouragement helps interests grow into real options.", position: [0, 2.15, -.65], rotation: [.1, 0, 0], color: "#f0efe9" },
];
