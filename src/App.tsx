import Counter from "./components/Counter";
import Todo from "./components/Todo";
import Users from "./components/Users";

export default function App() {
  console.log("Hey I am building ....");

  return (
    <div className="flex h-screen justify-center items-center flex-col">
      {/* <Counter /> */}
      {/* <Todo /> */}
      <Users />
    </div>
  );
}
