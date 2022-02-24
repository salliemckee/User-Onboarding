import React, { useState, useEffect } from "react";
import "./App.css";
import Form from "./Components/Form";
import axios from "axios";
import schema from "./Validation/formSchema";
import * as yup from "yup";

const initialFormValues = {
  name: "",
  email: "",
  password: "",
  termsOfService: false,
};

const initialFormErrors = {
  name: "",
  email: "",
  password: "",
};

const initialUsers = [];
const initialDisabled = [];

function App() {
  const [users, setUsers] = useState(initialUsers);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

  // const postNewUser = (newUser) => {
  //   axios
  //     .post(`https://reqres.in/api/users`, newUser)
  //     .then((res) => {
  //       console.log(res);
  //     })
  //     .catch((err) => console.error(err));
  // };

  const inputChange = (name, value) => {
    validate(name, value);
    setFormValues({ ...formValues, [name]: value });
  };
  const formSubmit = () => {
    axios
      .post(`https://reqres.in/api/users`, formValues)
      .then((res) => {
        setUsers([res.data, ...users]);
      })
      .catch((err) => console.error(err));
  };

  const validate = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: "" }))
      .catch((err) => setFormErrors({ ...formErrors, [name]: err.errors[0] }));
  };

  return (
    <div className="App">
      <header>
        <h1>User Onboarding App</h1>
      </header>
      <Form
        values={formValues}
        change={inputChange}
        submit={formSubmit}
        errors={formErrors}
      />
      {users.map((user) => {
        return (
          <div key={user.id}>
            <p>{user.name}</p>
            <p>{user.email}</p>
          </div>
        );
      })}
    </div>
  );
}

export default App;
