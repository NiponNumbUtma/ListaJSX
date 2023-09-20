import { useState, useRef } from 'react';
import { add, divide, multiply, subtract } from './utils/math';
import Todo from './components/List';

function App() {
  /*const [counter, setCounter] = useState(2);
  const [result, setResult] = useState(0);
  // const inputARef = document.querySelector('#a');
  const inputARef = useRef(null);
  const inputBRef = useRef(null);

  const handleCounter = () => {
    setCounter(counter + 1);
  };

  const handleAdd = () => {
    // const a = intpuAref.value;
    console.log(inputARef.current);
    const a = Number(inputARef.current.value);
    const b = Number(inputBRef.current.value);
    setResult(add(a, b));
  };

  const handleMultiply = () => {
    // const a = intpuAref.value;
    console.log(inputARef.current);
    const a = Number(inputARef.current.value);
    const b = Number(inputBRef.current.value);
    setResult(multiply(a, b));
  };

  const handleDivide = () => {
    // const a = intpuAref.value;
    console.log(inputARef.current);
    const a = Number(inputARef.current.value);
    const b = Number(inputBRef.current.value);
    setResult(divide(a, b));
  };

  const handleSubtract = () => {
    // const a = intpuAref.value;
    console.log(inputARef.current);
    const a = Number(inputARef.current.value);
    const b = Number(inputBRef.current.value);
    setResult(subtract(a, b));
  };*/
   return (
    <div className="container">
    <Todo />
  </div>
   )
}
export default App;
