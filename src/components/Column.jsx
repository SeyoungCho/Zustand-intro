import { useStore } from "../store";
import "./Column.css";
import Task from "./Task";

const Column = ({ state }) => {
  // //store에 tasks 상태만 구독한다 (재렌더링은 tasks에만 의존)
  // const tasks = useStore((store) => store.tasks);

  // useStore 안에는 selector 함수를 넘겨준다.
  // selector로 store안의 이 컴포넌트가 구독할 특정 전역상태만 가져올 수 있다.
  // 아래의 경우, store에 들어있는 tasks값 중에 이 컴포넌트의 prop인 state와 매치되는 상태들만 구독하는 것이다.
  // 참고: selector 함수가 리턴하는 값이 새로운 값일 때 재렌더링 한다.
  const tasks = useStore((store) =>
    store.tasks.filter((task) => task.state === state)
  );

  return (
    <div className="column">
      <p>{state}</p>
      <Task title="Todo" />
    </div>
  );
};

export default Column;
