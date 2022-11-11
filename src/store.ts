import { createState } from "@hookstate/core";
import { Locomotive } from "./types";

type Store = {
  locomotives: Locomotive[];
  selectedLocomotive: Locomotive | null;
};

const store = createState<Store>({
  locomotives: [],
  selectedLocomotive: null,
});

export default store;
