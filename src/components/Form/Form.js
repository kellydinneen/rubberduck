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
  const [issueAge, setIssueAge] = useState('');
  const [issueHours, setIssueHours] = useState('');
  const [progressTime, setProgressTime] = useState('');
  const [currentTime, setCurrentTime] = useState('');
  const [breakTime, setBreakTime] = useState('');
  const [eatTime, setEatTime] = useState('');
  const [selfDescription, setSelfDescription] = useState('');
  const [feeling, setFeeling] = useState('');

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
          <option value="crunchy">something isolated and crunchy (e.g. how do I make this one function do a fancy thing?)</option>
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
      {currentQuestion === 6 && <>
        <h3>I hope that helped you mull over your problem productively. Now answer just a few more questions for me.</h3>
        <label>
          How many days have you had this issue?
          <input
            aria-label="issue age input"
            placeholder="number of days"
            value={issueAge}
            onChange={event => setIssueAge(event.target.value)}>
          </input>
        </label>
        <label>
          How many hours TODAY have you been working on this issue?
          <input
            aria-label="issue work today input"
            placeholder="number of hours"
            value={issueHours}
            onChange={event => setIssueHours(event.target.value)}>
          </input>
        </label>
        <label>
          How long has it been since you saw any progress?
          <select value={progressTime} onChange={event => setProgressTime(event.target.value)}>
            <option value="minutes">an hour or less</option>
            <option value="hours">several hours</option>
            <option value="yesterday">yesterday</option>
            <option value="days">days ago</option>
            <option value="never">I've never seen progress</option>
          </select>
        </label>
      </>}
      {currentQuestion === 7 && <>
        <h3>Ok, let's get you some progress. Just a few more questions for context.</h3>
        <label>
          About what time is it where you are?
          <select value={currentTime} onChange={event => currentTime(event.target.value)}>
            <option value="early">early morning</option>
            <option value="morning">mid-morning</option>
            <option value="afternoon">early afternoon</option>
            <option value="end-of-day">approaching the end of the work day</option>
            <option value="6">after 6pm</option>
            <option value="9">after 9pm</option>
            <option value="11">after 11pm</option>
            <option value="unknown">I have no idea</option>
          </select>
        </label>
        <label>
          When was the last time you took a break longer than 5 minutes?
          <select value={breakTime} onChange={event => setBreakTime(event.target.value)}>
            <option value="minutes">an hour or less</option>
            <option value="hours">several hours</option>
            <option value="yesterday">yesterday</option>
          </select>
        </label>
        <label>
          When was the last time you ate?
          <select value={eatTime} onChange={event => setEatTime(event.target.value)}>
            <option value="minutes">an hour or less</option>
            <option value="hours">several hours</option>
            <option value="yesterday">yesterday</option>
          </select>
        </label>
        <label>
          Which of these best describe you, typically? (Select all that apply)
          <select value={selfDescription} onChange={event => selfDescription(event.target.value)} multiple>
            <option value="procrastinator">procrastinator</option>
            <option value="perfectionist">perfectionist</option>
            <option value="adventurous">adventurous</option>
            <option value="over-cautious">over-cautious</option>
            <option value="sloppy">sloppy</option>
            <option value="meticulous">meticulous</option>
            <option value="self-concious">self-concious</option>
            <option value="confident">confident</option>
            <option value="anxious">anxious</option>
            <option value="obsessive">obsessive</option>
            <option value="lazy">lazy</option>
            <option value="imaginative">imaginative</option>
            <option value="hard-working">hard-working</option>
            <option value="boring">boring</option>
            <option value="brilliant">brilliant</option>
            <option value="fast-learner">fast-learner</option>
            <option value="slow-learner">slow-learner</option>
            <option value="analytical">analytical</option>
            <option value="insightful">insightful</option>
            <option value="creative">creative</option>
          </select>
        </label>
        <label>
          How do you feel right now?
          <select value={feeling} onChange={event => setFeeling(event.target.value)}>
            <option value='0'>hopeless</option>
            <option value='1'>incredibly frustrated</option>
            <option value='2'>sort of frustrated</option>
            <option value='3'>ok</option>
            <option value='4'>I'm having fun</option>
          </select>
        </label>
      </>}
      {currentQuestion > 1 && <button className='back-button' onClick={setCurrentQuestion(currentQuestion--)}>Back</button>}
      {currentQuestion < 7 && <button className='forward-button' onClick={setCurrentQuestion(currentQuestion++)}>Next</button>}
      {currentQuestion === 7 && <Link>
        <button className='submit-button' onClick={setCurrentQuestion(1)}>Submit</button>
      </Link>}
    </form>
  )
}

export default Form;
