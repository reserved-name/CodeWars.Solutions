function humanReadable (seconds) {
  function format(value) { return Math.floor(value).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false}) }
  return format(seconds/3600)+':'+format(seconds / 60 % 60)+':'+format(seconds % 60);
}

/*
https://www.codewars.com/kata/52685f7382004e774f0001f7/train/javascript

DESCRIPTION:
Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds 359999 (99:59:59)

You can find some examples in the test fixtures.
*/
