function remove (string) {
    return string.split("").filter((x,i)=> !(x == "!" && i == string.split("").length-1) ).join("")
    }

/*

8kyu-Exclamation marks series #1: Remove an exclamation mark from the end of string


Description:
Remove an exclamation mark from the end of a string. For a beginner kata, 
you can assume that the input data is always a string, no need to verify it.

Examples
remove("Hi!") === "Hi"
remove("Hi!!!") === "Hi!!"
remove("!Hi") === "!Hi"
remove("!Hi!") === "!Hi"
remove("Hi! Hi!") === "Hi! Hi"
remove("Hi") === "Hi"


BEST SOLUTİONS

--------------------------------------------------------------------

function remove(s) {
  return s.endsWith('!') ? s.slice(0, -1) : s;
}

--------------------------------------------------------------------

const remove = s => s.replace(/!$/, '');

--------------------------------------------------------------------
