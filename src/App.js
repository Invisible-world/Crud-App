import { AddEmployee } from './Components/AddEmployee';
import { EmployeeList } from './Components/EmployeeList';
import { GlobalProvider } from './Context/GlobalState';
import "antd/dist/antd.css";
function App() {
  return (
    <>
      <GlobalProvider>
      <div className="App">
          <EmployeeList />
          <AddEmployee />
      </div>
    </GlobalProvider>
    </>
  );
}

export default App;
