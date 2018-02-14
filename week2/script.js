//task 1

/* 1.Create a function that takes 3 arguments and returns the sum of the three arguments.*/

function sumOFThreeArgument(num1,num2,num3){
var sum = num1+num2+num3;
return "here is the sum of three argument: "+ sum;
}
console.log(sumOFThreeArgument(1,5,10));
//task 2
/*

2.Create a function named colorCar that receives a color, and prints out, "a red car" for example.
(Hint: put it in your file and run it like before.)
*/
function colorcar(color){

	let a= "A";
	let b= "Car";
	return a+ " " + color+" " + b;
}
console.log(colorcar("blue"));
//task 3
/*
3.Create a function named vehicleType that receives a color, and a code, 1 for car, 2 for motorbike.
 And prints "a blue motorbike" for example when called as vehicleType("blue", 2)
*/

function VicaleType(color, type){
	if(type===2){
	var type2 = color +" MotorCycal";
	return type2;
	}else if(type===1) {
		var type1 =	color +" Car";
		return type1;
	}else {
	var ittn="incorrect Type";
	return ittn;
	}

}
console.log(VicaleType("red",1));

// task 4
/*
4.Can you write the following without the if statement, but with just as a single line with console.log(...);?

if (3 === 3) {
    console.log("true")
} else {
    console.log("false")
*/

console.log((3 ===7) ? "true": "false");

//task 5

/*
5.Create a function called vehicle, like before, but takes another parameter called age, so that

    vehicle("blue", 1, 2) prints "a blue used car".
    vehicle("blue", 1, 1) prints "a blue new car".
*/
function vicaleWithUsedOrNew(color,type,status){
if (status===1){

	if(type===2 ){	var ittn=console.log();

	return color +" MotorCycal"+ " New";
	}else if(type===1) {

		return color +" Car" + " New";
	}else {

	return "incorrect Type";
	}



}else if(status===2){


	if(type===2) {
		return color +" MotorCycal"+ " used";
	}else if(type===1) {
		return color +" Car" + " used";
	}else {
		return "incorrect Type";
	}
}
}

console.log(vicaleWithUsedOrNew("blue",1,2));
console.log(vicaleWithUsedOrNew("blue",2,1));



//task 6

//list of different vicale
//index0 = Car
//index1 = bick
//index2 = lorry
var vechicleArray =[
										{type:"car"},
										{type:"bick"},
										{type:"lorry"}];



//task 7 how to access :
console.log(vechicleArray[2]);

//task 8
/*
Change the function vehicle to use the list of question 6.
So that vehicle("green", 3, 1)
 prints "a green new caravan".
*/





function vicaleWithUsedOrNew2(color,type,status){
	var vechiclelist =[
											{type:"car"},
											{type:"bick"},
											{type:"lorry"}
										];



									if (status===1){

										if(type===2 ){
											return color + vechiclelist[1].type+ " New";
										}else if(type===1) {
											return color +vechiclelist[0].type + " New";
										}else if(type===3) {
											return color +vechiclelist[2].type + " New";
										}else {
											return "incorrect Type";
										}
									}else if(status===2){
										if(type===2) {
											return color +vechiclelist[1].type+ " used";
										} else if(type===1) {
											return color +vechiclelist[0].type  + " used";
										} else if(type===3) {
											return color +vechiclelist[2].type + " used";
										} else {
											return "incorrect Type";
										}

									}
									}

									vicaleWithUsedOrNew2("blue",1,2);
									vicaleWithUsedOrNew2("blue",2,1);




//task 9
/***

9.Use the list of vehicles to write an advertisement.
So that it prints something like: "Amazing Joe's Garage,
 we service cars, motorbikes, caravans and bikes.".
 (Hint: use a for loop.)

**/

var adList =[
									"car",
										"bick",
										"lorry"
									];


let string ="";
for(let i=0;i < adList.length;i++){
	string += adList[i]+", ";

}
	console.log("Amazing Joe's Garage "+ string);



/*
10.Write some code to test two arrays
 for equality
  using == and ===. Test the following:
*/
var adList =[
									"car",
										"bick",
										"lorry",
										"airplan"
									];



for(let i=0;i < adList.length;i++){
	console.log("we services " + adList[i]);
}


//task 11
var x = [1,2,3];
    var y = [1,2,3];
    var z = y;

		console.log(x == y, x === y,z == y,z == x);



		//task 12

		let bar = 42;
		console.log(typeof bar);
