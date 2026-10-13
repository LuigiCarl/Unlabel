import type { StoryNode } from "@/types/story";

export const stories: StoryNode[] = [
  { id: "start", stage: 1, context: "The comment", narrative: "A student says she wants to study engineering. Someone replies, “That field is better suited to men.” You are standing nearby. What do you do?", choices: [
    { id: "speak", text: "Question the assumption", detail: "Address the comment in the room without speaking for her.", nextNodeId: "public" },
    { id: "support", text: "Check in with her", detail: "Offer private support and let her decide what she needs.", nextNodeId: "private" },
    { id: "pause", text: "Say nothing yet", detail: "Take a moment, then decide whether and how to return to it.", nextNodeId: "delayed" },
  ] },
  { id: "public", stage: 2, context: "In the room", narrative: "The room goes quiet. The person who made the comment says, “I was only joking.” How do you continue without turning the student into the subject of a debate?", choices: [
    { id: "idea", text: "Keep focus on the idea", detail: "Explain why the assumption narrows people’s options.", nextNodeId: "outcome-public-idea" },
    { id: "invite", text: "Invite reflection", detail: "Ask what belief was hiding inside the joke.", nextNodeId: "outcome-public-question" },
  ] },
  { id: "private", stage: 2, context: "After class", narrative: "She says the comment bothered her, but she does not want you to make a scene on her behalf. What does support look like now?", choices: [
    { id: "listen", text: "Listen and follow her lead", detail: "Ask what would feel useful instead of assuming.", nextNodeId: "outcome-private-listen" },
    { id: "options", text: "Offer a few options", detail: "Share possible next steps while leaving the choice with her.", nextNodeId: "outcome-private-options" },
  ] },
  { id: "delayed", stage: 2, context: "A second chance", narrative: "Later, you realize that silence may have made the comment seem acceptable. You still have an opportunity to act. What do you do next?", choices: [
    { id: "return", text: "Return to the conversation", detail: "Name what you missed and challenge the assumption now.", nextNodeId: "outcome-delayed-return" },
    { id: "prepare", text: "Prepare for the next moment", detail: "Write down a simple response you can use next time.", nextNodeId: "outcome-delayed-prepare" },
  ] },
  { id: "outcome-public-idea", stage: 3, context: "Reflection", narrative: "You separate the person from the stereotype and explain that interest and ability are not assigned by gender.", choices: [], explanation: "Addressing the idea publicly can stop a stereotype from passing as ordinary, while avoiding a personal attack that closes the conversation.", learning: "Challenge the assumption clearly. Keep the affected person’s dignity and agency at the center." },
  { id: "outcome-public-question", stage: 3, context: "Reflection", narrative: "Your question slows the exchange down. The group has to examine the belief beneath the joke instead of dismissing its effect.", choices: [], explanation: "A calm question can make an automatic assumption visible and create space for people to reconsider it themselves.", learning: "Useful prompts include: “What makes that field gendered?” and “Would we say the same thing about everyone?”" },
  { id: "outcome-private-listen", stage: 3, context: "Reflection", narrative: "You listen, acknowledge what happened, and respect her decision about whether anything else should follow.", choices: [], explanation: "Support does not require taking control. Listening can reduce isolation while preserving the person’s ownership of what happens next.", learning: "Ask before acting for someone. Support is strongest when it expands rather than replaces their choices." },
  { id: "outcome-private-options", stage: 3, context: "Reflection", narrative: "You offer choices—talking to the teacher together, documenting the comment, or simply checking in again—and let her decide.", choices: [], explanation: "Offering options can turn support into practical agency, provided there is no pressure to choose the response you prefer.", learning: "Make possibilities visible, then return the decision to the person most affected." },
  { id: "outcome-delayed-return", stage: 3, context: "Reflection", narrative: "You return to the moment, acknowledge your delay, and explain why the original assumption should not go unanswered.", choices: [], explanation: "An imperfectly timed response can still matter. Repair is possible after the moment has passed.", learning: "You do not need a flawless line or perfect timing to interrupt a harmful pattern." },
  { id: "outcome-delayed-prepare", stage: 3, context: "Reflection", narrative: "You rehearse a short response so hesitation is less likely to decide for you the next time a stereotype appears.", choices: [], explanation: "Preparation can turn awareness into action, though it does not address the person who was affected in this moment.", learning: "Pair preparation with a check-in when possible: “I noticed that comment. How are you, and would support be useful?”" },
];
