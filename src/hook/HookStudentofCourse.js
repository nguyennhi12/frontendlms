import {useState, useEffect, useCallback} from 'react';
import  StudentCourse  from '../configs/StudentCourse';
export const HookStudentCourse=({status,idcourse})=>{
    
    const[students, setstudents]= useState([]);
    const[check, setcheck]=useState(false)
    const getStudentCourse = useCallback( async()=>{
        try{  
            const detail=await StudentCourse.getGetStudentCourse(status,idcourse);            
            setstudents(detail.data)    
            if(detail.success==true){
                setcheck(true)
            }        
        }catch(error){
            
        }
       
    },[])  
    useEffect(()=>{ 
        try{
            if(check==false){ 
                getStudentCourse();
            }
            
            else{
               
                   
               
            }
        }catch{

        }
        
    },[getStudentCourse, check] )     

    return {students};
}


