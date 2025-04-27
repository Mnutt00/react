import { useEffect, useState, useReducer } from 'react';
import './App.css';
import chef from "./images/chef.jpg";


function Header({name, year}) {
  return (
    <header>
      <h1>{name}'s Kitchen</h1>
      <p>Copyrght {year}</p>
    </header>
  );
}

const items = [
  "Macaroni and Cheese",
  "Salmon and Potataos",
  "Tofu with Vegatables",
  "Minestrone Soup",
];

const dishObjects = items.map((dish, i) => ({
  id: i,
  title: dish
}));

function Main({dishes, openStatus, onStatus }) {
  return (
    <>
    <div>
      <button onClick={() => onStatus("true")}>I want to be open</button>
      <h2>Welcome to this beautiful resteraunt! 
        {openStatus ? "Open" : "Closed"}
      </h2>
    </div>
  <main>
    <img 
      src="{chef}" 
      height={200} 
      alt="A photo of a smiling chef owner"
    />
  <ul>
    {dishes.map((dish) => (
      <li 
      key={dish.id} 
      style={{ listStyleType: "none" }}>
        {dish.title}
      </li>
    ))}
  </ul>
  </main>
  </>
)}

function App() {
  //const [status, setStatus] = useState(true);
  const [status, toggle] = useReducer(
    (status) => !status,
  );

  useEffect(() => {
    console.log(`The restaurant is ${status ? "open" : "closed"}.`
    );
  }, [status]);

  return (
      <div>
        <h1>The restauraunt is currently {" "} 
          {status ? "open" : "closed"}.
        </h1>
        <button onClick={toggle}>
          {status ? "Close" : "Open"} Restaurant
        </button>
        <Header name="Alex" year={new Date().getFullYear()}/>
        <Main 
        dishes={dishObjects} 
        openStatus={status} 
        onStatus={toggle}/>
      </div>
      );
    }
    export default App
