##GENERAL INSTRUCTIONS: 
Please complete the attached coding assignment.  This is a two-part assignment, which should take roughly one hour to complete.  The goal of the first part is to assess your ability to implement a working solution for a typical computer science programming exercise.  The goal of the second part is to assess your ability to test your solution.

##WHAT TO SUBMIT:
You should submit one attachment for Part One and a second attachment for Part Two (if you had time to complete it).
* The attachment for Part One should include the source code of your solution.  You may use any programming language that you choose.  But the code must be syntacticallyvalid, not pseudo-code.
* The attachment for Part Two can be a simple text document that describes your test cases.

Along with these attachments, please provide a note on how to run or load your code.  Also include a description of any assumptions you have made.

We understand that an hour may not be enough time for all candidates to complete both parts of this assignment.  But keep in mind that the first part is the most important.

##HOW YOU ARE TIMED: 
You have one hour to complete this assignment.  If there are circumstances, which prevent you from completing within an hour, please include those thoughts in your submission.

##HOW YOU WILL BE MEASURED:
Your solution will be assessedwith following criteria:
* Does the solution solve the given problem?
* How efficient is the design?
* Are proper coding practices followed?
* How readable or maintainable is the code?
* The quality of the test cases, if any.


##ASSIGNMENT PART ONE:
Submit a program that outputs 26 coordinates listed in order, closest-to-farthest (physically on the Cartesian Plane) from a single input origin.
 
Please use this list of labeled coordinates in a file called �coordinates.json�:
*[
  {"id":"a","value":"31,49"},
  {"id":"b","value":"44,67"},
  {"id":"c","value":"93,6"},
  {"id":"d","value":"20,16"},
  {"id":"e","value":"68,53"},
  {"id":"f","value":"71,8"},
  {"id":"g","value":"61,90"},
  {"id":"h","value":"34,97"},
  {"id":"i","value":"21,63"},
  {"id":"j","value":"19,84"},
  {"id":"k","value":"0,81"},
  {"id":"l","value":"6,76"},
  {"id":"m","value":"43,64"},
  {"id":"n","value":"18,64"},
  {"id":"o","value":"10,61"},
  {"id":"p","value":"37,27"},
  {"id":"q","value":"44,88"},
  {"id":"r","value":"75,63"},
  {"id":"s","value":"99,46"},
  {"id":"t","value":"28,51"},
  {"id":"u","value":"88,79"},
  {"id":"v","value":"47,21"},
  {"id":"w","value":"18,66"},
  {"id":"x","value":"84,100"},
  {"id":"y","value":"75,92"},
  {"id":"z","value":"32,33"}
]*

Create a program that will take in a single x and y coordinateas the origin.  After the input is provided, the output should be all of the coordinates (all 26 coordinates read from the �coordinates.json� file), in order of closest-to-farthest from the origin.

So, if the origin is (6,33), then the first item in the output would be the coordinate closest to (6,33), then the second closest, then third closest, and so on for all 26 input coordinates.

The origin should vary; do not hardcode a static origin.  Also, the coordinates must be sourced from �coordinates.json�.

##ASSIGNMENTPART TWO:
If time permits, write a suite of tests for your code in Part One.  The test cases can be written descriptions, and not necessarily in code.