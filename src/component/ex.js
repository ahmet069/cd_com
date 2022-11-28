import React from "react";
  import "./styles.css";

    export default function App() {

      function MouseOver(event) {
        event.target.style.background = 'red';
      }
      function MouseOut(event){
        event.target.style.background="";
      }
      return (
        <div className="App">
          <button onMouseOver={MouseOver} onMouseOut={MouseOut}>Hover over me!</button>
        </div>
      );
    }