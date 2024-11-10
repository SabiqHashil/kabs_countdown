import { useState } from "react";
import Quotes from "./Quotes";

const quotesData = [
    { quote: "Innovation is the heartbeat of every startup...", author: "Unknown" },
    { quote: "The best way to predict the future is to create it...", author: "Unknown" },
    { quote: "The best way to get started is to quit talking and begin doing...", author: "Walt Disney" },
    { quote: "The future belongs to those who believe in the beauty of their dreams...", author: "Eleanor Roosevelt" },
    { quote: "The secret of getting ahead is getting started...", author: "Mark Twain" },
    { quote: "The best preparation for tomorrow is doing your best today...", author: "H. Jackson Brown, Jr." },
    { quote: "The future depends on what you do today...", author: "Mahatma Gandhi" },
    { quote: "The future belongs to those who prepare for it today...", author: "Malcolm X" },
    { quote: "The future starts today, not tomorrow...", author: "Pope John Paul II" },
    { quote: "The future is not something we enter. The future is something we create...", author: "Leonard I. Sweet" },
    { quote: "The future is not in the hands of fate but in ours...", author: "Jules Jusserand" },
    { quote: "The future is purchased by the present...", author: "Samuel Johnson" },
    { quote: "The future is not some place we are going to, but one we are creating...", author: "John Schaar" },
    { quote: "The future is a convenient place for dreams...", author: "Anatole France" },
    { quote: "The future is a world that must be won, not inherited...", author: "Lester B. Pearson" },
    { quote: "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.", author: "Albert Schweitzer" },
    { quote: "Your time is limited, don't waste it living someone else's life.", author: "Steve Jobs" },
    { quote: "Don't be afraid to give up the good to go for the great.", author: "John D. Rockefeller" },
    { quote: "If you are not embarrassed by the first version of your product, you've launched too late.", author: "Reid Hoffman" },
    { quote: "The way to get started is to quit talking and begin doing.", author: "Walt Disney" },
    { quote: "The only limit to our realization of tomorrow is our doubts of today.", author: "Franklin D. Roosevelt" },
    { quote: "What we achieve inwardly will change outer reality.", author: "Plutarch" },
    { quote: "Great things in business are never done by one person. They're done by a team of people.", author: "Steve Jobs" },
    { quote: "Don't worry about failure; you only have to be right once.", author: "Drew Houston" },
];


const frontData = ["fone", "ftwo", "fthree", "ffour", "ffive", "fsix","Orbitron"];

function RandomQutoes() {

    const [randomQuote, setRandomQuote] = useState(
        quotesData[Math.floor(Math.random() * quotesData.length)]
    );

    const [quoteRandomFont, setQuoteRandomFont] = useState(
        frontData[Math.floor(Math.random() * frontData.length)]
    )

    const [authorRandomFont, setAuthorRandomFont] = useState(
        frontData[Math.floor(Math.random() * frontData.length)]
    )

    return (
        <Quotes
            quote={randomQuote.quote}
            author={randomQuote.author}
            quoteFont={quoteRandomFont}
            authorFont={authorRandomFont}
        />
    )
}

export default RandomQutoes