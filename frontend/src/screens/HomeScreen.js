import React, { useEffect,useState } from 'react';

import Axios from 'axios';
export default function HomeScreen() {
  
  
  const[lang,setlang]=useState('');
  const [long,setlong]=useState('');
  const[km ,setkm]=useState('');
  const[loclist,setloclist]=useState([]);
  useEffect(()=>{
    console.log("lang",lang)
    console.log("long",long)
    console.log("long",km)
    console.log(loclist)
  })
  const Find=()=>{
    console.log("lang",lang);
    console.log("long",long);
    console.log("km",km);
    Axios.post('/api/products/read',{lang:lang,long:long,km:km})
   .then((response)=>{
        console.log(response);
        setloclist(response.data);
       
     })
  }
  return (
    <div >
    <label For="lang">lang</label>
    <br></br>
    <input type="number" onChange={(event)=>{
     setlang(event.target.value)
   }}></input>
    <br></br>
    <label For="long">longitiude</label>
    <br></br>
    <input  type="number"onChange={(event)=>{
     setlong(event.target.value)
   }}></input>
    <br></br>
    <label For="km">KM</label>
    <br></br>
    <input  type="number"onChange={(event)=>{
     setkm(event.target.value)
   }}></input>
    <br></br>

      <button onClick={Find}>find</button>
    
 
      <div>
        <table>
          
        <tbody>
            { loclist.map((value,key)=>{
              return(
                        <tr key={key}>
                          
                            
                            <td><h2>{value.name}</h2></td>

                            <td> <img className="medium" src={value.image} alt={value.name} /></td>
                          
                        </tr>
                       
            )})} 
            </tbody> 

        </table>
        </div>
  </div>
  )

  
}
