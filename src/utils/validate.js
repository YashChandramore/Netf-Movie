export const validcheckdata = (email,password)=>{
    const isemailvalid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const ispassvali = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    if(!isemailvalid){
        return "Email is invalid ";
    }
    if(!ispassvali){
        return "Password is invalid ";
    }
    return null;
};