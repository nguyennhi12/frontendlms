import { API_URL,MentorCourses } from "./config";
import {Teacher, ClassAdmin} from './User'
const apiSettings = {   
      create_MentorCourse: async (mentor) => {
        const token =localStorage.getItem("accessToken");
        console.log(JSON.stringify(mentor))
        const endpoint = `${API_URL}${MentorCourses}/createMentorCourses`;
        const result = await( await fetch(endpoint,
            {
                method:'POST',
                body: JSON.stringify(mentor),
                headers:{
                    "Content-Type":"application/json",
                    "Accept":"application/json",
                    'Authorization': `Bearer ${token}`
                }
            })).json(); 
        console.log(result)
        return result;
      },
      getlistMentorCourse: async (status) => {
        const token = localStorage.getItem("accessToken");
        console.log(status);
        const endpoint = `${API_URL}${MentorCourses}/getListMentor/?idCourse=${status.idCourse}&status=${status.Status}`;
        const result = await( await fetch(endpoint,
            {
               
                headers:{
                    "Content-Type":"application/json",
                    "Accept":"application/json",
                    "Authorization": ` Bearer ${token}`,
                    
                }
            })).json();        
        console.warn("result: ", result);
  
        return result;
  
      },
      activeMentorCourse: async (mentor) => {
        const token =localStorage.getItem("accessToken");     
        console.log(JSON.stringify(mentor))
        const endpoint = `${API_URL}${MentorCourses}/activateMentorCourses`;
        const result = await( await fetch(endpoint,
            {
                method:'PUT',
                body: JSON.stringify(mentor),
                headers:{
                    "Content-Type":"application/json",
                    "Accept":"application/json",
                    'Authorization': `Bearer ${token}`
                }
            })).json(); 
        console.log(result)
        return result;
      },
      cancelMentorCourses: async (mentor) => {
        const token =localStorage.getItem("accessToken");      
        console.log(JSON.stringify(mentor))
        const endpoint = `${API_URL}${MentorCourses}/cancelMentorCourses`;
        const result = await( await fetch(endpoint,
            {
                method:'DELETE',
                body: JSON.stringify(mentor),
                headers:{
                    "Content-Type":"application/json",
                    "Accept":"application/json",
                    'Authorization': `Bearer ${token}`
                }
            })).json(); 
        console.log(result)
        return result;
      },
  
      
}

export default apiSettings
