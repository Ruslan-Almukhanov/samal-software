import { Locomotive as LocomotiveType } from "types";
import styles from "./Locomotive.module.scss";

const Locomotive = ({
  locomotive,
  selectHandler,
  deleteHandler,
}: {
  locomotive: LocomotiveType;
  selectHandler: (selected: LocomotiveType) => void;
  deleteHandler: (id: string) => void;
}) => {
  return (
    <li className={styles.item}>
      <span>{locomotive.name}</span>
      <span
        className={styles.delete}
        onClick={() => deleteHandler(locomotive.id)}
      />
      <span className={styles.edit} onClick={() => selectHandler(locomotive)} />
    </li>
  );
};

export default Locomotive;
