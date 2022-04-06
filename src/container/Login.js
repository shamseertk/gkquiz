import { Button, FormControl, FormLabel, TextField } from '@mui/material'
import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import { auth } from '../services/fb';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const doLogin = () => {
    signInWithEmailAndPassword(auth, username, password).then(test => {
      console.log(test);
    })
  }

  return <div>
    <FormControl name="s">
      <FormLabel>UserName: <TextField value={username} onChange={(event) => setUsername(event.target.value)} /> </FormLabel>
      <FormLabel>Password: <TextField type="password" value={password} onChange={(event) => setPassword(event.target.value)} /> </FormLabel>
      <Button onClick={() => doLogin()}>Login</Button>
    </FormControl>
  </div>
}

export default Login