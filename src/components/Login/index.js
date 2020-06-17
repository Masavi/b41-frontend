import React, { useState } from 'react';
import {
  Button,  
  Form,  
  FormGroup,
  Label,  
  Input,
} from 'reactstrap';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const jsonSend = { email, password }
    console.log(jsonSend);
    alert('Successful login');
  };

  return (
    <React.Fragment>
      <h1 className="mb-4">Login to Maui App</h1>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label>Email</Label>
          <Input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="exampleEmail"
            placeholder="type your email" />
        </FormGroup>
        <FormGroup>
          <Label>Password</Label>
          <Input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            id="examplePassword"
            placeholder="type your password here" />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    </React.Fragment>
  );
}
 
export default Login;
 