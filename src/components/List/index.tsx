import { useState as useGlobalState } from "@hookstate/core";
import Locomotive from "components/Locomotive";
import store from "../../store";
import { Locomotive as LocomotiveType } from "../../types";

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

  const selectHandler = (selectedLocomotive: LocomotiveType) => {
    globalState.set((prev) => {
      return {
        ...prev,
        selectedLocomotive,
      };
    });
  };
  return (
    <ul>
      {locomotives.map((locomotive) => (
        <Locomotive
          key={locomotive.id}
          locomotive={locomotive}
          selectHandler={selectHandler}
          deleteHandler={deleteHandler}
        />
      ))}
    </ul>
  );
};

export default List;
