import { API_URL, Course, StudentCourses, RoadMapContents, EveluateCourse, RoadMaps, CreateAssigments } from "./config";
import {User, Instructor, ClassAdmin, Teacher} from './User'
const apiSettings = {
    getDetailCourses: async (idCourse) => {
        const token =localStorage.getItem("accessToken");
        const endpoint = `${API_URL}${Course}/getDetailCourse/${idCourse}`;
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

      getRoadmapContents: async (idroadmap) => {
        const token =localStorage.getItem("accessToken");
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
        return result;
      },

      getAssigment: async (idRoadMapContent) => {
        const token =localStorage.getItem("accessToken");
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
        const token =localStorage.getItem("accessToken");  
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
        return result;
      },
      create_RoadmapContent: async (roadmapcontent) => {
        const token =localStorage.getItem("accessToken");     
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
        return result;
      },
      edit_RoadmapContent: async (roadmapcontent,idroadmapcontent) => {
        const token =localStorage.getItem("accessToken");      
        console.log(JSON.stringify(roadmapcontent))
        const endpoint = `${API_URL}${RoadMapContents}/updateRoadMapContents/${idroadmapcontent}`;
        const result = await( await fetch(endpoint,
            {
                method:'PUT',
                body: JSON.stringify(roadmapcontent),
                headers:{
                    "Content-Type":"application/json",
                    "Accept":"application/json",
                    'Authorization': `Bearer ${token}`
                }
            })).json(); 
        return result;
      },
      delete_RoadmapContents: async (id) => {
        const token =localStorage.getItem("accessToken");
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
        return result;
      },
      getEveluateCourse: async (id_course) => {
        const token =localStorage.getItem("accessToken");       
        
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
        const token =localStorage.getItem("accessToken");
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
        return result;
      },
      getListStudentCourse: async (status,idcourse) => {
        const token =localStorage.getItem("accessToken");
        const endpoint = `${API_URL}${StudentCourses}/getListStudentCourses/${status}?pageNumber=1&pageSize=3&idCourse=${idcourse}`;
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
     getOneRoadMap: async (idroadmap) => {
        const token =localStorage.getItem("accessToken");
        const endpoint = `${API_URL}${RoadMaps}/getRoadMap/${idroadmap}`;
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
      listStudentCourse: async (status) => {
        const token = localStorage.getItem("accessToken");
        console.log(status);
        const endpoint = `${API_URL}${StudentCourses}/getListStudentCourses/${status.status}?pageNumber=1&pageSize=3&idCourse=${status.idCourse}`;
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
      edit_Roadmap: async (roadmap) => {
        const token =localStorage.getItem("accessToken");   
        
        const endpoint = `${API_URL}${RoadMaps}/updateRoadMaps/${roadmap.idroamap}`;
        const result = await( await fetch(endpoint,
            {
                method:'PUT',
                body: JSON.stringify(roadmap),
                headers:{
                    "Content-Type":"application/json",
                    "Accept":"application/json",
                    'Authorization': `Bearer ${token}`
                }
            })).json(); 
        return result;
      },
      delete_Roadmaps: async (id) => {
        const token =localStorage.getItem("accessToken");
        const endpoint = `${API_URL}${RoadMaps}/deleteRoadMaps/${id}`;
        const result = await( await fetch(endpoint,
            {
                method:'DELETE',                
                headers:{
                    "Content-Type":"application/json",
                    "Accept":"application/json",
                    'Authorization': `Bearer ${token}`
                }
            })).json();  
        return result;
      },
      create_Roadmap: async (roadmap) => {
        const token =localStorage.getItem("accessToken");
        console.log(JSON.stringify(roadmap))
        const endpoint = `${API_URL}${RoadMaps}/createRoadMaps`;
        const result = await( await fetch(endpoint,
            {
                method:'POST',
                body: JSON.stringify(roadmap),
                headers:{
                    "Content-Type":"application/json",
                    "Accept":"application/json",
                    'Authorization': `Bearer ${token}`
                }
            })).json(); 
        return result;
      },
      getListAssignment: async (idroadmapcontent) => {
        const token =localStorage.getItem("accessToken");
        const endpoint = `${API_URL}${CreateAssigments}/getAssigments/${idroadmapcontent}`;
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
      delete_Assignments: async (id) => {
        const token =localStorage.getItem("accessToken");
        const endpoint = `${API_URL}${CreateAssigments}/deleteAssigments/${id}`;
        const result = await( await fetch(endpoint,
            {
                method:'DELETE',                
                headers:{
                    "Content-Type":"application/json",
                    "Accept":"application/json",
                    'Authorization': `Bearer ${token}`
                }
            })).json();  
        return result;
      },
      updateAssignment: async (assignmnet, idassignment) => {
        console.log(idassignment)
        const token =localStorage.getItem("accessToken");     
        //console.log(student.get("Score"),student.get("idStudent"),student.get("idAssignment"),student.get("idCourse"))
        const endpoint = `${API_URL}${CreateAssigments}/updateAssigments/${idassignment}`;
        const result = await( await fetch(endpoint,
            {
                method:'PUT',
                body:assignmnet,  
                headers:{         
                    "Accept":"*/*",                    
                    "Authorization": ` Bearer ${token}`,                    
                    "Access-Control-Allow-Origin" : "*", 
                    "Access-Control-Allow-Credentials" : true 
                }
            })).json();
        console.log(result)
        return result;
      },
      
}

export default apiSettings
