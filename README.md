# Awesome repo

You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

#Examples:

Kata.getMiddle("test") should return "es"

Kata.getMiddle("testing") should return "t"

Kata.getMiddle("middle") should return "dd"

Kata.getMiddle("A") should return "A"
#Input

A word (string) of length 0 < str < 1000 (In javascript you may get slightly more than 1000 in some test cases due to an error in the test cases). You do not need to test for this. This is only here to tell you that you do not need to worry about your solution timing out.

#Output

The middle character(s) of the word represented as a string.

Test.assertEquals(getMiddle("test"),"es");
    Test.assertEquals(getMiddle("testing"),"t");
    Test.assertEquals(getMiddle("middle"),"dd");
    Test.assertEquals(getMiddle("A"),"A");

## Legend
- ⚠ TODO
- 🚧 IN PROGRESS
- ✅ DONE

## Backlog
- ✅  it should return '' when given not string
- ✅  it should return 'A' when given 'A'
- ✅  it should return 'DD' when given 'DD'
- ✅  it should return 'aa' when given 'aa'
- ✅  it should return 'b' when given 'aba'
- ✅  it should return 'oo' when given 'lool'
- ✅  it should return 'ab' when given 'sabl'
- ✅  it should return 'Sa' when given 'sAdSaAbl'
- ✅  it should return 'G' when given 'enGel'