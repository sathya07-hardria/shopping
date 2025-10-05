// ===== Chatbot Logic =====
const botResponses = {
  "hello": "Welcome to Buddy Mall! 💙",
  "view offers": "Today's offers: 20% off on electronics, 10% off on groceries.",
  "mall timings": "We are open 10 AM to 10 PM every day.",
  "food section": "Food court is on the 2nd floor. Enjoy your meal!",
  "home appliances": "Check out our latest home appliances on the 3rd floor.",
  "kids section": "Kids section is on the 1st floor with toys and games!"
};

// Chatbot elements
const chatMessages = document.getElementById("chat-messages");
const userInput = document.getElementById("user-input");
const sendBtn = document.getElementById("send-btn");

// Send button event
sendBtn.addEventListener("click", () => {
  const userText = userInput.value.toLowerCase().trim();
  if(userText === "") return;

  appendMessage("You: " + userInput.value);

  if(botResponses[userText]) {
    appendMessage("Buddy: " + botResponses[userText]);
  } else {
    appendMessage("Buddy: Sorry, I didn't understand that. Try options like 'view offers' or 'mall timings'.");
  }

  userInput.value = "";
});

// Function to append messages
function appendMessage(message) {
  const msg = document.createElement("p");
  msg.textContent = message;
  chatMessages.appendChild(msg);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

// ===== Text-to-Speech Logic =====
const ttsBtn = document.getElementById("tts-btn");
const ttsInput = document.getElementById("tts-input");

if(ttsBtn) { // Check if TTS exists on this page
  ttsBtn.addEventListener("click", () => {
    const text = ttsInput.value.trim();
    if(text === "") return;

    const speech = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(speech);
  });
}
