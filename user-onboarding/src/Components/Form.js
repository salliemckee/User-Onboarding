import React from "react";

export default function Form(props) {
  const { values, submit, change, disabled, errors } = props;

  const onSubmit = (evt) => {
    evt.preventDefault();
    submit();
  };

  const onChange = (evt) => {
    const { name, value, type, checked } = evt.target;
    const valueToUse = type === "checkbox" ? checked : value;
    change(name, valueToUse);
  };
  return (
    <form className="form-container" onSubmit={onSubmit}>
      <div className="form-group submit">
        <h2>Add New User</h2>
        <button disable={disabled}>Submit</button>
        <div className="errors">
          <p>{errors.name}</p>
          <p>{errors.email}</p>
          <p>{errors.password}</p>
          <p>{errors.termsOfService}</p>
        </div>
      </div>

      <div className="form-group inputs">
        <h3>General Info</h3>
        <label>
          Name&nbsp;
          <input
            value={values.name}
            onChange={onChange}
            name="name"
            type="text"
          />
        </label>

        <label>
          &nbsp;Email&nbsp;
          <input
            value={values.email}
            onChange={onChange}
            name="email"
            type="text"
          />
        </label>

        <label>
          &nbsp;Password&nbsp;
          <input
            value={values.password}
            onChange={onChange}
            name="password"
            type="password"
          />
        </label>
      </div>
      <div className="form-group checkbox">
        <h4>Terms of Service</h4>
        <label>
          <input
            type="checkbox"
            name="termsOfService"
            checked={values.termsOfService}
            onChange={onChange}
          />
        </label>
      </div>
    </form>
  );
}
