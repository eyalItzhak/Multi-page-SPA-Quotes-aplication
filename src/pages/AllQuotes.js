import QuoteList from "../components/quotes/QuoteList";

const DUMMY_QUOTES = [
  {id : 'q1',author :'Winston Churchill',text:'Vengeance is the most costly and dissipating of luxuries'},
  {id : 'q2',author :'Sun Tzu',text:'If you know the enemy and know yourself, you need not fear the result of a hundred battles.'},

]

const AllQuotes = () => {
  return <QuoteList quotes={DUMMY_QUOTES}/>
};

export default AllQuotes;