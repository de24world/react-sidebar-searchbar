import "./styles.css";
import ThirdLayer from "./ThirdLayer/ThirdLayer";
import ScrollProvider from "./contexts/ScrollProvider";

export default function App() {
  return (
    <div className="App">
      <ScrollProvider>
        <ThirdLayer />
      </ScrollProvider>
    </div>
  );
}
