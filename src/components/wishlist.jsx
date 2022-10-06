import { useState } from "react";

const WishList = () => {
  const [text, setText] = useState("");
  const [list, setList] = useState([]);

  const handleTextChange = (e) => {
    console.log(e.target.value);
    setText(e.target.value);
  };

  const addToList = () => {
    let copy = list;
    copy.push(text);
    setList(copy);
    setText("");
    console.log(list);
  };
  return (
    <div>
      <h4>My Wish List</h4>
      <div>
        <input type="text" onChange={handleTextChange} value={text}/>
        <button onClick={addToList}>Add</button>
      </div>
      <ul>
        {list.map((t) => (
          <li>{t}</li>
        ))}
      </ul>
    </div>
  );
};

export default WishList;
