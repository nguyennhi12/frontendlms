import { API_URL, Course, StudentCourses, CreateAssigments, RoadMapContents, EveluateCourse } from "./config";
import {User, Instructor} from './User'
const apiSettings = {
    getDetailCourses: async () => {
        const token =User.token;
        console.log(token)
        const endpoint = `${API_URL}${Course}/getDetailCourse/abec2983-de4a-426c-82bb-603de47c8832`;
        const result = await( await fetch(endpoint,
            {
                method:'GET',                
                headers:{                                  
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            })).json(); 
            console.log(result)            
        return result;
      },

      getRoadmapContents: async (idroadmap) => {
        const token =User.token;
        const endpoint = `${API_URL}${RoadMapContents}/getAllRoadMapContentsOfRM/${idroadmap}`;
        const result = await( await fetch(endpoint,
            {
                method:'GET',    
                headers:{                                  
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                    'Authorization': `Bearer ${token}`
                }         
               
            })).json();        
        console.log(result)
        return result;
      },

      getAssigment: async (idRoadMapContent) => {
        const token =User.token;
        const endpoint = `${API_URL}${RoadMapContents}/getRoadMapContent?id=${idRoadMapContent}`;
        const result = await( await fetch(endpoint,
            {
                method:'GET',   
                headers:{                                  
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                    'Authorization': `Bearer ${token}`
                }         
                
            })).json();        
        
        return result;
      },

      getInfoCourses: async (id) => {        
        const endpoint = `${API_URL}${Course}/getInformationCourse/${id}`;
        const result = await( await fetch(endpoint,
            {
                method:'GET',                
                headers:{                                  
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                    
                }
            })).json();             
        return result;
      },
      sigup_course: async (id) => {
        const token =User.token;  
        const idCourse={idCourse: id}   
        console.warn(JSON.stringify(idCourse));
        const endpoint = `${API_URL}${StudentCourses}/createStudentCourses`;
        const result = await( await fetch(endpoint,
            {
                method:'POST',
                body: JSON.stringify(idCourse),
                headers:{
                    "Content-Type":"application/json",
                    "Accept":"application/json",
                    'Authorization': `Bearer ${token}`
                }
            })).json();        
        console.warn("result: ", result);
        return result;
      },
      create_RoadmapContent: async (roadmapcontent) => {
        const token =Instructor.token;      
        console.log(JSON.stringify(roadmapcontent))
        const endpoint = `${API_URL}${RoadMapContents}/createRoadMapContents`;
        const result = await( await fetch(endpoint,
            {
                method:'POST',
                body: JSON.stringify(roadmapcontent),
                headers:{
                    "Content-Type":"application/json",
                    "Accept":"application/json",
                    'Authorization': `Bearer ${token}`
                }
            })).json();        
        console.warn("result: ", result);
        return result;
      },
      delete_RoadmapContents: async (id) => {
        const token =Instructor.token;      
        console.log(JSON.stringify(id))
        const endpoint = `${API_URL}${RoadMapContents}/deleteRoadMapContents/${id}`;
        const result = await( await fetch(endpoint,
            {
                method:'DELETE',                
                headers:{
                    "Content-Type":"application/json",
                    "Accept":"application/json",
                    'Authorization': `Bearer ${token}`
                }
            })).json();        
        console.warn("result: ", result);
        return result;
      },
      getEveluateCourse: async (id_course) => {
        const token =User.token;       
        
        const endpoint = `${API_URL}${EveluateCourse}/getAllEveluateCourse/${id_course}`;
        const result = await( await fetch(endpoint,
            {
                method:'GET',    
                headers:{                                  
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                    'Authorization': `Bearer ${token}`
                }         
               
            })).json();  
        return result;
      },
      getAllCourse: async () => {
        const token =User.token;
        const endpoint = `${API_URL}${Course}/searchCourse?searchCourse=&pageSize=8&pageNumber=1`;
        const result = await( await fetch(endpoint,
            {
                method:'GET',    
                headers:{                                  
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                    'Authorization': `Bearer ${token}`
                }         
               
            })).json();        
        console.log(result)
        return result;
      },
      
}

export default apiSettings
