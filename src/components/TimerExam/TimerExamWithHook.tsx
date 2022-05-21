import { FC, memo } from "react";
import useTimer from "../../hooks/useTimer";
import Display from "./Display";
import useTimerView from "./hooks";

export const TimerExamWithHook: FC = memo(() => {
  const timer = useTimer();
  const timerView = useTimerView(timer);

  return <Display {...timerView} />;
});

export default TimerExamWithHook;
