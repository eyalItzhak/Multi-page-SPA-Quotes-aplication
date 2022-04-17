import { Fragment } from "react";
import { useParams, Route, Link ,useRouteMatch } from "react-router-dom";

import HighLightedQuote from "../components/quotes/HighlightedQuote";

import Comments from "../components/comments/Comments";

const DUMMY_QUOTES = [
  {
    id: "q1",
    author: "Winston Churchill",
    text: "Vengeance is the most costly and dissipating of luxuries",
  },
  {
    id: "q2",
    author: "Sun Tzu",
    text: "If you know the enemy and know yourself, you need not fear the result of a hundred battles.",
  },
];

const QuoteDetail = () => {

  const match =useRouteMatch()

  const params = useParams();

  const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);

  if (!quote) {
    return <p>No quote found</p>;
  }

  return (
    <Fragment>
      <HighLightedQuote text={quote.text} author={quote.author} />
      <Route path={match.path} exact>
        <div className="centered">
          <Link className="btn--flat" to={`${match.url}/comments`}>
            load Comments
          </Link>
        </div>
      </Route>

      <Route path={`${match.path}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
};

export default QuoteDetail;
