import type { QuizQuestion } from "@/types/quiz";
export const questions: QuizQuestion[] = [
  { id: "q1", prompt: "Gender tells us which school subjects someone will naturally be good at.", options: ["Stereotype", "Inclusive principle"], answer: 0, explanation: "Ability and interest vary between individuals. Assigning aptitude by gender replaces the person with an assumption." },
  { id: "q2", prompt: "People of every gender can share care and household responsibilities.", options: ["Stereotype", "Inclusive principle"], answer: 1, explanation: "This opens responsibility and choice instead of assigning care to one gender." },
  { id: "q3", prompt: "A confident leader should be judged by different standards depending on their gender.", options: ["Stereotype", "Inclusive principle"], answer: 0, explanation: "Changing the standard by gender is a double standard, not a measure of leadership." },
  { id: "q4", prompt: "Ask what support a person wants instead of assuming what role suits them.", options: ["Stereotype", "Inclusive principle"], answer: 1, explanation: "A question preserves agency. It makes space for the person’s actual goals and circumstances." },
  { id: "q5", prompt: "Showing sadness makes a boy less capable or resilient.", options: ["Stereotype", "Inclusive principle"], answer: 0, explanation: "Emotion does not cancel resilience. This claim polices expression through a gender rule." },
  { id: "q6", prompt: "A group-level statistic cannot determine an individual person’s ability.", options: ["Stereotype", "Inclusive principle"], answer: 1, explanation: "Population patterns need context and should never be used as a shortcut for judging an individual." },
];
