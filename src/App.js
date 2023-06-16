import "./App.css";
import { useState } from "react";

function App() {
  return (
    <>
      <h1>Stateful List</h1>
      <ListDemo />
    </>
  );
}
function ListDemo() {
  //stateful variable
  let [list, setList] = useState([]);

  //Member function
  let addItem = () => {
    let inputRef = document.querySelector("#id1");
    let inputValue = inputRef.value;


    let newList = [...list, inputValue];

    //internal Dom operation
    setList(newList);
  };
  return (
    <>
      {/* event building*/}
      <input type="text" name="input" id="id1" placeholder="Enter..."/>
      <input type="button" value="Add Item" onClick={addItem}/>

      {/**list */}
      {list.map((item) => (
        <h1>Hello {item}</h1>
      ))}
    </>
  );
}

export default App;
