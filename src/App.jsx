import UserProfile from "./components/UserProfile";
import TodoList from "./components/TodoList";
import Calculator from "./components/Calculator";
import ProductCard from "./components/ProductCard";
import ColorSelector from "./components/ColorSelector";

const tasks = [
  { text: "Buy groceries", completed: true },
  { text: "Walk the dog", completed: true },
];

const colors = ["red", "green", "blue", "yellow", "purple"];

function App() {
  return (
    <div>
      <UserProfile name="Sam Samsky" age={28} location="Baku" />

      <TodoList tasks={tasks} />

      <Calculator num1={2} num2={3} />

      <ProductCard
        title="Hamster"
        price={999.99}
        imageUrl="https://i.pinimg.com/736x/db/fb/66/dbfb66fae994bdbc07284198d52eaf36.jpg"
        description="Very scary Hamster"
      />

      <ColorSelector colors={colors} />
    </div>
  );
}

export default App;
