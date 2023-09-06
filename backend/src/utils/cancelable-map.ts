import { Reject } from "./reject";

export class CancelableMap {
  private store: Record<string, Reject>;

  constructor() {
    this.store = {};
  }

  public add(key: string, value: Reject) {
    if (this.store[key]) {
      this.store[key]("Action canceled");
      this.remove(key);
    }
    this.store[key] = value;
  }

  public remove(key: string) {
    delete this.store[key];
  }
}
