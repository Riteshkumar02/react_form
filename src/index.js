import React from 'react';
import ReactDOM from 'react-dom/client';
import Form from './Form';
// import ClassComp from './ClassComp';
// import Func from './Func';
// import NameComp from './NameComp';
// import Counter from './Counter';
// import DisplayCounter from './DisplayCounter';
// import CounterControler from './CounterControler';
// import ParentComp from './ParentComp';
// import ChildComp from './ChildComp';

const root = ReactDOM.createRoot(document.getElementById('root'));
// const fname="RITESH"
root.render(
  <React.StrictMode>
  <h2>Hello World</h2>
  {/* <Func sc="FC" /> */}
  {/* <ClassComp sc="CC"/> */}
  {/* <NameComp name={fname} lname="Kumar">
<h4>  what is going on?</h4>
<h4>I am fine</h4>
  </NameComp> */}
  {/* <Counter /> */}
  <Form />
  {/* <DisplayCounter />
  <CounterControler /> */}
  {/* <ParentComp/> */}
  {/* <ChildComp/> */}
  </React.StrictMode>
);
