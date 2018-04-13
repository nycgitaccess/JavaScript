let page = document.querySelector('#container');

dataFromApi();




function dataFromApi(){
  fetch('https://api.github.com/orgs/SocialHackersCodeSchool/repos')
  .then(response => response.json())
  .then( (data) => {
    console.log(data)
    appendTopage(data) });

}


function appendTopage(data){
  //----------maped all the object
        let listOfObject = document.createElement('div');
        data.map((value, index) => {listOfObject.innerHTML += `${index}. ${value.name}${'<br>'}  ` });
        page.appendChild(listOfObject);
  //------filtered by frok
        let listOfFrokObject = document.createElement('div');
        let filterdByFork = data.filter(value => {
          if(value.fork === true){
            return true;
          }
    });
    listOfFrokObject.innerHTML = filterdByFork.map((value,index) => ` ${index} ${value.name}'</br>'`)
    page.appendChild(listOfFrokObject);
    console.log(listOfFrokObject);
//-------------reduce
  let oneObject = data.reduce( (acc, cValue) =>
    {
      acc[cValue] = cValue.name;
      return acc;

    },{});
console.log(typeof oneObject);
console.log(oneObject);
}


// step five
let numbers = [1, 2, 3, 4];
let newNumbers = [];

for(let i = 0; i < numbers.length; i++) {
    if(numbers[i] % 2 !== 0) {
        newNumbers[i] = numbers[i] * 2;
    }
}

console.log("The doubled numbers are", newNumbers); // [2, 6]

//-------------------------------1
let filterEvemNum = numbers.filter(value => {
    if(value % 2 == 0){
      return true;
    }
  })
console.log(filterEvemNum)
//--------------------------------2
let doublEvenNum = numbers.reduce((acc,value,index)=>{
  acc.push(value)
    if(value % 2 ==0){
      acc.push(value)
    }
return acc;

},[]);
console.log(doublEvenNum)

///----------------------3

let monday = [
        {
            name     : 'Write a summary HTML/CSS',
            duration : 180
        },
        {
            name     : 'Some web development',
            duration : 120
        },
        {
            name     : 'Try to convince teachers to fix homework class10',
            duration : 30
        },
        {
            name     : 'Fix homework for class10 myself',
            duration : 20
        },
        {
            name     : 'Talk to a lot of people',
            duration : 200
        }
    ];

let tuesday = [
        {
            name     : 'Keep writing summery',
            duration : 240
        },
        {
            name     : 'Some more web development',
            duration : 180
        },
        {
            name     : 'Staring out the window',
            duration  : 10
        },
        {
            name     : 'Talk to a lot of people',
            duration : 200
        },
        {
            name     : 'Look at application assignments new students',
            duration : 40
        }
    ];
let tasks = [monday, tuesday];

////----------collection of two days task
var collectionOfTeask = [...tasks[0] , ...tasks[1]];
console.log(collectionOfTeask)

//------------convert the min to hour

console.log(collectionOfTeask.map(value=> value.duration/60))
//-------------------filter everytheing 2 hours
let everytheingTwoHours = collectionOfTeask.filter(value=> {
  if(value.duration /60 >= 2){
    return true;
  }
})
console.log(everytheingTwoHours)
///-------------sum it all up
sum = 0;
everytheingTwoHours.map(value => sum += value.duration/60)
console.log(sum);
//---------------per hour rate 5$
let perHourRate = 5;
let paid = perHourRate * sum;
console.log(paid)
//------------

console.log(`this is you gonna get after this herd work ${Math.round(paid)} euro ----lol`)
