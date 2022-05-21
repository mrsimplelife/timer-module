import { Timer } from "../../utils/Timer";
import useTimerView from "./hooks";

export type Status = "stop" | "continue";

export type TimerExamProps = {
  timer: Timer;
};

export type DisplayProps = ReturnType<typeof useTimerView>;
