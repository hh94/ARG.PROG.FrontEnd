    //----------modal funcion--------------------------------------------------------------------------------->

    // Get the modal ingresar
    var modal = document.getElementById('id01');
    // Get the modal registrar
    var modal2 = document.getElementById('id02');
    
    
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}