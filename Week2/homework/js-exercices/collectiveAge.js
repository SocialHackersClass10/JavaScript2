const  hackYourFutureMembers  =  [ 
    {  name : 'Wouter' ,  age : 33  } , 
    {  name : 'Federico' ,  age : 32  } , 
    {  name : 'Noer' ,  age : 27  } , 
    {  name : 'Tjebbe' ,  age : 22  } , 
  ] ;

const ages=hackYourFutureMembers.map(keepAge);
function keepAge(myArrayAges){
  return myArrayAges.age;
}
console.log("the age by student is :"+ages);

const collectiveAge=hackYourFutureMembers.reduce((accu, ages) => accu+ages.age, 0);

function mainFunc(callFunc){
  console.log("L'âge collectif de l'équipe HYF est : "+callFunc);
  return callFunc;
}
mainFunc(collectiveAge);
