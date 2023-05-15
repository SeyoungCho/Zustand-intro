import { useStore } from "../store";
import "./Column.css";
import Task from "./Task";

const Column = ({ state }) => {
  const tasks = useStore();
  return (
    <div className="column">
      <p>{state}</p>
      <Task title="Todo" />
    </div>
  );
};

export default Column;
