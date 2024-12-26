import React, { useState, useEffect } from 'react';
import QuoteCard from './components/QuotesCard';
import { fetchRandomQuote } from './utils/fetchQuotes';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  const generateNewQuote = async () => {
    const { content, author } = await fetchRandomQuote();
    setQuote(content);
    setAuthor(author);
  };

  const copyQuoteToClipboard = () => {
    navigator.clipboard.writeText(quote)
      .then(() => {
        toast.success('Quote copied to clipboard!'); 
      })
      .catch((error) => {
        toast.error('Failed to copy quote!');
      });
  };

  useEffect(() => {
    generateNewQuote();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-quote-bg bg-cover bg-center">
      <QuoteCard 
        quote={quote} 
        author={author} 
        onGenerateNewQuote={generateNewQuote} 
        onCopyQuote={copyQuoteToClipboard} 
      />
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />
    </div>
  );
};

export default App;
