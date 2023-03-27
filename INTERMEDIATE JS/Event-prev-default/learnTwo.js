const myTextbox = document.getElementById("my-textbox");
myTextbox.addEventListener("keypress", checkName, false);

function checkName(evt) {
    const charCode = evt.charCode;
    if (charCode !== 0) {
      if (charCode < 97 || charCode > 122) {
        evt.preventDefault();
        displayWarning(
          "Please use lowercase letters only.\n" + `charCode: ${charCode}\n`
        );
      }
    }
  }

  let warningTimeout;
const warningBox = document.createElement("div");
warningBox.className = "warning";

function displayWarning(msg) {
  warningBox.innerHTML = msg;

  if (document.body.contains(warningBox)) {
    clearTimeout(warningTimeout);
  } else {
    // insert warningBox after myTextbox
    myTextbox.parentNode.insertBefore(warningBox, myTextbox.nextSibling);
  }

  warningTimeout = setTimeout(() => {
    warningBox.parentNode.removeChild(warningBox);
    warningTimeout = -1;
  }, 2000);
}
