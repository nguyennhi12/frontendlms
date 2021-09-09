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
        const token =User.token;
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
       const token = Teacher.token;
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
       console.warn(status)
      const token = Teacher.token;
      const endpoint = `${API_URL}${StudentCourses}/getListStudentCourses/ALL?pageNumber=1&pageSize=3&idCourse=abec2983-de4a-426c-82bb-603de47c8832`;
      const result = await( await fetch(endpoint,
          {
              method:'GET',
              
              
              headers:{
                  "Content-Type":"application/json",
                  "Accept":"application/json",
                  "Authorization": ` Bearer ${token}`,
              }
          })).json();        
   //    console.warn("result: ", result);
      return result;

    },
}

export default apiSettings
