import { useEffect } from "react";

import QuoteList from "../components/quotes/QuoteList";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import NoQuotedFound from "../components/quotes/NoQuotesFound";
import useHttp from "../hooks/use-http";
import { getAllQuotes } from "../lib/api";

// const DUMMY_QUOTES = [
//   {
//     id: "q1",
//     author: "Winston Churchill",
//     text: "Vengeance is the most costly and dissipating of luxuries",
//   },
//   {
//     id: "q2",
//     author: "Sun Tzu",
//     text: "If you know the enemy and know yourself, you need not fear the result of a hundred battles.",
//   },
// ];

const AllQuotes = () => {
  const {
    sendRequest,
    status,
    data: loadedQuote,
    error,
  } = useHttp(getAllQuotes, true);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  if (status === 'pending') {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <p className="centered">{error}</p>;
  }

  if (status === "completed" && (!loadedQuote || loadedQuote.length === 0)) {
    return <NoQuotedFound />;
  }
  return <QuoteList quotes={loadedQuote} />;
};
export default AllQuotes;
