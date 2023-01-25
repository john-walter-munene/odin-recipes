// the JavaScript file
function alertFunction() {
    alert("YAY! YOU DID IT!");
  }
  
  // METHOD 2
  btn.onclick = alertFunction;
  
  // METHOD 3
  btn.addEventListener('click', alertFunction);

  btn.addEventListener('click', function (e) {
    console.log(e);
  });

  btn.addEventListener('click', function (e) {
    console.log(e.target);
  });