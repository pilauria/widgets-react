import { useState, useEffect } from 'react';
import axios from 'axios';
import purify from 'dompurify';

export const Search = () => {
  const [term, setTerm] = useState('programming');
  const [results, setResults] = useState([]);

  // **** NOTE 2
  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
        params: {
          action: 'query',
          list: 'search',
          format: 'json',
          origin: '*',
          srsearch: term,
        },
      });

      setResults(data.query.search);
    };
    // first render of the search (term), no delay
    if (term && !results.length) {
      search();
    } else {
      // initiate a timer of 1 second (wait before making the API request)
      const timeoutId = setTimeout(() => {
        if (term) {
          search();
        }
      }, 1000);

      return () => {
        clearTimeout(timeoutId); // cleanup function
      };
    }
  }, [term, results.length]); // **** NOTE 1

  const renderResults = results.map(result => {
    return (
      <div key={result.pageid} className='item'>
        <div className='right floated content'>
          <a
            href={`https://en.wikipedia.org?curid=${result.pageid}`}
            className='ui button'
          >
            Go
          </a>
        </div>
        <div className='content'>
          <div className='header'>{result.title}</div>
          <div
            dangerouslySetInnerHTML={{
              __html: purify.sanitize(result.snippet),
            }}
          ></div>
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className='ui form'>
        <div className='field'>
          <label htmlFor=''>Enter Search Term</label>
          <input
            value={term}
            onChange={e => setTerm(e.target.value)}
            type='text'
            className='input'
          />
        </div>
      </div>
      <div className='ui celled list'>{renderResults}</div>
    </div>
  );
};

// **** NOTE 1:the second argument controls when useEffect is executed (3 posibilities : empy array, array with items, nothing at all). See diagram in draw.io=> widget app

// **** NOTE 2: 3 ways to call axios from useEffect:
// -1-
// useEffect(() => {
//   const search = async () => {
//     await axios.get('url');
//   };
//     search();
// }, [term]);

// -2-
// useEffect(() => {
//   (async () => {
//     await axios.get('url');
//   })(),
// }, [term]);

// -3-
// useEffect(() => {
//   axios.get('url')
//   .then((response)=>{
//   console.log(response.data)
// });
// }, [term]);
