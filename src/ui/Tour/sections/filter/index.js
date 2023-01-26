import { useEffect, useState } from 'react'
import { WithContext as ReactTags } from "react-tag-input";
import "./index.css";


function Filter() {
  const [tags, setTags] = useState([
    { id: "Thailand", text: "Thailand" },
    { id: "India", text: "India" },
    { id: "Vietnam", text: "Vietnam" },
    { id: "Turkey", text: "Turkey" }
  ]);

  function handleDelete(i) {
    setTags(tags.filter((tag, index) => index !== i));
  }

  function handleAddition(tag) {
    setTags([...tags, tag]);
  }

  function onChangeOption(e) {
    setTags([...tags, {id: e.target.value, text: e.target.value}]);
  }

  useEffect(() => {
  }, []);

  return (
    <div className="App">
      <h2>Start editing to see some magic happen!</h2>
      <div className="form-group">
        <select value="select" onChange={onChangeOption}  className="form-control">
          <option value="select">Select an Option</option>
          <option value="First">First</option>
          <option value="Second">Second</option>
          <option value="Third">Third</option>
        </select>
      </div>
      <div className="ReactTags Test">
      <ReactTags
        handleDelete={handleDelete}
        handleAddition={handleAddition}
        minQueryLength={20}
        // maxLength={5}
        readOnly={false}
        allowDragDrop={false}
        tags={tags}
      />
    </div>
    </div>
  );
}

export default Filter;
