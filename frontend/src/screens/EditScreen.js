import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { detailsProduct, updateProduct } from '../actions/productActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { PRODUCT_UPDATE_RESET } from '../constants/productConstants';
export default function EditScreen(props) {
  const productId = props.match.params.id;
  const [name, setName] = useState('');
  const [lati, setlati] = useState('');
  const [image, setImage] = useState('');
  const [long, setlong] = useState('');
  const [category, setCategory] = useState('');
  const [co, setco] = useState('');
  

  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  const productUpdate = useSelector((state) => state.productUpdate);
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = productUpdate;

  const dispatch = useDispatch();
  useEffect(() => {
    if (successUpdate) {
      props.history.push('/placehistory');
    }
    if (!product || product._id !== productId || successUpdate) {
      dispatch({ type: PRODUCT_UPDATE_RESET });
      dispatch(detailsProduct(productId));
    } else {
      setName(product.name);
      setlati(product.latitude);
      setlong(product.longitude)
      setImage(product.image);
      setCategory(product.category);
      setco(product.location);
     
    }
  }, [product, dispatch, productId, successUpdate, props.history]);
  const submitHandler = (e) => {
    e.preventDefault();
    // dispatch update product
    dispatch(
      updateProduct({
        _id: productId,
        name,
        lati,
        image,
        category,
       long,
       co
      })
    );
  };
 
  
  return (
    <div>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>Edit Product {productId}</h1>
        </div>
        {loadingUpdate && <LoadingBox></LoadingBox>}
        {errorUpdate && <MessageBox variant="danger">{errorUpdate}</MessageBox>}
        {loading ? (
          <LoadingBox></LoadingBox>
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <>
            <div>
              <label htmlFor="name">Name</label>
              <input
                id="name"
                type="text"
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></input>
            </div>
            <div>
              <label htmlFor="lati">Latitude</label>
              <input
                id="latitude"
                type="text"
                placeholder="Enter Latitude"
                value={lati}
                onChange={(e) => setlati(e.target.value)}
              ></input>
            </div>
            <div>
              <label htmlFor="long">Longtitude</label>
              <input
                id="longtitude"
                type="text"
                placeholder="Enter Latitude"
                value={long}
                onChange={(e) => setlong(e.target.value)}
              ></input>
            </div>
            {/* <div>
              <label htmlFor="long">co-ordinate</label>
              <input
                id="co"
                type="text"
                placeholder="codinate"
                value={co}
                onChange={(e) => setco(e.target.value)}
              ></input>
            </div> */}
            <div>
              <label htmlFor="image">Image</label>
              <input
                id="image"
                type="text"
                placeholder="Enter image"
                value={image}
                onChange={(e) => setImage(e.target.value)}
              ></input>
            </div>
           
            <div>
              <label htmlFor="category">Category</label>
              <input
                id="category"
                type="text"
                placeholder="Enter category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              ></input>
            </div>
            <div>
              <label></label>
              <button className="primary" type="submit">
                Update
              </button>
            </div>
          </>
        )}
      </form>
    </div>
  );
}