import { Typography } from '@mui/material';
import React, { useState } from 'react';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {  getDoc, getDocs, collection } from "firebase/firestore";
import { db } from '../../services/fb';

const auth = getAuth();


function PageTitle(props) {
  const [name] = useState('');
  onAuthStateChanged(auth, async (user) => {
    if (user) {

      
const docSnap = await getDoc(await getDocs(collection(db, "userdetails")));

if (docSnap.exists()) {
  console.log("Document data:", docSnap.data());
} else {
  // doc.data() will be undefined in this case
  console.log("No such document!");
}
    }
  }

     
  );

  return <Typography className="page-title">
    {props.title} : Welcome {name}
  </Typography>
}

export default PageTitle