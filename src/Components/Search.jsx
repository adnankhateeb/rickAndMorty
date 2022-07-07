import React from "react";
import "./styles/search.css";
import { BsSearch } from "react-icons/bs";
import { ResultsContext  } from '../Contexts/ResultsContext';
import { useContext } from 'react';


const Search = () => {
   const {handleChange} = useContext(ResultsContext);
   
   return (
      <div className="searchDiv">
         <BsSearch style={{ opacity: "40%" }} />
         <input
            placeholder="Search for a contact"
            className="searchInput"
            onChange={handleChange}
         ></input>
      </div>
   );
};

export default Search;
