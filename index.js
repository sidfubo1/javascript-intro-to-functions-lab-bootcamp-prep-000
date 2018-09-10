function shout (string) {
  string = string.toUpperCase();
  return string;
}

function whisper (string) {
  string = string.toLowerCase();
  return string;
}

function logShout (string) {
  string = string.toUpperCase();
  console.log(string);
}

function logWhisper (string) {
  string = string.toLowerCase();
  console.log(string);
}

function sayHiToGrandma (string) {
  if (string == string.toLowerCase()) {
    return "I can't hear you"
  } else {
    return string;
  }
}