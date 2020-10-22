import React, { useState } from 'react';
import { connect } from 'react-redux';
import { eat, play, nap, setName } from '../redux/actions';

const Activity = ({ name, activity, eat, play, nap, setName }) =>{
 const [input, setInput] = useState('');

 const _handleChange = (name) =>{
   setInput(name);
 }
  const _handleClick = () => {
    setName(input);
  }

return(
  <>
  <h1>What is that crazy cat doing now????</h1>
    <form>
      <label>
        What is your cat's name?
          <input type='text' onChange={(e) => _handleChange(e.target.value)} value={input} />
          <button type='button' onClick={_handleClick}>Submit</button>
      </label> 
    </form>

    
    <p>The {name} is {activity}.</p>
    <button type='button' onClick={() => eat()}>
      Eating
    </button>
    <button type='button' onClick={() => play()}>
      Playing
    </button>
    <button type='button' onClick={() => nap()}>
      Napping
    </button>
  </>
);
}

const mapStateToProps = (state) => {
  const { name, activity } = state;
  return {name: name.name, activity: activity.activity};
}

export default connect(mapStateToProps, { eat, play, nap, setName })(Activity);
