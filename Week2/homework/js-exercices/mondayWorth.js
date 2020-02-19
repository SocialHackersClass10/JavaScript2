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

function addMinute(totMin, minut){
    return totMin+=minut.duration;
}

var totalMinutes1=mondayTasks.reduce(addMinute, 0);

function time_convert(totalMinutes)
 { 
  const hours = Math.floor(totalMinutes / 60);  
  const minutes = totalMinutes % 60;
  return `${hours}H:${minutes}M`;         
}

var totalMinutes2=time_convert(totalMinutes1);
console.log("My hourly rate on Monday is : " +totalMinutes2);

function timeEachTask(duree){
      return duree.duration;
}

var timeTask=mondayTasks.map(timeEachTask);
console.log("\nThe duration for each task is : " +timeTask);

function multiplyDuration(duree){
    let rate=11;
    return ((duree*rate)/60);
}
var multEachDuration=timeTask.map(multiplyDuration);
console.log("\nThe bill per duration for each task is : " +multEachDuration);

function totalBill(total, rateBytask){
    return total+rateBytask;
}
var totBill=multEachDuration.reduce(totalBill, 0);
totBill=totBill.toFixed(2);
console.log("\nThe total of he bill per duration for each task is : €" +totBill);