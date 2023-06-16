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
    let newList = [...list, "Mumbai"];

    //internal Dom operation
    setList(newList);
  };
  return (
    <>
      {/* event building*/}
      <input type="button" value="Add Item" onClick={addItem}/>

      {/**list */}
      {list.map((item) => (
        <h1>Hello {item}</h1>
      ))}
    </>
  );
}

export default App;
