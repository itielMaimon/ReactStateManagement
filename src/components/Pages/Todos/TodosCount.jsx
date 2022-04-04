import { useRecoilValue } from "recoil";
import { todoItemsCount } from "./recoil/selectors";

const TodosCount = () => {
  const count = useRecoilValue(todoItemsCount);

  return <h4 className="todosCount">Todos count: {count}</h4>;
};

export default TodosCount;
