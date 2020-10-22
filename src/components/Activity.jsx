import React, { useState } from "react";
import { connect } from "react-redux";
import { setName, setActivity, addCat } from "../redux/actions";

const Activity = ({ name, activity, eat, play, nap, setName }) => {
  const [newName, setNewName] = useState("");

  const _handleChange = (name) => {
    setNewName(name);
  };
  const _handleClick = () => {
    setName(newName);
  };

  return (
    <>
      <h1>What is the cat doing now???</h1>
      <p>
        {name} is {activity}.
      </p>
      <form>
        <label>
          Cat's Name
          <input
            type="text"
            onChange={(e) => _handleChange(e.target.value)}
            value={newName}
          />
        </label>
        <button type="button" onClick={() => _handleClick()}>
          Submit
        </button>
      </form>
      <br />
      <button type="button" onClick={() => setActivity("eating")}>
        Eating
      </button>
      <button type="button" onClick={() => setActivity("playing")}>
        Playing
      </button>
      <button type="button" onClick={() => setActivity("napping")}>
        Napping
      </button>
    </>
  );
};
const mapStateToProps = (state) => {
  const { name, activity } = state;
  return { name, activity };
};
export default connect(mapStateToProps, { setName, setActivity })(Activity);
