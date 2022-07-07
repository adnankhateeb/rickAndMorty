import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { MdCircle } from "react-icons/md";
import { ResultsContext } from "../Contexts/ResultsContext";
import "./styles/basicUserCards.css";
import DetailsUserCard from "./DetailsUserCard";

const BasicUserCard = () => {
   const { results } = useContext(ResultsContext);
   const [showModal, setShowModal] = useState(false);
   const [selectedCard, setSelectedCard] = useState({});

   const runFunctions = (e) => {
      setSelectedCard(e);
      handleOpen();
   };

   const handleClose = () => {
      setShowModal(false);
   };
   const handleOpen = () => {
      setShowModal(true);
   };

   const checkColor = (status) => {
      if (status === "Alive") {
         return "green";
      }
      if (status === "Dead") {
         return "red";
      }
      return "gray";
   };
   return (
      <>
         {showModal ? (
            <DetailsUserCard
               show={showModal}
               handleClose={handleClose}
               card={selectedCard}
               checkColor={checkColor}
            />
         ) : null}
         <div className="basicUserCard">
            {results.map((e) => (
               <div
                  className="individualCard"
                  key={e.id}
                  onClick={() => runFunctions(e)}
               >
                  <div className="left">
                     <img src={e.image} alt="char" />
                     <p>{e.name}</p>
                  </div>
                  <div className="right">
                     <MdCircle
                        style={{ color: checkColor(e.status), fontSize: "8px" }}
                     />
                     <span style={{ marginLeft: "3%", marginRight: "1%" }}>
                        {e.status.charAt(0).toUpperCase() + e.status.slice(1)}
                     </span>{" "}
                     - <span style={{ marginLeft: "1%" }}>{e.species}</span>
                  </div>
               </div>
            ))}
         </div>
      </>
   );
};

export default BasicUserCard;
