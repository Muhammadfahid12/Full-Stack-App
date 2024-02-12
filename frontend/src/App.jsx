import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useEffect } from "react";
import axios from "axios"

function App() {
  const [quotes, setQuotes] = useState([]);


  useEffect(()=>{
    axios.get("/api/quote")
    .then((response)=> {
      setQuotes(response.data);
      console.log(response.data)
    })
    .catch((error)=>{
      console.log(error);
    })
  },[])

  return (
    <>
    <h1>Full-Stack Application</h1>
      <p>quotes:{quotes.length}</p>

      {
        quotes.map((quote)=>(
          <div key={quote.id}>
            <h2>{quote.quote}</h2>
            <h4>By:{quote.name}</h4>
          </div>
        ))
      }
    </>
  );
    }
export default App;
