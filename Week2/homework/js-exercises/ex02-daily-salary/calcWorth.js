
{
    'use strict';

    function calcDailySalary(objArray,hourlyWage) {
        const dailyHours=objArray.map(currentRef=>Number(currentRef['duration']))
                                 .reduce((totalValue,currentValue)=>totalValue+currentValue,0)/60;
        return `Based on your hourly wage of €${hourlyWage} `
              +`and the total of ${dailyHours} working hours `
              +`your salary will be €${Math.round(100*dailyHours*hourlyWage)/100}`;
    };

    console.log("= = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =");
    console.log("JS-2 - week 2 - Exercise 02 - What's your Workday's worth");
    console.log("Practice with Array of objects: iteration and value sum");
    console.log("- - - - - - - - - - - - - - - - - - - -");

    const mondayTasks = [
        { name: 'Daily standup',       duration: 30,  },
        { name: 'Feature discussion',  duration: 120, },
        { name: 'Development time',    duration: 240, },
        { name: 'Talk to different members from the product team', duration: 60, },
    ];

    console.log("Calculate the Day's salary based on following task schedule:");
    console.log(mondayTasks);
    console.log(calcDailySalary(mondayTasks,25));

    console.log("= = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =");
    console.log(" ");
};

;

