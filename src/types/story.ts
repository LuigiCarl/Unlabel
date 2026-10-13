export type StoryChoice = { id: string; text: string; detail: string; nextNodeId: string };

export type StoryNode = {
  id: string;
  stage: number;
  context: string;
  narrative: string;
  choices: StoryChoice[];
  explanation?: string;
  learning?: string;
};
