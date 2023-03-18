import { axiosInstance } from "../../utils/AxiosInstance";

export const getAllUsers = async () => {
  const URL = '/mba/api/v1/users/';
    try{
    const response = await axiosInstance.get(URL,{ headers:{"x-access-token":localStorage.getItem("accessToken")}});
      console.log(response)
    return response;
    }
    catch(error){
        console.log(error)
        return error;
    }   
};
