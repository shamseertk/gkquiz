import { Button, FormControl, FormLabel, TextField } from '@mui/material'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import { auth } from '../services/fb';
import { fbErrorDetail } from '../utils/fberror';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const doRegister = () => {
    createUserWithEmailAndPassword(auth, username, password).then(test => {
      setMessage(message.operationType);
    }, error => {
      setMessage(fbErrorDetail[error.code]);
    })
  }

  return <div>
    <div>{message}</div>
    <FormControl>
      <FormLabel>UserName: <TextField value={username} onChange={(event) => setUsername(event.target.value)} /> </FormLabel>
      <FormLabel>Password: <TextField type="password" value={password} onChange={(event) => setPassword(event.target.value)} /> </FormLabel>
      <Button onClick={() => doRegister()}>Register</Button>
    </FormControl>
  </div>
}

export default Login;
