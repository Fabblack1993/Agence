

let nombre = "Ada Lovelace";
console.log("El nombre es:" + nombre);







document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector(".reservation-form form");
    
    form.addEventListener("submit", function(event) {
      // Prevent form submission
      event.preventDefault();
        
      // Capture and log form field values
      const name = document.getElementById("name").value;  
      const lastname = document.getElementById("lastname").value;  
      const phone = document.getElementById("phone").value;
      const date = document.getElementById("date").value;
      const time = document.getElementById("time").value;        
      const people = document.getElementById("people").value;
      
      crearNuevaReserva(name, lastname, phone, date, time, people);        
    });
});