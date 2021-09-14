import {useState, useEffect, useCallback} from 'react';
import  Course  from '../configs/Course';
export const HookStudentCourse=({idCourse,idStudent})=>{
    
    const[checksignup, setchecksignup]= useState(false);
    const getStudentCourse = useCallback( async()=>{
        try{        
            console.log(idCourse) 
            console.log(idStudent)    
            const detail=await Course.getStudentCourse(idCourse,idStudent);            
            if(detail.statusCode==400){
                setchecksignup(true);
            }else{
                setchecksignup(false);
                
            }
            
        }catch(error){
            
        }
       
    },[])  
    useEffect(()=>{ 
        try{
            if(checksignup===false){ 
                getStudentCourse();
            }
            
            else{
                console.log(checksignup)
                   
               
            }
        }catch{

        }
        
    },[getStudentCourse, checksignup] )     

    return {checksignup};
}


