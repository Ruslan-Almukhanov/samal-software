import { useState as useGlobalState } from "@hookstate/core";
import store from "../../store";
import { Locomotive } from "../../types";
import styles from "./List.module.scss";

const List = () => {
  const globalState = useGlobalState(store);
  const { locomotives } = globalState.get();

  const deleteHandler = (id: string) => {
    globalState.set((prev) => {
      return {
        ...prev,
        locomotives: [
          ...prev.locomotives.filter((locomotive) => locomotive.id !== id),
        ],
      };
    });
  };

  const selectHandler = (selectedLocomotive: Locomotive) => {
    globalState.set((prev) => {
      return {
        ...prev,
        selectedLocomotive,
      };
    });
  };
  return (
    <ul className={styles.list}>
      {locomotives.map((locomotive) => (
        <li key={locomotive.id}>
          {locomotive.name}
          <span
            className={styles.delete}
            onClick={() => deleteHandler(locomotive.id)}
          />
          <span
            className={styles.edit}
            onClick={() => selectHandler(locomotive)}
          />
        </li>
      ))}
    </ul>
  );
};

export default List;
