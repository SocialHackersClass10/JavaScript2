"use strict"
const mondayTasks = [
    {
        name: 'Daily standup',
        duration: 30, // specified in minutes
    },
    {
        name: 'Feature discussion',
        duration: 120,
    },
    {
        name: 'Development time',
        duration: 240,
    },
    {
        name: 'Talk to different members from the product team',
        duration: 60,
    },
];

function mondayWorth() {
    let totalRate = mondayTasks.map(function (activity) {
        //Converting each duration to hours and multiplying by hourly rate
        return (activity.duration / 60) * 25
        //Adding all rates
    }).reduce(function (acc, cur) {
        return acc + cur;
    }, 0)
    return `€${+totalRate.toFixed(2)}`;
}

