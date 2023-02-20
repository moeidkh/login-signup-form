export const inputChecking = (datas, type) => {
    const error = {};
    if(type === "login"){
        if(!datas.email.trim()){
            error.email = "Email Required!";
        }else if (!datas.email.match(/[^\d][\w.]*@[\w]{4,}\.[\w]{2,}/i)){
            error.email = "Email Address is invalid!";
        }else{
            delete error.email
        }
    
        if(!datas.pass){
            error.pass = "Password is Required!"
        }else if ( datas.pass.trim().length < 6 ){
            error.pass = "Password needs to be more 6 character or more...";
        }else{
            delete error.pass;
        }
    }
    
    if(type === "signup"){
        if(!datas.name.trim()){
            error.name = "Name is Required";
        }else{
            delete error.name;
        }
        if(!datas.email.trim()){
            error.email = "Email Required!";
        }else if (!datas.email.match(/[^\d][\w.]*@[\w]{4,}\.[\w]{2,}/i)){
            error.email = "Email Address is invalid!";
        }else{
            delete error.email
        }
    
        if(!datas.pass){
            error.pass = "Password is Required!"
        }else if ( datas.pass.trim().length < 6 ){
            error.pass = "Password needs to be more 6 character or more...";
        }else{
            delete error.pass;
        }
        if(!datas.confirmPass){
            error.confirmPass = "Confirm the Password"
        }else if(datas.confirmPass !== datas.pass){
            error.confirmPass = "Password does not match"
        }else{
            delete error.confirmPass;
        }
    
        if(datas.isAccept){
            delete error.isAccept;
        }else{
            error.isAccept = "Accept our regulations!";
        }
    }

    return error
}
