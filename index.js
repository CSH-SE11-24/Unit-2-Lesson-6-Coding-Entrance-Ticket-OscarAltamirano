// In this entrance ticket, you will be building a "guess the number" game. 
// Create a new variable and put a number from 1-100 in
let number = 20

// Prompt the user to guess the number
let guess = prompt("Guess")

// Cast the user input to a number
console.log(guess)


// Create a new variable called attempts and set it to 0
let attempts = 0 

// Create a while loop that runs while the user guess is not equal to your number
while(guess !== number){
 let guess = prompt("Guess the number again") 
console.log(guess)
  attempts = attempts + 1
  if(guess > number){
    console.log("Too high")
  }else if(guess < number){
    console.log("Too low")
    }else if (guess === number){
      console.log("You got it")
}else{
    console.log("It took", attempts, "attempts")
     }
} 
  
// In the while loop, prompt the user to guess the number again (remember to cast)


// In the while loop, increase the attempts by 1


// In the while loop, write an if statement that does the following
// If the user guess is higher, say "Too high!"
// If the user guess is lower, say "Too low!"
// If the user guess is right, say "You got it!"




// After the while loop, print "It took (attempts) attempts" 

