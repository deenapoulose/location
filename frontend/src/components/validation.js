const validation =(values)=>{
    let errors={}
    if(!values.lang){
        errors.lang="lang is required";
    }
     if(typeof (values.lang )!='number'){
        errors.lang="required number";
    }
   
    if(!values.long){
        errors.long="long is required";
    }
     if(typeof values.long !='number'){
        errors.long="required number";
    }
    if(!values.km){
        errors.km="km is required"}
        if(typeof values.km!='number'){
        errors.km="required number";
    }
return errors;
}
export default validation;