function cutCancerCells(organism){
  return organism.replace(/([a-z])C([a-z])|C([a-z])|([a-z])C|C|c| /gm, ''); 
}

/*
https://www.codewars.com/kata/5931614bb2f657c18c0001c3/train/javascript

DESCRIPTION:
Your task is to write a function which cuts cancer cells from the body.

Cancer cells are divided into two types:
Advance stage,described as letter C
Initial stage,described as letter c
Rest cells are divided as follows:

Normal cell,described as lowercase letter
Important cell,described as uppercase letter
Prerequisites:
Important cell,cannot be cut out.
Advance cancer cell,should be cut out with adjacent cells if it can be done.
Function input is a string (representing a body), remove "cancer" characters (based on the described rules) and return the body cured of those "cancer" characters.
*/
