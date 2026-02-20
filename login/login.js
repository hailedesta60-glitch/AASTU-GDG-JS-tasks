document.getElementById("login-form").addEventListener("submit", function(e) {
  e.preventDefault();
 const username =document.getElementById("username").value.trim();
 const password = document.getElementById("password").value.trim();
 const message = document.getElementById("message");
  if (username === "" || password === "") {
    message.textContent = "Please enter both username and password.";
    message.style.color = "red";
  } else if (username === "admin" && password === "1234") {
    message.textContent = "Login successful!";
    message.style.color = "green";
  } else {
    message.textContent = "Invalid username or password.";
    message.style.color = "red";
  }

});