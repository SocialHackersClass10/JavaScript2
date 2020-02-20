
{
    'use strict';

    console.log("= = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =");
    console.log("JS-2 - week 3 - Exercise 03 - Guess the output");
    console.log("Practice with closures");
    console.log("- - - - - - - - - - - - - - - - - - - -");

    let a = 10;
    const x = (function() {
      a = 12;
      return function() {
        alert(a);
      };
    })();

    console.log(`"x" is a Closure,`);
    console.log(`   which is a function defined and returned (as a result)`);
    console.log(`   from within another function.`);
    console.log(` `);
    console.log(`Closures have access to the scope of their constructor`);
    console.log(`   so "a" in "alert(a)" holds the value "12"`);
    console.log(` `);
    console.log(`Therefore evoking the closure "x()"`);
    console.log(`    will produce a popup window with the message "12"`);

    x();

    console.log("= = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =");
    console.log(" ");
};


;

