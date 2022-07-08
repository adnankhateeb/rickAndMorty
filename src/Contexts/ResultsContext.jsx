import { useState } from "react";
import { createContext } from "react";
import { useRef } from "react";
import axios from "axios";

export const ResultsContext = createContext();

export const ResultsContextProvider = ({ children }) => {
   const [results, setResults] = useState([]);
   const timeout = useRef();
   const [page, setPage] = useState(1);
   const [query, setQuery] = useState("rick");
   const [total, setTotal] = useState(0);

   const fetchData = () => {
      setPage(page + 1);
      axios
         .get(
            `https://rickandmortyapi.com/api/character/?name=${query}&page=${page}`
         )
         .then((data) => {
            setResults(results.concat(data.data.results));
         })
   };


   const handleChange = (e) => {
      clearTimeout(timeout.current);
      setQuery(e.target.value);
      setResults([]);

      timeout.current = setTimeout(() => {
         axios
            .get(
               `https://rickandmortyapi.com/api/character/?name=${query}&page=${page}`
            )
            .then((data) => {
               setResults(data.data.results);
               setTotal(data.data.info.count);
            });
      }, 1000);
   };

   return (
      <ResultsContext.Provider value={{ results, handleChange, fetchData, total, setResults, setTotal }}>
         {children}
      </ResultsContext.Provider>
   );
};
