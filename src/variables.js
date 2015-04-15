/*
Input:
a: a whole, positive number

Output:
plus5: a number that is the sum of 5 and `a`
asString: a string that is just `a` converted to a string
yourNumberIs: a string that says "Your Number is `x`." where `x` is replaced by
in input `a`
a: the original a number
*/

function variableModification(a) {
  var plus5 = 5 + a;
  var asString = a.toString();
  var yourNumberIs = 'Your Number is ' + asString;
  return [plus5, asString, yourNumberIs, a];
}

/*
Input:
b: could be anything

Output:
return true if b is a primitive string value (also known as a string literal),
false otherwise
*/

function isString(b) {
  if (typeof b === 'string') {
    return true;
  }
  return false;
}

/*
Input:
c: could be anything

Output:
return true if c is null, false otherwise
*/

function isNull(c) {
  if (c === null) {
    return true;
  }
  return false;
}