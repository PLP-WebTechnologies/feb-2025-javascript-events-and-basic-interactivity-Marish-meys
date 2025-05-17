// Event Handling 🎈
document.getElementById("clickBtn").addEventListener("click", () => {
  alert("Button clicked!");
});

document.getElementById("hoverBox").addEventListener("mouseover", () => {
  document.getElementById("hoverBox").style.backgroundColor = "coral";
});

document.getElementById("keyInput").addEventListener("keydown", (e) => {
  console.log(`Key pressed: ${e.key}`);
});

// Bonus: Secret double-click
document.getElementById("hoverBox").addEventListener("dblclick", () => {
  alert("Secret double-click revealed! 🎉");
});

// Interactive Elements 🎮
document.getElementById("colorToggle").addEventListener("click", () => {
  document.body.classList.toggle("fun-mode");
});

// Tab switching
const tabs = document.querySelectorAll(".tab");
tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".tab-content").forEach(tc => tc.classList.remove("active"));
    document.getElementById(`tab-${tab.dataset.tab}`).classList.add("active");
  });
});

// Form Validation 📋✅
const form = document.getElementById("signupForm");
const feedback = document.getElementById("feedback");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (!email.includes("@")) {
    feedback.textContent = "Invalid email address!";
    return;
  }

  if (password.length < 8) {
    feedback.textContent = "Password must be at least 8 characters!";
    return;
  }

  feedback.textContent = "Form submitted successfully!";
  feedback.style.color = "green";
});

// Bonus: Real-time feedback
document.getElementById("password").addEventListener("input", (e) => {
  feedback.textContent = e.target.value.length < 8 ? "Weak password" : "Strong password";
  feedback.style.color = e.target.value.length < 8 ? "red" : "green";
});
