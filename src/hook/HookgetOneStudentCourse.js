import {useState, useEffect, useCallback} from 'react';
import  StudentCourse  from "../configs/StudentCourse";
export const HookgetOneStudentCourse=({student})=>{
    const[assigment, setassignment]= useState({})
    const[check, setcheck]=useState(false)
    const [ submited, setsubmited]=useState(false)
    const getUser = useCallback( async(student)=>{  
        console.log(student)   
        try{            
            const detail=await StudentCourse.getOneStudentScore(student);   
            setcheck(true) 
            setassignment(detail.data)       
            if(detail.success===true){
                setsubmited(true);
            }else{
                setsubmited(false);
            }
            
        }catch(error){
            console.log(error)
        }
       
    },[])   
    useEffect(()=>{ 
        console.log(check)
        try{
            if(check===false){ 
                console.log(student)
                getUser(student);
                
            }            
            else{
            }
        }catch{
            
        }
        
    },[check, getUser, submited] )  
    
    useEffect(()=>{ 
        console.log(student)
        setcheck(false)
        
    },[student.positionass] )  

    return {submited, assigment};
}


