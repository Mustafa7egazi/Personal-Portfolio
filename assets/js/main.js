AOS.init();

AOS.init({
  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: "ease", // default easing for AOS animations
  once: true, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
});

const toggleBtn = document.getElementById("themeToggle");
const body = document.body;
const nav = document.querySelector("nav");
const icon = toggleBtn.querySelector("i");
const label = toggleBtn.querySelector("span");

function updateButton() {
  if (body.classList.contains("light-mode")) {
    icon.className = "bi bi-moon-stars-fill";
    label.textContent = "Dark Mode";
  } else {
    icon.className = "bi bi-brightness-high-fill";
    label.textContent = "Light Mode";
  }
}

// load initial state
if (localStorage.getItem("theme") === "light") {
  body.classList.add("light-mode");
}
updateButton();

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("light-mode");
  nav.classList.toggle("navbar-dark");
  localStorage.setItem(
    "theme",
    body.classList.contains("light-mode") ? "light" : "dark"
  );
  updateButton();
});

document.getElementById("contact-form").onsubmit = function (event) {
  event.preventDefault(); // Prevent the default form submission behavior
  let params;
  params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value,
  };

  console.log("params", params);

  emailjs.send("service_x20dc4p", "template_yr0qfk5", params).then(
    function (response) {
      alert("Message sent successfully!");
      console.log("SUCCESS!", response.status, response.text);
      // Reset the form fields after successful submission
      document.getElementById("contact-form").reset();
    },
    function (error) {
      alert("Error sending email! try again later.");
      console.log("FAILED...", error);
    }
  );
};
