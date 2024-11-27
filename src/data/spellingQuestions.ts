import { Question } from '../types';

const shuffleArray = (array: string[]): string[] => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; // Swap elements
  }
  return array;
};

export const spellingQuestions: Question[] = [
  {
    id: "s1",
    text: "Choose the correct spelling:",
    options: shuffleArray(["accommodation", "accomodation", "acommodation", "acomodation"]),
    correctAnswer: "accommodation"
  },
  {
    id: "s2",
    text: "Choose the correct spelling:",
    options: shuffleArray(["necessary", "necesary", "neccesary", "necessery"]),
    correctAnswer: "necessary"
  },
  {
    id: "s3",
    text: "Choose the correct spelling:",
    options: shuffleArray(["occurrence", "occurence", "occurrance", "occurance"]),
    correctAnswer: "occurrence"
  },
  {
    id: "s4",
    text: "Choose the correct spelling:",
    options: shuffleArray(["beginning", "begining", "beginnning", "begginning"]),
    correctAnswer: "beginning"
  },
  {
    id: "s5",
    text: "Choose the correct spelling:",
    options: shuffleArray(["immediately", "immediatly", "imediately", "immediatley"]),
    correctAnswer: "immediately"
  },
  {
    id: "s6",
    text: "Choose the correct spelling:",
    options: shuffleArray(["separate", "seperate", "separete", "separat"]),
    correctAnswer: "separate"
  },
  {
    id: "s7",
    text: "Choose the correct spelling:",
    options: shuffleArray(["definitely", "definately", "definitly", "definetly"]),
    correctAnswer: "definitely"
  },
  {
    id: "s8",
    text: "Choose the correct spelling:",
    options: shuffleArray(["environment", "enviroment", "enviornment", "envieronment"]),
    correctAnswer: "environment"
  },
  {
    id: "s9",
    text: "Choose the correct spelling:",
    options: shuffleArray(["government", "goverment", "governmant", "govenment"]),
    correctAnswer: "government"
  },
  {
    id: "s10",
    text: "Choose the correct spelling:",
    options: shuffleArray(["privilege", "privelege", "priviledge", "privilage"]),
    correctAnswer: "privilege"
  },
  {
    id: "s11",
    text: "Choose the correct spelling:",
    options: shuffleArray(["receive", "recieve", "receeve", "receve"]),
    correctAnswer: "receive"
  },
  {
    id: "s12",
    text: "Choose the correct spelling:",
    options: shuffleArray(["successful", "succesful", "successfull", "sucessful"]),
    correctAnswer: "successful"
  },
  {
    id: "s13",
    text: "Choose the correct spelling:",
    options: shuffleArray(["tomorrow", "tommorow", "tommorrow", "tomorow"]),
    correctAnswer: "tomorrow"
  },
  {
    id: "s14",
    text: "Choose the correct spelling:",
    options: shuffleArray(["business", "busines", "bussiness", "buisness"]),
    correctAnswer: "business"
  },
  {
    id: "s15",
    text: "Choose the correct spelling:",
    options: shuffleArray(["committee", "commitee", "comittee", "committe"]),
    correctAnswer: "committee"
  },
  {
    id: "s16",
    text: "Choose the correct spelling:",
    options: shuffleArray(["colleague", "colleage", "coligue", "colleigue"]),
    correctAnswer: "colleague"
  },
  {
    id: "s17",
    text: "Choose the correct spelling:",
    options: shuffleArray(["experience", "experiance", "expirience", "experiance"]),
    correctAnswer: "experience"
  },
  {
    id: "s18",
    text: "Choose the correct spelling:",
    options: shuffleArray(["maintenance", "maintainance", "maintnance", "maintainence"]),
    correctAnswer: "maintenance"
  },
  {
    id: "s19",
    text: "Choose the correct spelling:",
    options: shuffleArray(["personnel", "personel", "personell", "personnell"]),
    correctAnswer: "personnel"
  },
  {
    id: "s20",
    text: "Choose the correct spelling:",
    options: shuffleArray(["schedule", "schedual", "shedule", "scheduel"]),
    correctAnswer: "schedule"
  },
  {
    id: "s21",
    text: "Choose the correct spelling:",
    options: shuffleArray(["occurrence", "occurance", "occurence", "occurrance"]),
    correctAnswer: "occurrence"
  },
  {
    id: "s22",
    text: "Choose the correct spelling:",
    options: shuffleArray(["recognize", "reconize", "recignize", "recognise"]),
    correctAnswer: "recognize"
  },
  {
    id: "s23",
    text: "Choose the correct spelling:",
    options: shuffleArray(["appreciate", "appreciete", "apreciate", "apreciate"]),
    correctAnswer: "appreciate"
  },
  {
    id: "s24",
    text: "Choose the correct spelling:",
    options: shuffleArray(["calendar", "calender", "calandar", "calender"]),
    correctAnswer: "calendar"
  },
  {
    id: "s25",
    text: "Choose the correct spelling:",
    options: shuffleArray(["definitely", "definatly", "definitly", "definetly"]),
    correctAnswer: "definitely"
  },
  {
    id: "s26",
    text: "Choose the correct spelling:",
    options: shuffleArray(["judgment", "judgement", "judgemenet", "judgemen"]),
    correctAnswer: "judgment"
  },
  {
    id: "s27",
    text: "Choose the correct spelling:",
    options: shuffleArray(["occurrence", "occurance", "occurrance", "occurence"]),
    correctAnswer: "occurrence"
  },
  {
    id: "s28",
    text: "Choose the correct spelling:",
    options: shuffleArray(["pronunciation", "pronounciation", "pronounciation", "pronunication"]),
    correctAnswer: "pronunciation"
  },
  {
    id: "s29",
    text: "Choose the correct spelling:",
    options: shuffleArray(["completely", "compleetly", "compleatly", "completly"]),
    correctAnswer: "completely"
  },
  {
    id: "s30",
    text: "Choose the correct spelling:",
    options: shuffleArray(["acquaintance", "aquaintance", "acquaintence", "aquiantance"]),
    correctAnswer: "acquaintance"
  },
  {
    id: "s31",
    text: "Choose the correct spelling:",
    options: shuffleArray(["conscious", "concious", "concious", "consious"]),
    correctAnswer: "conscious"
  },
  {
    id: "s32",
    text: "Choose the correct spelling:",
    options: shuffleArray(["believe", "beleive", "beleve", "beleeve"]),
    correctAnswer: "believe"
  },
  {
    id: "s33",
    text: "Choose the correct spelling:",
    options: shuffleArray(["accommodation", "acommodation", "accomodation", "acomodation"]),
    correctAnswer: "accommodation"
  },
  {
    id: "s34",
    text: "Choose the correct spelling:",
    options: shuffleArray(["committee", "comittee", "commitee", "committe"]),
    correctAnswer: "committee"
  },
  {
    id: "s35",
    text: "Choose the correct spelling:",
    options: shuffleArray(["information", "informantion", "informastion", "informtation"]),
    correctAnswer: "information"
  },
  {
    id: "s36",
    text: "Choose the correct spelling:",
    options: shuffleArray(["knowledge", "knowlage", "knwledge", "knolegde"]),
    correctAnswer: "knowledge"
  },
  {
    id: "s37",
    text: "Choose the correct spelling:",
    options: shuffleArray(["laughter", "laugher", "loughter", "lughter"]),
    correctAnswer: "laughter"
  },
  {
    id: "s38",
    text: "Choose the correct spelling:",
    options: shuffleArray(["rhythm", "rythm", "rithym", "rythym"]),
    correctAnswer: "rhythm"
  },
  {
    id: "s39",
    text: "Choose the correct spelling:",
    options: shuffleArray(["guarantee", "guarentee", "guarantie", "garantee"]),
    correctAnswer: "guarantee"
  },
  {
    id: "s40",
    text: "Choose the correct spelling:",
    options: shuffleArray(["conscious", "conshious", "consious", "consious"]),
    correctAnswer: "conscious"
  },
  {
    id: "s41",
    text: "Choose the correct spelling:",
    options: shuffleArray(["successful", "succesful", "sucessfull", "successfull"]),
    correctAnswer: "successful"
  },
  {
    id: "s42",
    text: "Choose the correct spelling:",
    options: shuffleArray(["definitely", "definatley", "definitly", "definetly"]),
    correctAnswer: "definitely"
  },
  {
    id: "s43",
    text: "Choose the correct spelling:",
    options: shuffleArray(["pronunciation", "pronounciation", "pronouncation", "pronunciaction"]),
    correctAnswer: "pronunciation"
  },
  {
    id: "s44",
    text: "Choose the correct spelling:",
    options: shuffleArray(["quarantine", "quarentine", "quarenteen", "quarrentine"]),
    correctAnswer: "quarantine"
  },
  {
    id: "s45",
    text: "Choose the correct spelling:",
    options: shuffleArray(["recommend", "recomend", "recommed", "recomand"]),
    correctAnswer: "recommend"
  },
  {
    id: "s46",
    text: "Choose the correct spelling:",
    options: shuffleArray(["vocabulary", "vocablary", "vocabullary", "vocablury"]),
    correctAnswer: "vocabulary"
  },
  {
    id: "s47",
    text: "Choose the correct spelling:",
    options: shuffleArray(["supervisor", "supervizer", "suprvisor", "supervizer"]),
    correctAnswer: "supervisor"
  },
  {
    id: "s48",
    text: "Choose the correct spelling:",
    options: shuffleArray(["occurence", "occurance", "occurrence", "ocurrance"]),
    correctAnswer: "occurrence"
  },
  {
    id: "s49",
    text: "Choose the correct spelling:",
    options: shuffleArray(["analysis", "analisis", "analisys", "analysys"]),
    correctAnswer: "analysis"
  },
  {
    id: "s50",
    text: "Choose the correct spelling:",
    options: shuffleArray(["scissors", "scisors", "cisors", "scisors"]),
    correctAnswer: "scissors"
  },
];
