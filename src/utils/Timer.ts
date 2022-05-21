import moment, { Moment } from "moment";

export class Timer {
  private handle!: ReturnType<typeof setInterval>;
  protected moment!: Moment;
  public readonly initalTime: string;

  constructor(time: string) {
    this.initalTime = time;
    this.init();
  }

  private get isFinish(): boolean {
    return this.time === "00:00";
  }

  private get time(): string {
    return this.moment.format("mm:ss");
  }

  private init() {
    this.moment = moment(this.initalTime, "mm:ss");
  }

  protected tick() {
    this.moment.subtract(1, "s");
  }

  public subscribe(callback: (time: string) => void): () => void {
    this.handle = setInterval(() => {
      if (this.isFinish) {
        this.stop();
        return;
      }
      this.tick();
      callback(this.time);
    }, 1000);

    return this.stop.bind(this);
  }

  public stop() {
    clearInterval(this.handle);
  }

  public restart(callback: (time: string) => void) {
    this.stop();
    this.init();
    this.subscribe(callback);
    callback(this.time);
  }
}

export class Timer2 extends Timer {
  protected tick() {
    this.moment.subtract(2, "s");
  }
}
