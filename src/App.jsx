import React, { useState } from 'react';
import './styles/App.css';
import FormInput from './components/FormInput';

const App = () => {
  const [values, setValues] = useState({
    firstname: '',
    lastname: '',
    emailAddress: '',
    birthday: '',
    age: '',
    address:'',
  });
  const inputs = [
    {
      id: 1,
      name: 'firstname',
      type: 'text',
      placeholder: 'Firstname',
      label: 'First Name*',
      errorMessage:
        'Please enter first name between 3-16 characters with no spaces or special characters',
      required: true,
      pattern: '^[a-zA-Z0-9]{3,16}$',
    },
    {
      id: 2,
      name: 'lastname',
      type: 'text',
      placeholder: 'Last Name',
      label: 'Last Name*',
      errorMessage:
        'Please enter last name between 3-16 characters with no spaces or special characters',
      required: true,
      pattern: '^[a-zA-Z0-9]{3,16}$',
    },
    {
      id: 3,
      name: 'emailAddress',
      type: 'text',
      placeholder: 'xyz@gmail.com',
      label: 'Email Address*',
      errorMessage: 'Please enter an email address in a valid format',
      required: true,
      pattern: '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$',
    },
    {
      id: 4,
      name: 'birthday',
      type: 'date',
      placeholder: 'Birthday',
      label: 'Birthday',
      errorMessage: 'Please select a birth date',
    },
    {
      id: 5,
      name: 'age',
      type: 'number',
      placeholder: 'Age',
      label: 'Age*',
      errorMessage: 'Please enter a valid age',
      required: true,
      min: 1,
      max: 120,
    },
    {
      id: 6,
      name: 'address',
      type: 'text',
      placeholder: 'Address',
      label: 'Address',
      errorMessage: 'Please enter a valid address',
      required: true,
    },
  ];
  const handleSubmit = (e) => {
    e.preventDefault();
    const { firstname, lastname, emailAddress, birthday, age, address } = values;
    const message = `
      Name: ${firstname} ${lastname}
      Email Address: ${emailAddress}
      Birthday: ${birthday}
      Age: ${age}
      Address: ${address}
    `;
    alert(message);
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return(
    <div>
      <h1>User Form</h1>

      <form onSubmit={handleSubmit}>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button>SUBMIT</button>
      </form>
    </div>

  )
}
export default App;
