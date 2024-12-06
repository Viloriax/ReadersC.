// loader
setTimeout(function() {
  const loader = document.querySelector(".loader");
  const content = document.querySelector(".content");
  
  loader.style.display = "none";
  content.style.display = "block";
  
  // AOS
  AOS.init();
}, 6500);

// topnav
const menu = document.querySelector("#menu");
const topnav = document.querySelector("#topnav");
const links = document.querySelectorAll(".navlink");

menu.addEventListener("click", () => {
  topnav.classList.toggle("active");
  
  // if
  if (topnav.classList.contains("active")) {
    menu.className = "fa-solid fa-xmark";
  } else {
    menu.className = "fa-solid fa-bars";
  }
});

links.forEach(link => {
  link.addEventListener("click", () => {
    topnav.classList.remove("active");
    
    // if
    if (topnav.classList.contains("active")) {
      menu.className = "fa-solid fa-xmark";
    } else {
      menu.className = "fa-solid fa-bars";
    }
  });
});

// navbar scroll
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  
  // if
  if (window.scrollY > 100) {
    navbar.style.backgroundColor = "#E90074";
  } else {
    navbar.style.backgroundColor = "";
  }
});

// button to top
window.addEventListener("scroll", () => {
  const button = document.querySelector("#top");
  
  // if
  if (window.scrollY > 100) {
    button.style.display = "block";
  } else {
    button.style.display = "none";
  }
});

function topToButton() {
  window.scroll({
    top: 0,
    behavior: "smooth"
  });
}

// form validation
function submit() {
  const name = document.querySelector("#name").value;
  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;
  
  // if
  if (name === "" || email === "" || password === "") {
    Swal.fire({
      title: "Error",
      text: "Please fill out this field before submitting",
      icon: "error",
      confirmButtonText: "OK!",
      confirmButtonColor: "red"
    });
  } else if (!email.includes("@")) {
    Swal.fire({
      title: "Error",
      text: "Invalid email, It must contain '@'!",
      icon: "error",
      confirmButtonText: "OK!",
      confirmButtonColor: "red"
    });
  } else if (password.length < 12) {
    Swal.fire({
      title: "Error",
      text: "Password at least 12 characters!",
      icon: "error",
      confirmButtonText: "OK!",
      confirmButtonColor: "red"
    });
  } else {
    Swal.fire({
      title: "Success",
      text: "Form submitted succsessfully!",
      icon: "success",
      confirmButtonText: "OK!",
      confirmButtonColor: "green"
    });
    
    // clear input fields
    document.querySelector("#name").value = "";
    document.querySelector("#email").value = "";
    document.querySelector("#password").value = "";
    document.querySelector("#message").value = "";
  }
}