var form = document.querySelector('.needs-validation');
var bestDay = document.querySelector("bestDay");

form.addEventListener("submit", function(event) {
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    form.classList.add("was-validated");

})
/*   maybe work on for checkboxes
if ((input[bestDay]:checked).length = 0) {
  alert("Please choose at least one day for contact");
}
*/