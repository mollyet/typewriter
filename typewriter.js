// further messed with this to be a function that takes in a string, and a delay
//but... need to return and capture the final delay value to start the next function somehow
// regardless, it works! 

const sentence = "hello there from lighthouse labs";

const behold = "behold! the m a g i c of setTimeout!";

const writeThis = function (string, delay) {
for (const char of string){
    setTimeout(() => {
      process.stdout.write(char);
    
    }, delay);
    delay += 50;
  } 

  setTimeout(() => {
    console.log("\n")
  }, delay)
};

writeThis(sentence, 0);
writeThis(behold, 2500)
