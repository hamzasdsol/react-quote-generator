import React from 'react';
import copyIcon from '../assets/icons/copy-icon.svg';
const QuoteCard = ({ quote, author, onGenerateNewQuote, onCopyQuote }) => {
  return (
    <div className="max-w-md mx-auto bg-white/10 backdrop-blur-lg  backdrop-brightness-110 border border-white/20 rounded-xl shadow-lg p-8 text-center relative">
     <div className='text-2xl text-white font-bold mb-4'><h1>Quote of the Day</h1>
     </div>
      <div
        onClick={onCopyQuote}
        className="absolute top-1 right-1 cursor-pointer p-2 hover:scale-110 transform transition-all text-white"
      >
        <img 
          src={copyIcon}
          alt="Copy Icon"
          className="w-6 h-6 text-white"
        />
      </div>

      <p className="text-xl text-white  mb-8 mt-8">
          <span className="font-bold text-2xl">"</span> {quote} <span className="font-bold text-2xl">"</span>
      </p>
      <p className="text-lg text-white font-bold mb-6">—————{author} —————</p>

      <div className="flex justify-center gap-4">
        <button
          onClick={onGenerateNewQuote}
          className="px-8 py-2 bg-gradient-to-r from-purple-500 to-indigo-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all"
        >
          New Quote
        </button>
      </div>
    </div>
  );
};

export default QuoteCard;
