import React, { useState } from "react";
import EmployeeService from "../services/EmployeeService";
import { useNavigate } from "react-router-dom";

const AddEmployee = () => {
  const [employee, setEmplyee] = useState({
    id: "",
    firstName: "",
    lastName: "",
    emailId: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const value = e.target.value;
    setEmplyee({ ...employee, [e.target.name]: value });
  };

  const saveEmployee = (e) => {
    e.preventDefault(); //prevents the refreshing of page
    EmployeeService.saveEmployees(employee)
      .then((response) => {
        console.log(response);
        navigate("/employeeList");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const reset = (e) => {
    e.preventDefault();
    setEmplyee({
      id: "",
      firstName: "",
      lastName: "",
      emailId: "",
    });
  };

  return (
    <div className="flex max-w-2xl mx-auto shadow border-b">
      {/*border-b : bottom , mx-auto: margin x direction */}
      <div className="px-8 py-8">
        <div className="font-thin text-2xl tracking-wider">
          {/*  tracking-wider: adds some space in between letters*/}
          <h1>Add New Employee</h1>
        </div>

        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">
            First Name
          </label>
          {/* mt-2: margin top(space between text and box), px-2: adds gap inside text box */}
          {/* name="firstName" from html
          and value from react */}
          <input
            type="text"
            name="firstName"
            value={employee.firstName}
            onChange={(e) => handleChange(e)}
            className="h-10 w-96 border mt-2 px-2 py-2"
          ></input>
        </div>

        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">
            Last Name
          </label>
          {/* mt-2: margin top(space between text and box), px-2: adds gap inside text box */}
          <input
            type="text"
            name="lastName"
            value={employee.lastName}
            onChange={(e) => handleChange(e)}
            className="h-10 w-96 border mt-2 px-2 py-2"
          ></input>
        </div>

        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">
            Email
          </label>
          {/* mt-2: margin top(space between text and box), px-2: adds gap inside text box */}
          <input
            type="email"
            name="emailId"
            value={employee.emailId}
            onChange={(e) => handleChange(e)}
            className="h-10 w-96 border mt-2 px-2 py-2"
          ></input>
        </div>

        <div className="items-center justify-center h-14 w-full my-4 space-x-4 pt-4">
          <button
            onClick={saveEmployee}
            className="rounded text-white font-semibold bg-green-400 hover:bg-green-700 py-2 px-6"
          >
            Save
          </button>

          <button
            onClick={reset}
            className="rounded text-white font-semibold bg-red-400 hover:bg-red-700 py-2 px-6"
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddEmployee;
