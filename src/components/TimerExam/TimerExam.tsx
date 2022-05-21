import { FC, memo } from "react";
import { TimerExamProps } from "./types";
import useTimerView from "./hooks";
import Display from "./Display";

const TimerExam: FC<TimerExamProps> = memo(({ timer }) => {
  const timerView = useTimerView(timer);

  return <Display {...timerView} />;
});

export default TimerExam;
