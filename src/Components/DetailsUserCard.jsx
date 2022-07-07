import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import { MdCircle } from "react-icons/md";

const DetailsUserCard = ({ handleClose, show, card, checkColor }) => {
   return (
      <Modal
         show={show}
         aria-labelledby="contained-modal-title-vcenter"
         centered
         onHide={handleClose}
         dialogClassName="modal-height"
      >
         <Modal.Header closeButton></Modal.Header>
         <Modal.Body>
            {/* upper part */}
            <div style={{ display: "flex" }}>
               <div
                  style={{
                     display: "flex",
                     padding: "2%",
                     textAlign: "center",
                     justifyContent: "space-around",
                  }}
                  className="left"
               >
                  <img
                     src={card.image}
                     alt="char"
                     style={{
                        borderRadius: "50%",
                        height: "80%",
                        width: "80%",
                     }}
                  />
               </div>
               <div
                  className="right"
                  style={{ display: "flex", flexDirection: "column", paddingTop: "12%" }}
               >
                  <h4>{card.name}</h4>
                  <div style={{ display: "flex", alignItems: "center" }}>
                     <MdCircle
                        style={{
                           color: checkColor(card.status),
                           fontSize: "12px",
                        }}
                     />
                     <span style={{ marginLeft: "3%", marginRight: "1%" }}>
                        {card.status.charAt(0).toUpperCase() +
                           card.status.slice(1)}
                     </span>{" "}
                     - <span style={{ marginLeft: "1%" }}>{card.species}</span>
                  </div>
               </div>
            </div>
            <hr />

            {/* lower part */}
            <div
               style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  width: "80%",
                  margin: "auto",
                  gap: "1rem",
               }}
            >
               <div>
                  <div className="title">Gender</div>
                  <div>{card.gender}</div>
               </div>
               <div>
                  <div className="title">Location</div>
                  <div>{card.location.name}</div>
               </div>
               <div>
                  <div className="title">Species</div>
                  <div>{card.species}</div>
               </div>
               <div>
                  <div className="title">Origin</div>
                  <div>{card.origin.name}</div>
               </div>
            </div>
         </Modal.Body>
      </Modal>
   );
};

export default DetailsUserCard;
