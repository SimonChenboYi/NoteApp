var counter = 0;
let assert = {
  isTrue: function(functionToTest){
    if(!functionToTest){
      counter++
      throw new Error(`${counter} Assertion failed ${functionToTest } is not truthy 😒`);
    }else{
      counter++
      console.log(`${counter} test passed 🥑`)
    }
  },
  isArrayEqual: function(array1,array2){
    if (array1.length === array2.length && array1.every(function(value, index) { return value === array2[index]}))
    {counter++
      console.log(`${counter} test passed 🥑`)} else {
        counter++
        throw new Error(`${counter} Assertion failed, the values in the two arraies are not same 😒`);
      }
  }
}