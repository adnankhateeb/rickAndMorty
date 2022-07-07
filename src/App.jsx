import "./App.css";
import BasicUserCard from './Components/BasicUserCard';
import Search from "./Components/Search";


function App() {
   return (
      <div className="wrapper">
         <p style={{fontSize: "3rem", fontWeight: "bolder"}}>Rick and Morty Search</p>
         <div className="innerDiv">
            <Search />
            <BasicUserCard />
         </div>
      </div>
   );
}

export default App;
