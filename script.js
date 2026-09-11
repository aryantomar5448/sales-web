const form = document.querySelector("#sales-agent-form");
const input = document.querySelector("#sales-question");
const reply = document.querySelector("#agent-response");

// Replace this function with your AI integration later.
function getReply(message) {
  return message;
}

// Handles both the submit button and the Enter key.
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const message = input.value;

  if (!message.trim()) {
    input.setCustomValidity("Please enter a message.");
    input.reportValidity();
    return;
  }

  // Safely display the message as plain text.
  reply.textContent = getReply(message);
});

input.addEventListener("input", () => {
  input.setCustomValidity("");
});