import { API_URL, Authentication,StudentCourses  } from "./config";
import {User} from './User'
import {Teacher} from './User'
const apiSettings = {
    Register: async (person) => {
        console.warn(person);
        const endpoint = `${API_URL}${Authentication}register`;
        const result = await( await fetch(endpoint,
            {
                method:'POST',
                body: JSON.stringify(person),
                headers:{
                    "Content-Type":"application/json",
                    "Accept":"application/json"
                }
            })).json();        
        console.warn("result: ", result);
        return result;
      },

      getUser: async () => {
        const token =localStorage.getItem("accessToken");
        const endpoint = `${API_URL}${Authentication}getUser`;
        const result = await( await fetch(endpoint,
            {
                method:'GET',               
                headers:{
                    "Content-Type":"application/json",
                    "Accept":"application/json",
                    'Authorization': `Bearer ${token}`
                }
            })).json();        
        console.warn("result: ", result);
        return result;
      },
      Forgetpassword: async (Email) => {
        console.warn(Email)
       const endpoint = `${API_URL}${Authentication}ForgetPassword`;
       const result = await( await fetch(endpoint,
           {
               method:'POST',
               body: JSON.stringify(Email),
               
               headers:{
                   "Content-Type":"application/json",
                   "Accept":"application/json"
               }
           })).json();        
       console.warn("result: ", result);
       return result;

     },
      ForgotPassword: async (password) => {
        console.warn(password)
       const endpoint = `${API_URL}${Authentication}resetpass`;
       const result = await( await fetch(endpoint,
           {
               method:'POST',
               body: JSON.stringify(password),
               
               headers:{
                   "Content-Type":"application/json",
                   "Accept":"application/json"
               }
           })).json();        
       console.warn("result: ", result);
       return result;

     },
     changePassword: async (password) => {
       console.warn(password)
       const token = localStorage.getItem("accessToken");
      const endpoint = `${API_URL}${Authentication}changepass`;
      const result = await( await fetch(endpoint,
   
          {
              method:'PUT',
              body: JSON.stringify(password),
              
              headers:{
                  "Content-Type":"application/json",
                  "Accept":"application/json",
                  "Authorization": ` Bearer ${token}`,
              }
          })).json();        
      console.warn("result: ", result);
      return result;

    },
    listStudentCourse: async (status) => {
      const token = localStorage.getItem("accessToken");
      console.log(status);
      const endpoint = `${API_URL}${StudentCourses}/getListStudentCourses/${status.status}?pageNumber=1&pageSize=3&idCourse=${status.idCourse}`;
      const result = await( await fetch(endpoint,
          {
              method:'GET',
              
              
              headers:{
                  "Content-Type":"application/json",
                  "Accept":"application/json",
                  "Authorization": ` Bearer ${token}`,
              }
          })).json();        
    console.warn("result: ", result);

      return result;

    },
    Studentdetail: async (detail) => {
        const token = localStorage.getItem("accessToken");
        console.log(detail);
        const endpoint = `${API_URL}${StudentCourses}/getListStudentCourses/ALL?pageNumber=1&pageSize=3&idCourse=${detail.idCourse}`;
        const result = await( await fetch(endpoint,
            {
                method:'GET',
                
                
                headers:{
                    "Content-Type":"application/json",
                    "Accept":"application/json",
                    "Authorization": ` Bearer ${token}`,
                }
            })).json();        
      console.warn("result: ", result);
  
        return result;
  
      },
}

export default apiSettings
