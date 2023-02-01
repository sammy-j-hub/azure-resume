// write a function
// describe fucntion
//invoke it

document.addEventListener('DOMContentLoaded', function () {
  //we're adding this so that this triggers a function once a movement is detected
  var localStorage = window.localStorage; //declaring the localStorage to save browser feature even after the window is closed - safer option than cookies as those can get deleted
  var n = localStorage.getItem('on_load_counter'); //created variable names n which retrieves the value of an item from localStorage -> on_load_counter is an event handler, which is used for tracking how many times a page has been loaded.

  if (n === null) {
    //if n is not stored with a value,set it to 0 and start incrementing
    n = 0;
  }
  n++; //should increment this)

  localStorage.setItem('on_load_counter', n); //setting value of on_load_counter to n
  document.getElementById('counter').innerHTML = n; //This code is setting the innerHTML of the element with the id "counter" to the value of the variable n.
});
