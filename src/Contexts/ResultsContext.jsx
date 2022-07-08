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
            console.log(results.length)
            console.log(total);
         })
   };


   const handleChange = (e) => {
      setQuery(e.target.value);
      clearTimeout(timeout.current);
      setResults([]);
      console.log(query)

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
