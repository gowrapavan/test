import { Question } from '../types';

// Utility function to shuffle an array
const shuffleArray = (array: any[]) => {
  return array.sort(() => Math.random() - 0.5);
};

export const fluencyQuestions: Question[] = [
  {
    id: "f1",
    text: "The company\u2019s success was largely _____ to its innovative marketing strategy.",
    options: shuffleArray(["attributed", "contributed", "distributed", "submitted"]),
    correctAnswer: "attributed"
  },
  {
    id: "f2",
    text: "The team needs to _____ the project deadline to ensure quality delivery.",
    options: shuffleArray(["meet", "achieve", "reach", "arrive"]),
    correctAnswer: "meet"
  },
  {
    id: "f3",
    text: "The new policy will _____ effect from next month.",
    options: shuffleArray(["take", "make", "get", "have"]),
    correctAnswer: "take"
  },
  {
    id: "f4",
    text: "Please _____ attention to the safety instructions.",
    options: shuffleArray(["pay", "give", "take", "make"]),
    correctAnswer: "pay"
  },
  {
    id: "f5",
    text: "The manager decided to _____ the meeting until next week.",
    options: shuffleArray(["postpone", "delay", "defer", "extend"]),
    correctAnswer: "postpone"
  },
  {
    id: "f6",
    text: "We need to _____ a decision by the end of today.",
    options: shuffleArray(["make", "take", "do", "have"]),
    correctAnswer: "make"
  },
  {
    id: "f7",
    text: "The results _____ our expectations significantly.",
    options: shuffleArray(["exceeded", "surpassed", "overcame", "overtook"]),
    correctAnswer: "exceeded"
  },
  {
    id: "f8",
    text: "The committee will _____ the proposal next week.",
    options: shuffleArray(["review", "revise", "revisit", "renew"]),
    correctAnswer: "review"
  },
  {
    id: "f9",
    text: "We must _____ to the changing market conditions.",
    options: shuffleArray(["adapt", "adjust", "alter", "amend"]),
    correctAnswer: "adapt"
  },
  {
    id: "f10",
    text: "The company plans to _____ its operations globally.",
    options: shuffleArray(["expand", "extend", "enlarge", "enhance"]),
    correctAnswer: "expand"
  },
  {
    id: "f11",
    text: "The report _____ several key recommendations.",
    options: shuffleArray(["contains", "includes", "holds", "carries"]),
    correctAnswer: "contains"
  },
  {
    id: "f12",
    text: "We need to _____ our resources more efficiently.",
    options: shuffleArray(["utilize", "use", "employ", "apply"]),
    correctAnswer: "utilize"
  },
  {
    id: "f13",
    text: "The new system will _____ productivity significantly.",
    options: shuffleArray(["improve", "increase", "enhance", "boost"]),
    correctAnswer: "improve"
  },
  {
    id: "f14",
    text: "Please _____ your response by email.",
    options: shuffleArray(["confirm", "verify", "validate", "approve"]),
    correctAnswer: "confirm"
  },
  {
    id: "f15",
    text: "The team will _____ the project requirements tomorrow.",
    options: shuffleArray(["discuss", "debate", "talk", "converse"]),
    correctAnswer: "discuss"
  },
  {
    id: "f16",
    text: "We must _____ compliance with all regulations.",
    options: shuffleArray(["ensure", "assure", "secure", "guarantee"]),
    correctAnswer: "ensure"
  },
  {
    id: "f17",
    text: "The department needs to _____ its annual budget.",
    options: shuffleArray(["prepare", "create", "make", "develop"]),
    correctAnswer: "prepare"
  },
  {
    id: "f18",
    text: "The manager will _____ the new policy next month.",
    options: shuffleArray(["implement", "execute", "perform", "conduct"]),
    correctAnswer: "implement"
  },
  {
    id: "f19",
    text: "We need to _____ the quality standards consistently.",
    options: shuffleArray(["maintain", "keep", "hold", "sustain"]),
    correctAnswer: "maintain"
  },
  {
    id: "f20",
    text: "The team should _____ regular progress updates.",
    options: shuffleArray(["provide", "give", "supply", "deliver"]),
    correctAnswer: "provide"
  },
  {
    id: "f21",
    text: "The project manager will _____ the client on the progress next week.",
    options: shuffleArray(["update", "inform", "notify", "tell"]),
    correctAnswer: "update"
  },
  {
    id: "f22",
    text: "The decision to _____ the product launch was made after careful consideration.",
    options: shuffleArray(["postpone", "delay", "halt", "suspend"]),
    correctAnswer: "postpone"
  },
  {
    id: "f23",
    text: "We are hoping to _____ our customer base by 20% in the next year.",
    options: shuffleArray(["expand", "increase", "boost", "augment"]),
    correctAnswer: "expand"
  },
  {
    id: "f24",
    text: "She didn’t _____ her answer during the meeting.",
    options: shuffleArray(["modify", "adjust", "alter", "change"]),
    correctAnswer: "modify"
  },
  {
    id: "f25",
    text: "The company plans to _____ its presence in the international markets.",
    options: shuffleArray(["expand", "boost", "enhance", "grow"]),
    correctAnswer: "expand"
  },
  {
    id: "f26",
    text: "It is essential to _____ all safety measures during the operation.",
    options: shuffleArray(["follow", "adhere", "comply", "keep"]),
    correctAnswer: "adhere"
  },
  {
    id: "f27",
    text: "The marketing campaign will _____ next month.",
    options: shuffleArray(["launch", "commence", "start", "begin"]),
    correctAnswer: "launch"
  },
  {
    id: "f28",
    text: "We need to _____ the new software system as soon as possible.",
    options: shuffleArray(["integrate", "implement", "install", "adopt"]),
    correctAnswer: "integrate"
  },
  {
    id: "f29",
    text: "Our goal is to _____ the current state of the company’s finances.",
    options: shuffleArray(["evaluate", "assess", "review", "analyze"]),
    correctAnswer: "evaluate"
  },
  {
    id: "f30",
    text: "Please _____ the documents before sending them to the client.",
    options: shuffleArray(["review", "examine", "check", "inspect"]),
    correctAnswer: "review"
  },
  {
    id: "f31",
    text: "The company will _____ a new product line next year.",
    options: shuffleArray(["introduce", "launch", "present", "roll out"]),
    correctAnswer: "introduce"
  },
  {
    id: "f32",
    text: "We need to _____ a new strategy to achieve our goals.",
    options: shuffleArray(["develop", "formulate", "create", "design"]),
    correctAnswer: "develop"
  },
  {
    id: "f33",
    text: "The product needs to be _____ before it can be released to the market.",
    options: shuffleArray(["tested", "inspected", "evaluated", "reviewed"]),
    correctAnswer: "tested"
  },
  {
    id: "f34",
    text: "It’s important to _____ with the project timeline.",
    options: shuffleArray(["stick", "adhere", "follow", "comply"]),
    correctAnswer: "stick"
  },
  {
    id: "f35",
    text: "We must _____ the report by the end of the day.",
    options: shuffleArray(["submit", "send", "deliver", "submit"]),
    correctAnswer: "submit"
  },
  {
    id: "f36",
    text: "The project manager will _____ the team next week.",
    options: shuffleArray(["meet", "gather", "assemble", "consult"]),
    correctAnswer: "meet"
  },
  {
    id: "f37",
    text: "The department needs to _____ its performance metrics.",
    options: shuffleArray(["review", "analyze", "evaluate", "assess"]),
    correctAnswer: "evaluate"
  },
  {
    id: "f38",
    text: "We need to _____ feedback from the clients before proceeding.",
    options: shuffleArray(["gather", "collect", "receive", "obtain"]),
    correctAnswer: "gather"
  },
  {
    id: "f39",
    text: "It’s important to _____ with the team regularly to ensure success.",
    options: shuffleArray(["communicate", "interact", "connect", "engage"]),
    correctAnswer: "communicate"
  },
  {
    id: "f40",
    text: "The company aims to _____ its presence in new markets.",
    options: shuffleArray(["expand", "increase", "grow", "extend"]),
    correctAnswer: "expand"
  },
  {
    id: "f41",
    text: "The team was able to _____ the project ahead of schedule.",
    options: shuffleArray(["complete", "finish", "accomplish", "conclude"]),
    correctAnswer: "complete"
  },
  {
    id: "f42",
    text: "The company’s sales team will _____ the new product features.",
    options: shuffleArray(["demonstrate", "explain", "show", "illustrate"]),
    correctAnswer: "demonstrate"
  },
  {
    id: "f43",
    text: "The company needs to _____ the new hiring policy next week.",
    options: shuffleArray(["introduce", "implement", "announce", "deploy"]),
    correctAnswer: "introduce"
  },
  {
    id: "f44",
    text: "We must _____ the current systems to identify any weaknesses.",
    options: shuffleArray(["audit", "review", "inspect", "analyze"]),
    correctAnswer: "audit"
  },
  {
    id: "f45",
    text: "The marketing campaign is expected to _____ a significant increase in brand awareness.",
    options: shuffleArray(["achieve", "create", "generate", "lead"]),
    correctAnswer: "generate"
  },
  {
    id: "f46",
    text: "The project team will _____ the initial draft next week.",
    options: shuffleArray(["present", "submit", "release", "introduce"]),
    correctAnswer: "present"
  },
  {
    id: "f47",
    text: "We need to _____ progress updates from all departments.",
    options: shuffleArray(["receive", "obtain", "gather", "collect"]),
    correctAnswer: "gather"
  },
  {
    id: "f48",
    text: "The board of directors will _____ the annual budget next month.",
    options: shuffleArray(["review", "approve", "evaluate", "discuss"]),
    correctAnswer: "approve"
  },
  {
    id: "f49",
    text: "The company has decided to _____ its product line to cater to a wider audience.",
    options: shuffleArray(["diversify", "expand", "extend", "broaden"]),
    correctAnswer: "diversify"
  },
  {
    id: "f50",
    text: "We need to _____ resources to the new project.",
    options: shuffleArray(["allocate", "assign", "distribute", "divide"]),
    correctAnswer: "allocate"
  }
];
