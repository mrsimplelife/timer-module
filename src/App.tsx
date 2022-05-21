import { memo, useState } from "react";
import "./App.css";
import TimerExam from "./components/TimerExam/TimerExam";
import TimerExamWithHook from "./components/TimerExam/TimerExamWithHook";
import { TimerProvider } from "./contexts/TimerContext";
import { Timer, Timer2 } from "./utils/Timer";

const ContextExam = memo(() => (
  <div>
    <TimerProvider timer={new Timer2("00:20")}>
      <TimerExamWithHook />
    </TimerProvider>
  </div>
));

const App = () => {
  const [show, setShow] = useState(false);
  const handleToggle = () => {
    setShow((prev) => !prev);
  };
  return (
    <div>
      <ContextExam />
      <br />
      <div>
        <button onClick={handleToggle}>toggle</button>
      </div>
      <br />
      {show && <TimerExam timer={new Timer("00:10")} />}
    </div>
  );
};

export default App;
