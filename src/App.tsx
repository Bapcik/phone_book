
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { NavigationList } from "./navigation/NavigationList";


function App() {
  return (
    <>
       <BrowserRouter>
      <NavigationList />
    </BrowserRouter>
    </>
  );
}

export default App;
