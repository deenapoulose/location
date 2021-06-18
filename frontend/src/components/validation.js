const validation =(values)=>{
    let errors={}
    const rx_live = /^[+-]?\d*(?:[.,]\d*)?$/;
    if(!values.lang ){
        errors.lang="lang is required and given number";
    }
    //  elseif (rx_live.test(values.lang)){
    //     errors.lang="required number";
    //  }
    // else  if( ){
    //    
    // }
   
    if(!values.long){
        errors.long="long is required";
    }
    //  if(typeof values.long !='number'){
    //     errors.long="required number";
    // }
    if(!values.km){
        errors.km="km is required"}
    //     if(typeof values.km!='number'){
    //     errors.km="required number";
    // }
return errors;
}
export default validation;