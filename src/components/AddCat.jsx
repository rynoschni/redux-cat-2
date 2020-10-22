import React, { useState } from "react";
import { connect } from "react-redux";
import { addCat } from "../redux/actions";

const AddCat = ({ addCat }) => {
  const [catName, setCatName] = useState("");
  const [activity, setActivity] = useState("");

  const _handleChangeName = (name) => {
    setCatName(name);
  };

  const _handleChangeActivity = (e) => {
    setActivity(e.target.value);
  };

  const _handleSubmit = (e) => {
    e.preventDefault();
    addCat({ name: catName, activity });
    setCatName("");
    setActivity("");
  };

  return (
    <form onSubmit={(e) => _handleSubmit(e)}>
      <input
        type="text"
        name="catName"
        placeholder="Cat's Name"
        onChange={(e) => _handleChangeName(e.target.value)}
        value={catName}
      />
      is
      <select
        name="activity"
        value={activity}
        onChange={(e) => _handleChangeActivity(e)}
      >
        <option defaultValue>Choose an Activity</option>
        <option value="eating">Eating</option>
        <option value="napping">Napping</option>
        <option value="playing">Playing</option>
      </select>
      <button type="submit">Submit</button>
    </form>
  );
};

export default connect(null, { addCat })(AddCat);