import { axiosInstance } from "../utils/AxiosInstance";


export const signIn = async (user)=>{

    const URL='/mba/api/v1/auth/signin';

    try{
    const response= await axiosInstance.post(URL,user);
    console.log(response);
    return response; 
   }
    catch(error){
        console.log(error);
        return error.response;
    }
} 


export const signUp= async (user)=>{

    const URL = "/mba/api/v1/auth/signup";

    try{
        const response=await axiosInstance.post(URL,user);
        return response;
    }
    catch(error){
        return error.response;
    }
}

export const signOut= ()=>{

    localStorage.removeItem("name");
    localStorage.removeItem("email");
    localStorage.removeItem("userTypes");
    localStorage.removeItem("accessToken");
    localStorage.removeItem("userId");
    localStorage.removeItem("userStatus");


}