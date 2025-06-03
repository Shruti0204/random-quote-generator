const quotes = [
      { text: "The best way to predict the future is to create it.", author: "Peter Drucker" },
      { text: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
      { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
      { text: "Your time is limited, so don't waste it living someone else's life.", author: "Steve Jobs" },
      { text: "You miss 100% of the shots you don't take.", author: "Wayne Gretzky" }
    ];

    function generateQuote() {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      const quoteObj = quotes[randomIndex];
      document.getElementById("quote").textContent = `"${quoteObj.text}"`;
      document.getElementById("author").textContent = `— ${quoteObj.author}`;
    }