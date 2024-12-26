import axios from 'axios';

export const fetchRandomQuote = async () => {
  try {
    const response = await axios.get('https://dummyjson.com/quotes');
    const randomIndex = Math.floor(Math.random() * response.data.quotes.length);
    return {
      content: response.data.quotes[randomIndex].quote,
      author: response.data.quotes[randomIndex].author || 'Unknown',
    };
    
  } catch (error) {
    console.error('Error fetching quote:', error);
    return {
      content: 'Failed to fetch quote. Please try again later.',
      author: 'Unknown',
    };
  }
};
