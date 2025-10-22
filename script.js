
function updateCurrentTime() {
  const timeEl = document.getElementById("user-time");
  if (timeEl) {
    const now = new Date();
    timeEl.textContent = `${Date.now()} ms (${now.toLocaleTimeString()})`;
  }
}
updateCurrentTime();
setInterval(updateCurrentTime, 1000);


document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");
  if (!form) return;

  const nameInput = document.getElementById("contact-name");
  const emailInput = document.getElementById("contact-email");
  const subjectInput = document.getElementById("contact-subject");
  const messageInput = document.getElementById("contact-message");
  const successMsg = document.getElementById("success");

  const errors = {
    name: document.getElementById("error-name"),
    email: document.getElementById("error-email"),
    subject: document.getElementById("error-subject"),
    message: document.getElementById("error-message"),
  };

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let valid = true;

    Object.values(errors).forEach((el) => (el.textContent = ""));

    if (nameInput.value.trim() === "") {
      errors.name.textContent = "Full name is required.";
      valid = false;
    }


    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailInput.value.trim() === "") {
      errors.email.textContent = "Email is required.";
      valid = false;
    } else if (!emailRegex.test(emailInput.value)) {
      errors.email.textContent = "Enter a valid email address.";
      valid = false;
    }

   
    if (subjectInput.value.trim() === "") {
      errors.subject.textContent = "Subject is required.";
      valid = false;
    }

    if (messageInput.value.trim().length < 10) {
      errors.message.textContent = "Message must be at least 10 characters.";
      valid = false;
    }

    // Show success
    if (valid) {
      successMsg.hidden = false;
      form.reset();
      form.querySelector("button").disabled = true;
      setTimeout(() => {
        successMsg.hidden = true;
        form.querySelector("button").disabled = false;
      }, 3000);
    }
  });
});
