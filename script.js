const quotes = [
  "The only way to do great work is to love what you do. - Steve Jobs",
  "Success is not final, failure is not fatal. - Winston Churchill", 
  "Believe you can and you're halfway there. - Theodore Roosevelt",
  "Your time is limited, don't waste it. - Steve Jobs",
  "The future belongs to those who believe in their dreams. - Eleanor Roosevelt"
];

function newQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  document.getElementById('quote').innerText = quotes[randomIndex];
}

function copyQuote() {
  const quoteText = document.getElementById('quote').innerText;
  navigator.clipboard.writeText(quoteText);
  alert('Quote copied!');
}
