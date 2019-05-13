let assert = {
  isEqual: function(functionToTest){
    let counter = 0;
    if(!functionToTest){
      counter++
      throw new Error(`${counter} Assertion failed ${functionToTest } is not truthy 😒`);
    }else{
      counter++
      console.log(`${counter} test passed 🥑`)
    }
  }
}