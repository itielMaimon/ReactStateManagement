import TodoList from "./TodoList";
import AddItemInput from "./AddItemInput";
import TodosCount from "./TodosCount";
import RecentPanel from "./RecentPanel";
import "./styles.scss";

const Todos = () => (
  <>
    <h3>Todos App</h3>
    <TodosCount />
    <AddItemInput />
    <TodoList />
    <RecentPanel />
  </>
);

export default Todos;
