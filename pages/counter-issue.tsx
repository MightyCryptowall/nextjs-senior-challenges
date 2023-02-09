import { useMemo, useRef, useState } from "react";
import Countdown, { CountdownRendererFn } from "react-countdown"

interface CounterIssueProps {
  
}
 
const CounterIssue: React.FC<CounterIssueProps> = () => {
  const [count, setCount] = useState(0);
  const countDownRef = useRef<Countdown>(null);
  const [value, SetValue] = useState("");
  const handleRestart = () => {
    setCount(Date.now() + 1000 * 60);
    if (countDownRef.current) {
      countDownRef.current.api?.start();
    }
  }
  const countDownRenderer: CountdownRendererFn = ({
    hours,
    minutes,
    seconds,
    completed,
  }) => {
    if (completed) {
      // Render a completed state
      return <span onClick={handleRestart}>Restart</span>;
    } else {
      // Render a countdown
      return <span> Re-send in {seconds == 0 ? 60 : seconds} sec...</span>;
    }
  };
  return (
    <>
      <input value={value} onChange={ (e) => SetValue(e.target.value) }/><br/>
     <Countdown ref={countDownRef} key={count} date={Date.now() + 1000 * 60} renderer={countDownRenderer} />
    </>
    );
}
 
export default CounterIssue;