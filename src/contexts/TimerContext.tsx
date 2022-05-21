import { createContext, FC, ReactNode } from "react";
import { Timer } from "../utils/Timer";

export const TimerContext = createContext<Timer | null>(null);

type TimerProviderProps = {
  timer: Timer;
  children: ReactNode;
};

export const TimerProvider: FC<TimerProviderProps> = ({ timer, children }) => {
  return (
    <TimerContext.Provider value={timer}>{children}</TimerContext.Provider>
  );
};
