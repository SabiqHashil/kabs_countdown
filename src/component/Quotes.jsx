import PropTypes from "prop-types";

function Quotes({ quote, author, quoteFont, authorFont }) {
  return (
    <div className="bg-white text-black p-4 rounded-md shadow-md ">
      <p className={`text-lg font-semibold ${quoteFont}`}>{quote}</p>
      <p className={`text-sm mt-2 ${authorFont}`}>- {author}</p>
    </div>
  );
}

//* props validation
Quotes.propTypes = {
  quote: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  quoteFont: PropTypes.string.isRequired,
  authorFont: PropTypes.string.isRequired,
};

export default Quotes;
