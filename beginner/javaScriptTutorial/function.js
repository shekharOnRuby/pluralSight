let getDieRoll = function(){
	console.log("-------")
	console.log("Rolling a Die")
	console.log("-------")
	return Math.ceil(6*Math.random())
}



let firstDie = getDieRoll() 
let secondDie = getDieRoll()
let sum = firstDie + secondDie

console.log(firstDie)
console.log(secondDie)
console.log(sum)
