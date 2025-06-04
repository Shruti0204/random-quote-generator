const quotes = [
     { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
        { text: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
        { text: "Success is not final, failure is not fatal.", author: "Winston Churchill" },
        { text: "Be yourself; everyone else is already taken.", author: "Oscar Wilde" },
        { text: "Simplicity is the ultimate sophistication.", author: "Leonardo da Vinci" },
        { text: "In the middle of difficulty lies opportunity.", author: "Albert Einstein" },
        { text: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius" },
        { text: "Happiness is not something ready made. It comes from your own actions.", author: "Dalai Lama" },
        { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
        { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" }
    ];

    function generateQuote() {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      const quoteObj = quotes[randomIndex];
      document.getElementById("quote").textContent = `"${quoteObj.text}"`;
      document.getElementById("author").textContent = `— ${quoteObj.author}`;
    }
