
import { GlobalProvider } from './Context/GlobalState';
import "antd/dist/antd.css";
import './App.css'

import {
 Main
 
} from "./Components/index";

function App() {
  return (
    <>
      <GlobalProvider>
      {/* <div className="App"> */}
          
          <Main/>
          {/* <EmployeeList /> */}
          {/* <AddEmployee /> */}
      {/* </div> */}
    </GlobalProvider>
    </>
  );
}

export default App;
