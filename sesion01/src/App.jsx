import "./App.css";
import ParentComp from "./components/ParentComp";


// import DemoJSX from './components/DemoJSX';

function App() {
  return (
    <div className="App">
      {/* Gọi componet sử dụng */}
      {/* <DemoJSX/> */}
      <ParentComp/>
      
    </div>
  );
}
export default App;
