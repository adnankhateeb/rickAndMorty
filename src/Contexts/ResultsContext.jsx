import { useState } from "react";
import { createContext } from "react";
import { useRef } from "react";
import axios from "axios";

export const ResultsContext = createContext();

export const ResultsContextProvider = ({ children }) => {
   const [results, setResults] = useState([]);
   const timeout = useRef();

   const handleChange = (e) => {
      clearTimeout(timeout.current);

      timeout.current = setTimeout(() => {
         axios
            .get(
               `https://rickandmortyapi.com/api/character/?name=${e.target.value}&page=1`
            )
            .then((data) => setResults(data.data.results)).then(console.log(results));
      }, 1000);
   };

   return (
      <ResultsContext.Provider value={{ results, handleChange }}>
         {children}
      </ResultsContext.Provider>
   );
};
