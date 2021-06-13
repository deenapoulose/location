
import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { createProduct} from '../actions/productActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
export default function AddScreen(props) {
   
    const [name, setName] = useState('');
    const [lati, setlati] = useState('');
    const [image, setImage] = useState('');
    const [long, setlong] = useState('');
    const [category, setCategory] = useState('');
    
    const [loadingUpload, setLoadingUpload] = useState(false);
    const [errorUpload, setErrorUpload] = useState('');
  
  
    const dispatch = useDispatch();
    useEffect(() => {
      
       
       
      
    }, []);
    const createHandler = () => {
        dispatch(createProduct({
            name,
            lati,
            image,
            category,
           long,
        }

        ));
     
       };
    // const submitHandler = (e) => {
    //     e.preventDefault();
    //     // dispatch update product
    //     dispatch(
    //         createProduct({
            
    //         name,
    //         lati,
    //         image,
    //         category,
    //        long,
          
    //       })
    //     );
    //   };
    const uploadFileHandler = async (e) => {
      const file = e.target.files[0];
      const bodyFormData = new FormData();
      bodyFormData.append('image', file);
      setLoadingUpload(true);
      try {
        const { data } = await Axios.post('/api/uploads', bodyFormData, {
          headers: {
            'Content-Type': 'multipart/form-data'
            // Authorization: `Bearer ${userInfo.token}`,
          },
        });
        setImage(data);
        setLoadingUpload(false);
      } catch (error) {
        setErrorUpload(error.message);
        setLoadingUpload(false);
      }
    };
    return(
        <div>
             <div>
      <form className="form" onSubmit={createHandler} >
      
        <div>
          <h1>Add Location </h1>
        </div>
     
            <div>
              <label htmlFor="name">Name</label>
              <input
                id="name"
                type="text"
                placeholder="Enter name"
               
                onChange={(e) => setName(e.target.value)}
              ></input>
            </div>
            <div>
              <label htmlFor="lati">Latitude</label>
              <input
                id="latitude"
                type="text"
                placeholder="Enter Latitude"
               
                 onChange={(e) => setlati(e.target.value)}
              ></input>
            </div>
            <div>
              <label htmlFor="long">Longtitude</label>
              <input
                id="longtitude"
                type="text"
                placeholder="Enter Latitude"
                
             onChange={(e) => setlong(e.target.value)}
              ></input>
            </div>
            
            {/* <div>
              <label htmlFor="image">Image</label>
              <input
                id="image"
                type="text"
                placeholder="Enter image"
               
                onChange={(e) => setImage(e.target.value)}
              ></input>
            </div> */}
            <div>
              <label htmlFor="imageFile">Image File</label>
              <input
                type="file"
                id="imageFile"
                label="Choose Image"
                onChange={uploadFileHandler}
              ></input>
              {loadingUpload && <LoadingBox></LoadingBox>}
              {errorUpload && (
                <MessageBox variant="danger">{errorUpload}</MessageBox>
              )}
            </div>
           
            <div>
              <label htmlFor="category">Category</label>
              <input
                id="category"
                type="text"
                placeholder="Enter category"
               
                onChange={(e) => setCategory(e.target.value)}
              ></input>
            </div>
            <div>
              <label></label>
              <button className="primary" type="submit">
                ADD
              </button>
            </div>
        
      </form>
    </div>
        </div>
    )
}