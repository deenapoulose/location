import React, { useEffect,useState } from 'react';
import validation from '../components/validation'
import Axios from 'axios';
export default function HomeScreen() {
  const [values,setValues] = useState({
    lang:"",
    long:"",
    km:"",
    
  })
  const[loclist,setloclist]=useState([]);
  const[errors,setErrors] = useState({});
  const handleChange=(event)=>{
    setValues({
      ...values,
      [event.target.name]:event.target.value,
    });
   
  }
  const handleFormSubmit=(event)=>{
    event.preventDefault();
    setErrors(validation(values));
   
    Axios.post('/api/products/read',{lang:values.lang,long:values.long,km:values.km})
   .then((response)=>{
        console.log(response);
        setloclist(response.data);
       
     })
  }
  return (
    <div >
      <h1>locations</h1>
      
     <form>
       <div>
         <label>Lattitude</label>
         <input type="text"name="lang" value={values.lang} onChange={handleChange}></input>
         {errors.lang &&<p>{errors.lang}</p>}
       </div>
       <div>
         <label>Longtitude</label>
         <input type="text" name="long" value={values.long} onChange={handleChange}></input>
         {errors.long &&<p>{errors.long}</p>}
       </div>
       <div>
         <label>km</label>
         <input type="text" name="km" value={values.km} onChange={handleChange}></input>
         {errors.km &&<p>{errors.km}</p>}
       </div>
       <button onClick={handleFormSubmit}>Find</button>
     </form>
      
    
 
      <div>
        <table>
          
        <tbody>
            {
              loclist.length>0 ?(
            
            loclist.map((value,key)=>{
              return(
                        <tr key={key}>
                          
                            
                            <td><h2>{value.name}</h2></td>

                            <td> <img className="medium" src={value.image} alt={value.name} /></td>
                          
                        </tr>
                       
            )})):(
              <h1>no data</h1>
            )
          } 
            </tbody> 

        </table>
        </div>
  </div>
  )

  
}
