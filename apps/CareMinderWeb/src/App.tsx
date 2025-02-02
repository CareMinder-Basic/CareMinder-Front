import "./App.css";
import { Button } from "@careminder/ui-library";

function App() {
  return (
    <div>
      <p>테스트</p>
      <Button title="클릭" onPress={() => alert("버튼 클릭됨!")} />
    </div>
  );
}

export default App;
