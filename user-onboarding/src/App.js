import React, { useState, useEffect } from "react";
import "./App.css";
import Form from "./Components/Form";
import axios from "axios";
import schema from "./Validation/formSchema";

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

  const postNewUser = (newUser) => {
    axios
      .post(`https://reqres.in/api/users`, newUser)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.error(err));
  };

  const inputChange = (name, value) => {
    setFormValues({ ...formValues, [name]: value });
  };
  const formSubmit = () => {
    const newUser = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
    };
    postNewUser(newUser);
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
    </div>
  );
}

export default App;
