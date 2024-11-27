import { Question } from '../types';

export const vocabularyQuestions: Question[] = [
  {
    id: "v1",
    text: "A person who is very skilled in a specific field or activity",
    options: shuffleArray(["Amateur", "Expert", "Novice", "Apprentice"]),
    correctAnswer: "Expert"
  },
  {
    id: "v2",
    text: "The ability to do something well; expertise",
    options: shuffleArray(["Competence", "Confusion", "Complexity", "Complication"]),
    correctAnswer: "Competence"
  },
  {
    id: "v3",
    text: "A formal agreement between two or more parties",
    options: shuffleArray(["Contract", "Contact", "Conduct", "Contest"]),
    correctAnswer: "Contract"
  },
  {
    id: "v4",
    text: "To give an authoritative order",
    options: shuffleArray(["Command", "Request", "Suggest", "Propose"]),
    correctAnswer: "Command"
  },
  {
    id: "v5",
    text: "The state of being accountable or responsible",
    options: shuffleArray(["Liability", "Liberty", "License", "Luxury"]),
    correctAnswer: "Liability"
  },
  {
    id: "v6",
    text: "A person or organization that buys goods or services",
    options: shuffleArray(["Customer", "Supplier", "Employee", "Manager"]),
    correctAnswer: "Customer"
  },
  {
    id: "v7",
    text: "The action of working with someone to produce something",
    options: shuffleArray(["Collaboration", "Competition", "Confrontation", "Contradiction"]),
    correctAnswer: "Collaboration"
  },
  {
    id: "v8",
    text: "A detailed proposal for doing or achieving something",
    options: shuffleArray(["Plan", "Path", "Process", "Project"]),
    correctAnswer: "Plan"
  },
  {
    id: "v9",
    text: "The ability to assess and initiate things independently",
    options: shuffleArray(["Initiative", "Indecision", "Inhibition", "Inaction"]),
    correctAnswer: "Initiative"
  },
  {
    id: "v10",
    text: "The process of solving a question or puzzle",
    options: shuffleArray(["Resolution", "Revolution", "Revelation", "Reflection"]),
    correctAnswer: "Resolution"
  },
  {
    id: "v11",
    text: "The capacity to have an effect on the behavior of someone",
    options: shuffleArray(["Influence", "Inference", "Instance", "Incidence"]),
    correctAnswer: "Influence"
  },
  {
    id: "v12",
    text: "A person who supervises others or directs operations",
    options: shuffleArray(["Manager", "Worker", "Employee", "Staff"]),
    correctAnswer: "Manager"
  },
  {
    id: "v13",
    text: "The action of leading a group of people or an organization",
    options: shuffleArray(["Leadership", "Membership", "Partnership", "Ownership"]),
    correctAnswer: "Leadership"
  },
  {
    id: "v14",
    text: "The quality of being honest and having strong moral principles",
    options: shuffleArray(["Integrity", "Intelligence", "Intensity", "Identity"]),
    correctAnswer: "Integrity"
  },
  {
    id: "v15",
    text: "The ability to do something successfully or efficiently",
    options: shuffleArray(["Efficiency", "Effectiveness", "Excellence", "Elegance"]),
    correctAnswer: "Efficiency"
  },
  {
    id: "v16",
    text: "A course of action adopted for the sake of expediency",
    options: shuffleArray(["Strategy", "Structure", "Standard", "Schedule"]),
    correctAnswer: "Strategy"
  },
  {
    id: "v17",
    text: "The state of being reliable, trusted, or believed in",
    options: shuffleArray(["Credibility", "Capability", "Creativity", "Curiosity"]),
    correctAnswer: "Credibility"
  },
  {
    id: "v18",
    text: "The action of communicating or meeting to discuss something",
    options: shuffleArray(["Consultation", "Conservation", "Concentration", "Consideration"]),
    correctAnswer: "Consultation"
  },
  {
    id: "v19",
    text: "The process of making changes to improve something",
    options: shuffleArray(["Innovation", "Indication", "Invitation", "Integration"]),
    correctAnswer: "Innovation"
  },
  {
    id: "v20",
    text: "The achievement of desired results",
    options: shuffleArray(["Success", "Process", "Progress", "Access"]),
    correctAnswer: "Success"
  },
  {
    id: "v21",
    text: "The act of confirming or establishing something",
    options: shuffleArray(["Verification", "Victory", "Vulnerability", "Visualization"]),
    correctAnswer: "Verification"
  },
  {
    id: "v22",
    text: "A factor that contributes to a result",
    options: shuffleArray(["Element", "Effort", "Event", "Emotion"]),
    correctAnswer: "Element"
  },
  {
    id: "v23",
    text: "A formal examination or review",
    options: shuffleArray(["Inspection", "Inspiration", "Innovation", "Information"]),
    correctAnswer: "Inspection"
  },
  {
    id: "v24",
    text: "A large-scale public event, typically of a celebratory nature",
    options: shuffleArray(["Festival", "Fair", "Exhibition", "Conference"]),
    correctAnswer: "Festival"
  },
  {
    id: "v25",
    text: "A statement that can be proven true or false",
    options: shuffleArray(["Fact", "Fiction", "Fallacy", "Fable"]),
    correctAnswer: "Fact"
  },
  {
    id: "v26",
    text: "A systematic plan for achieving a goal",
    options: shuffleArray(["Strategy", "Solution", "System", "Schedule"]),
    correctAnswer: "Strategy"
  },
  {
    id: "v27",
    text: "The process of combining two or more elements to form a new whole",
    options: shuffleArray(["Synthesis", "Symmetry", "Simplification", "Segmentation"]),
    correctAnswer: "Synthesis"
  },
  {
    id: "v28",
    text: "A person who creates or invents new things",
    options: shuffleArray(["Inventor", "Investor", "Insider", "Interpreter"]),
    correctAnswer: "Inventor"
  },
  {
    id: "v29",
    text: "A factor that impedes or slows down progress",
    options: shuffleArray(["Obstacle", "Opportunity", "Operation", "Objective"]),
    correctAnswer: "Obstacle"
  },
  {
    id: "v30",
    text: "A formal statement of an opinion or judgment",
    options: shuffleArray(["Opinion", "Observation", "Option", "Objective"]),
    correctAnswer: "Opinion"
  },
  {
    id: "v31",
    text: "To make something less severe or more bearable",
    options: shuffleArray(["Alleviate", "Adversity", "Amplify", "Attenuate"]),
    correctAnswer: "Alleviate"
  },
  {
    id: "v32",
    text: "A permanent, essential characteristic or trait",
    options: shuffleArray(["Attribute", "Affiliation", "Ambiguity", "Appearance"]),
    correctAnswer: "Attribute"
  },
  {
    id: "v33",
    text: "The act of investigating or examining something carefully",
    options: shuffleArray(["Examination", "Explanation", "Exploration", "Expression"]),
    correctAnswer: "Examination"
  },
  {
    id: "v34",
    text: "A special ability or skill",
    options: shuffleArray(["Talent", "Tactic", "Technique", "Tool"]),
    correctAnswer: "Talent"
  },
  {
    id: "v35",
    text: "A deep or profound effect",
    options: shuffleArray(["Impact", "Influence", "Impression", "Intuition"]),
    correctAnswer: "Impact"
  },
  {
    id: "v36",
    text: "To make something stronger or more powerful",
    options: shuffleArray(["Fortify", "Facilitate", "Foster", "Falter"]),
    correctAnswer: "Fortify"
  },
  {
    id: "v37",
    text: "A set of characteristics or qualities that define someone or something",
    options: shuffleArray(["Identity", "Indication", "Inspiration", "Innovation"]),
    correctAnswer: "Identity"
  },
  {
    id: "v38",
    text: "To express something in a way that is clearly understood",
    options: shuffleArray(["Clarify", "Classify", "Clarification", "Complicate"]),
    correctAnswer: "Clarify"
  },
  {
    id: "v39",
    text: "The process of making something more advanced or complex",
    options: shuffleArray(["Development", "Denial", "Disruption", "Diversion"]),
    correctAnswer: "Development"
  },
  {
    id: "v40",
    text: "A desire or wish for something to happen",
    options: shuffleArray(["Aspiration", "Affiliation", "Application", "Assessment"]),
    correctAnswer: "Aspiration"
  },
  {
    id: "v41",
    text: "The act of providing help or support",
    options: shuffleArray(["Assistance", "Apathy", "Assessment", "Advising"]),
    correctAnswer: "Assistance"
  },
  {
    id: "v42",
    text: "A requirement or condition that must be met",
    options: shuffleArray(["Prerequisite", "Procrastination", "Provision", "Progress"]),
    correctAnswer: "Prerequisite"
  },
  {
    id: "v43",
    text: "A system or method for organizing and planning",
    options: shuffleArray(["Structure", "Strategy", "Study", "Solution"]),
    correctAnswer: "Structure"
  },
  {
    id: "v44",
    text: "A distinct section or part of a larger whole",
    options: shuffleArray(["Segment", "System", "Standard", "Strength"]),
    correctAnswer: "Segment"
  },
  {
    id: "v45",
    text: "A situation where a conflict or disagreement occurs",
    options: shuffleArray(["Dispute", "Disagreement", "Discussion", "Dilemma"]),
    correctAnswer: "Dispute"
  },
  {
    id: "v46",
    text: "To gather and organize information",
    options: shuffleArray(["Compile", "Cancel", "Conclude", "Consume"]),
    correctAnswer: "Compile"
  },
  {
    id: "v47",
    text: "To help something develop or grow",
    options: shuffleArray(["Nurture", "Neutralize", "Navigate", "Neglect"]),
    correctAnswer: "Nurture"
  },
  {
    id: "v48",
    text: "To work together in order to achieve a common goal",
    options: shuffleArray(["Collaborate", "Compete", "Contribute", "Communicate"]),
    correctAnswer: "Collaborate"
  },
  {
    id: "v49",
    text: "The state of being in charge or control of something",
    options: shuffleArray(["Authority", "Ability", "Adaptability", "Ambition"]),
    correctAnswer: "Authority"
  },
  {
    id: "v50",
    text: "A detailed study or report on a particular subject",
    options: shuffleArray(["Analysis", "Advisory", "Assertion", "Appraisal"]),
    correctAnswer: "Analysis"
  }
];

function shuffleArray(arr: string[]): string[] {
  return arr.sort(() => Math.random() - 0.5);
}
