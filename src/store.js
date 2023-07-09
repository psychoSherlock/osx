import { makeAutoObservable } from "mobx";
import React from "react";

class AppStore {
  isMax = true;

  constructor() {
    makeAutoObservable(this);
  }

  toggleMax() {
    this.isMax = !this.isMax;
  }
}

const store = new AppStore();
export const StoreContext = React.createContext(store);
export default store;
