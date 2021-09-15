import { API_URL,  StudentCourses, StudentScores} from "./config";
import {User, Instructor, ClassAdmin, Teacher} from './User'
const apiSettings = {   
      getGetStudentCourse: async (status,idcourse) => {
        const token =Instructor.token;
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
        console.log(result)
        return result;
      },      
      activateStudentCourses: async (student) => {
        const token =ClassAdmin.token;      
        console.log(JSON.stringify(student))
        const endpoint = `${API_URL}${StudentCourses}/activateStudentCourses`;
        const result = await( await fetch(endpoint,
            {
                method:'PUT',
                body: JSON.stringify(student),
                headers:{
                    "Content-Type":"application/json",
                    "Accept":"application/json",
                    'Authorization': `Bearer ${token}`
                }
            })).json(); 
        return result;
      },
      createStudentScore: async (student) => {
        const token =User.token;      
        console.log(student.get("UrlSubmit"),student.get("idAssignment"),student.get("idCourse"))
        const endpoint = `${API_URL}${StudentScores}/createStudentScores`;
        const result = await( await fetch(endpoint,
            {
                method:'POST',
                body:student,  
                headers:{                    
                    "Accept":"*/*",                    
                    "Authorization": ` Bearer ${token}`,                    
                    'Access-Control-Allow-Credentials':'true'
                }
            })).json(); 
        return result;
      },

      getOneStudentScore: async (student) => {
        const token =User.token;             
        const endpoint = `${API_URL}${StudentScores}/getStudentScore?idCourse=${student.idcourse}&idStudent=${student.idstudent}&idAssignment=${student.idassignment}`;
        const result = await( await fetch(endpoint,
            {
                method:'GET',               
                headers:{                    
                    "Content-Type":"application/json",
                    "Accept":"application/json",
                    'Authorization': `Bearer ${token}`
                }
            })).json(); 
        return result;
      },
      updateStudentScore: async (student) => {
        const token =User.token;      
        console.log(student.get("Score"),student.get("idStudent"),student.get("idAssignment"),student.get("idCourse"))
        const endpoint = `${API_URL}${StudentScores}/updateStudentScores`;
        const result = await( await fetch(endpoint,
            {
                method:'PUT',
                body:student,  
                headers:{         
                    "Accept":"*/*",                    
                    "Authorization": ` Bearer ${token}`,                    
                    "Access-Control-Allow-Origin" : "*", 
                    "Access-Control-Allow-Credentials" : true 
                }
            })).json(); 
        return result;
      },
     getStudentScoresofCourse: async (idCourse) => {
        const token =Teacher.token;             
        const endpoint = `${API_URL}${StudentScores}/getStudentScoreOfCourses?idCourse=${idCourse}&pageNumber=1&pageSize=3`;
        const result = await( await fetch(endpoint,
            {
                method:'GET',               
                headers:{                    
                    "Content-Type":"application/json",
                    "Accept":"application/json",
                    'Authorization': `Bearer ${token}`
                }
            })).json(); 
        return result;
      },
      
}

export default apiSettings
