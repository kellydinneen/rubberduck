import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './Form.css';

const Form = (props) => {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [name, setName] = useState('');
  const [problemType, setProblemType] = useState('');
  const [techType, setTechType] = useState('');
  const [vent, setVent] = useState('');
  const [ventTwo, setVentTwo] = useState('');

  return (
    <form>
      {currentQuestion === 1 && <label>
      What can I call you?
        <input
          aria-label="name input"
          className="name-input"
          placeholder="tell me your name"
          value={name}
          onChange={event => setName(event.target.value)}>
        </input>
      </label>}
      {currentQuestion === 2 && <label>
      How would you describe the trouble you're having {name}, duck-friend?
        <select value={problemType} onChange={event => setProblemType(event.target.value)}>
          <option value="big bad bug">it's a big bad bug 🐛</option>
          <option value="don't know how to start">I just don't know how to start</option>
          <option value="concept confusion">I don't understand a concept I'm working with</option>
          <option value="coder's block">coder's block: I need ideas for what to build and I don't have them</option>
        </select>
      </label>}
      {currentQuestion === 3 && <label>
      Which of these categories is your problem related to?
        <select value={techType} onChange={event => setTechType(event.target.value)}>
          <option value="styling">making things look pretty (css/scss stuff)</option>
          <option value="client-side">client side architecture</option>
          <option value="backend">backend architecture</option>
          <option value="cruchy">something isolated and crunchy (e.g. how do I make this one function do a fancy thing?)</option>
          <option value="git">git or github</option>
          <option value="everything">Everything! Everything is wrong!</option>
          <option value="some other kind">Something else (you don't know me, duck)</option>
        </select>
      </label>}
      {currentQuestion === 4 && <label>
      OK, {name} with the {techType} problem, tell me more.
         <textarea value={vent} onChange={event => setVent(event.target.value)} />
      </label>}
      {currentQuestion === 5 && <label>
      Ok, now tell me even more! I want you to vent. I'll only quack for you if you quack for me.
         <textarea value={ventTwo} onChange={event => setVentTwo(event.target.value)} />
      </label>}
      {currentQuestion > 1 && <button className='back-button' onClick={setCurrentQuestion(currentQuestion--)}>Back</button>}
      <button className='forward-button' onClick={setCurrentQuestion(currentQuestion++)}>Next</button>
      <button className='forward-button' onClick={setCurrentQuestion(currentQuestion++)}>Submit</button>
    </form>
  )
}

export default Form;
