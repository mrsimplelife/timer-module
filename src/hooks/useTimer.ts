import { useContext } from "react";
import { TimerContext } from "../contexts/TimerContext";

const useTimer = () => useContext(TimerContext)!;

export default useTimer;
