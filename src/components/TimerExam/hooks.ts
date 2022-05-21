import { useCallback, useEffect, useState } from "react";
import { Timer } from "../../utils/Timer";
import { Status } from "./types";

const useTimerView = (timer: Timer) => {
  const [time, setTime] = useState<string>(timer.initalTime);
  const [status, setStatus] = useState<Status>("stop");

  useEffect(() => {
    const unsubscribe = timer.subscribe(setTime);
    return () => {
      unsubscribe();
    };
  }, [timer]);

  const handleStop = useCallback(() => {
    timer.stop();
    setStatus("continue");
  }, [timer]);

  const handleContinue = useCallback(() => {
    timer.subscribe(setTime);
    setStatus("stop");
  }, [timer]);

  const handleRestart = useCallback(() => {
    timer.restart(setTime);
    setStatus("stop");
  }, [timer]);

  return {
    time,
    status,
    handleStop,
    handleContinue,
    handleRestart,
  };
};

export default useTimerView;
