import { FC, memo } from "react";
import { DisplayProps } from "./types";

const Display: FC<DisplayProps> = memo(
  ({ status, time, handleContinue, handleRestart, handleStop }) => {
    const handleToggle = status === "stop" ? handleStop : handleContinue;
    return (
      <div>
        <div>{time}</div>
        <div>
          <button onClick={handleToggle}>{status}</button>
        </div>
        <div>
          <button onClick={handleRestart}>restart</button>
        </div>
      </div>
    );
  }
);

export default Display;
