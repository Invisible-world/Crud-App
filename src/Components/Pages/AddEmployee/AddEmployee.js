import React, { useState, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Input, Button,Form } from 'antd';
import { GlobalContext } from '../../../Context/GlobalState';


 const AddEmployee = () => {
  let history = useHistory();

  const { addEmployee, employees } = useContext(GlobalContext);

  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [designation, setDesignation] = useState("");

  const onFinish = (e) => {
    // e.preventDefault();
    const newEmployee = {
      id: employees.length + 1,
      name,
      location,
      designation,
    };
    addEmployee(newEmployee);
    // history.push("/");
    console.log(newEmployee)
  };

  return (
    <React.Fragment>
     
     
      <div style={{textAlign:'center'}}>
        <Form onFinish={onFinish}>
          
          <Form.Item>
          <Input
      placeholder="Enter Employee Name"
      value={name}
      onChange={(e) => setName(e.target.value)}
      />
      </Form.Item>
    
        
          <Form.Item>
          <Input
      placeholder="Location"
      value={location}
      onChange={(e) => setLocation(e.target.value)}
     />
     </Form.Item>
      
          
          
          <Form.Item>
          <Input
      placeholder="Designation"
      onChange={(e) => setDesignation(e.target.value)}
      />
      </Form.Item>
          
          
            <Form.Item>
            <Button className=""
            htmlType="submit"
             >
              Add Employee
            </Button>
            </Form.Item>
          
          {/* <div className="text-center mt-4 text-gray-500">
            <Link to="/">Cancel</Link>
          </div> */}
        </Form>
      </div>
    </React.Fragment>
  );
};
export default AddEmployee