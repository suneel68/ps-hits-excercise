import React, { useContext, useEffect, useState } from "react";
import Card from "./Card";

const API_ENDPOINT = "https://hn.algolia.com/api/v1/search?query=react";

const Hits = () => {
  const [page, setPage] = useState(0);
  const [noPages, setNoPages] = useState(0);
  const [hits, setHits] = useState([]);

  useEffect(() => {
    fetch(`${API_ENDPOINT}&page=${page}`)
      .then((resp) => {
        return resp.json();
      })
      .then(({ hits, nbPages }) => {
        setHits(hits);
        setNoPages(nbPages);
      });
  }, [page]);

  const onPageChange = (event) => {
    const page = event.target.value;
    if (page > noPages) {
      alert("No more pages to load");
    } else {
      setPage(page);
    }
  };

  return (
    <>
      {hits.map((hit) => (
        <Card key={hit.title} title={hit.title} auther={hit.author} />
      ))}
      Go to page: <input type="number" value={page} onChange={onPageChange} />
    </>
  );
};

export default Hits;
