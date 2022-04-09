import React, { useState } from 'react';
import SlotM from './SlotMachine';


function App() {

  //  without updating time
  let newTime = new Date().toLocaleTimeString();
  const [ctime, setCtime] = useState(newTime);
  const UpdateTime = () => {
    newTime = new Date().toLocaleTimeString();
    setCtime(newTime)
  }


  // updating in time
  let Time = new Date().toLocaleTimeString();
  const [Utime, setUTime] = useState(Time);
  const ChangeTime = () => {
    Time = new Date().toLocaleTimeString();
    setUTime(Time)
  };
  setInterval(ChangeTime, 1000);
  

  return (
    <>
      <h1 className='heading_style'>
        🎰 welocome to
        <span style={{ fontWeight: 'bold' }}>slot machine game</span>🎰
      </h1>
      <div className='slot_machine'></div>
      <SlotM x='😄' y='😄' z='😄' />
      <SlotM x="🥰" y="🤩" z="😍" />
      <div className='set_time'>
        <h1>{ctime}</h1>
        <button onClick={UpdateTime} className='set_btn'>get time</button>
      </div>
      <SlotM x="🥦" y="🥦" z="🥦" />
      <SlotM x="🍎" y="🍌" z="🍎" />
      <div className='updating_time'>
        {Utime}
      </div>
    </>
  );
}

export default App;
