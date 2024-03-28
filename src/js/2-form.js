document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector(".feedback-form");
    const savedData = JSON.parse(localStorage.getItem("feedback-form-state"));
    if (savedData) {
      if (savedData.email !== undefined) {
        form.email.value = savedData.email;
      }
      if (savedData.message !== undefined) {
        form.message.value = savedData.message;
      }
    }

    form.addEventListener("input", function(event) {
      const { name, value } = event.target;
      const trimmedValue = value.trim(); 
  
     
      const formData = JSON.stringify({
        ...savedData ?? {},
        [name]: trimmedValue
      });
      localStorage.setItem("feedback-form-state", formData);
    });
  
 
    form.addEventListener("submit", function(event) {
      event.preventDefault();
  
      const email = form.email.value.trim();
      const message = form.message.value.trim();

      if (email && message) {
        console.log({ email, message });
        localStorage.removeItem("feedback-form-state");
        form.reset();
      } else {
        alert("Please fill in both email and message fields.");
      }
    });
  });