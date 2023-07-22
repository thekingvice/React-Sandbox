const NumData = [
  201, 82, 211, 9, 254, 254, 62, 224, 269, 123, 241, 172, 284, 60, 187, 137,
  129, 240, 289, 119, 155, 72, 171, 168, 229, 189, 125, 69, 250, 253, 190, 22,
  133, 287, 170, 155, 287, 118, 102, 81, 210, 142, 169, 136, 68, 262, 253, 168,
  152, 237,
];

//Low to High
function LowToHigh(arr) {
  console.log(arr.sort((a, b) => a - b));
}

//High to Low
function HighToLow(arr) {
  console.log(arr.sort((a, b) => b - a));
}

const StringData = [
  "fringe",
  "coil",
  "unease",
  "vista",
  "delighted",
  "encounter",
  "flier",
  "stature",
  "retorted",
  "spyglass",
  "geometry",
  "dutiful",
  "demote",
  "cringe",
  "outright",
  "sepia",
  "poplar",
  "exceeding",
  "idealness",
  "feminine",
  "ducky",
  "dazzling",
  "moisture",
  "reorder",
  "suffice",
  "chemicals",
  "glimmer",
  "reason",
  "maverick",
  "purifier",
  "overbuilt",
  "handbook",
  "timid",
  "cringe",
  "banker",
  "authentic",
  "frantic",
  "gurgle",
  "overshoot",
  "average",
  "wiring",
  "underwent",
  "daringly",
  "frail",
  "unopened",
  "couch",
  "drop-down",
  "bruising",
  "buffalo",
  "stereo",
];

//A to Z
function AtoZ(arr) {
  console.log(arr.sort());
}

//Z to A
function ZtoA(arr) {
  console.log(arr.sort((a, b) => b.localeCompare(a)));
}

const StrAndNumData = [
  { str: "fringe", num: 201 },
  { str: "coil", num: 82 },
  { str: "unease", num: 211 },
  { str: "vista", num: 9 },
  { str: "delighted", num: 254 },
  { str: "encounter", num: 254 },
  { str: "flier", num: 62 },
  { str: "stature", num: 224 },
  { str: "retorted", num: 269 },
  { str: "spyglass", num: 123 },
  { str: "geometry", num: 241 },
  { str: "dutiful", num: 172 },
  { str: "demote", num: 284 },
  { str: "cringe", num: 60 },
  { str: "outright", num: 187 },
  { str: "sepia", num: 137 },
  { str: "poplar", num: 129 },
  { str: "exceeding", num: 240 },
  { str: "idealness", num: 289 },
  { str: "feminine", num: 119 },
  { str: "ducky", num: 155 },
  { str: "dazzling", num: 72 },
  { str: "moisture", num: 171 },
  { str: "reorder", num: 168 },
  { str: "suffice", num: 229 },
  { str: "chemicals", num: 189 },
  { str: "glimmer", num: 125 },
  { str: "reason", num: 69 },
  { str: "maverick", num: 250 },
  { str: "purifier", num: 253 },
  { str: "overbuilt", num: 190 },
  { str: "handbook", num: 22 },
  { str: "timid", num: 133 },
  { str: "cringe", num: 287 },
  { str: "banker", num: 170 },
  { str: "authentic", num: 155 },
  { str: "frantic", num: 287 },
  { str: "gurgle", num: 118 },
  { str: "overshoot", num: 102 },
  { str: "average", num: 81 },
  { str: "wiring", num: 210 },
  { str: "underwent", num: 142 },
  { str: "daringly", num: 169 },
  { str: "frail", num: 136 },
  { str: "unopened", num: 68 },
  { str: "couch", num: 262 },
  { str: "drop-down", num: 253 },
  { str: "bruising", num: 168 },
  { str: "buffalo", num: 152 },
  { str: "stereo", num: 237 },
];

//A to Z for object[]
function AtoZObjArr(arr) {
  console.log(arr.sort((a, b) => a.str.localeCompare(b.str)));
}

//Z to A for object[]
function ZtoAObjArr(arr) {
  console.log(arr.sort((a, b) => b.str.localeCompare(a.str)));
}

//Low to High for object[]
function LowToHighObjArr(arr) {
  console.log(arr.sort((a, b) => a.num - b.num));
}

//High to Low for object[]
function HighToLowObjArr(arr) {
  console.log(arr.sort((a, b) => b.num - a.num));
}
