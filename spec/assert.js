var counter = 0;
let assert = {
  isEqual: function(functionToTest){
    if(!functionToTest){
      counter++
      throw new Error(`${counter} Assertion failed ${functionToTest } is not truthy 😒`);
    }else{
      counter++
      console.log(`${counter} test passed 🥑`)
    }
  },
}