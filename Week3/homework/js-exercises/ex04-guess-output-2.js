
{
    'use strict';

    console.log("= = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =");
    console.log("JS-2 - week 3 - Exercise 04 - Guess more");
    console.log("Practice with closures");
    console.log("- - - - - - - - - - - - - - - - - - - -");

    const x = 9;
    function f1(val) {
        val = val + 1;
        return val;
    }

    const y = { x: 9 };
    function f2(val) {
        val.x = val.x + 1;
        return val;
    }

    console.log(` `);
    console.log(`"x" is a number, which is a primitive datatype. `);
    console.log(`   Function parameters of primitive type are passed by value `);
    console.log(`   meaning that any changes done inside the scope of "f1" `);
    console.log(`   is actually done to a local copy of the variable `);
    console.log(`   and will not affect the global variable. `);
    console.log(`   (even were it declared with "let" instead of "const")`);
    console.log(` `);
    console.log(`Therefore "console.log(f1(x))" would produce "10" `);
    console.log(`   which is the function's result `);
    console.log(`Whereas "console.log(x)" would produces "9" `);
    console.log(`   both before and after calling "f1(x)" `);
    console.log(` `);
    console.log(`value of "x" before function = [${x}] `);
    console.log(`value of function "f1(x)"    = [${f1(x)}] `);
    console.log(`value of "x" after function  = [${x}] `);
    console.log(` `);

    console.log(` `);
    console.log(`"y" in contrast, is an object datatype and "x" is a property of that onject. `);
    console.log(`   Value changes to properties of objects are not scope-specific `);
    console.log(`   regardless of the object declaration, either "const" or "let" `);
    console.log(` `);
    console.log(`Therefore "console.log(f2(y).x)" would produce "10" `);
    console.log(`   which is the value of the property "x" of the function's result `);
    console.log(`Whereas "console.log(y.x)" would produce "9" before "f2(y)", but "10" after `);
    console.log(` `);
    console.log(`value of "y.x" before function = [${y.x}] `);
    console.log(`value of function "f2(y).x"    = [${f2(y).x}] `);
    console.log(`value of "y.x" after function  = [${y.x}] `);

    console.log("= = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =");
    console.log(" ");
};


;

