import {useState, useEffect, useCallback} from 'react';
import  Course  from "../configs/Course";

export const HookAllCourse=()=>{ 
    const [results, setresult]=useState([]);
    const[check, setcheck]=useState(false)    
    const fetchRoadmap = useCallback( async()=>{
        try{  
            console.warn(results)
            const detail=await Course.getAllCourse();    
            if(detail.success==true){
                setcheck(true);
            }        
            setresult(detail.data);            
              
        }catch(error){
            console.warn(error)
        }
       
    },[results])        
    
    useEffect(()=>{ 
        try{
            if((check==false)){ 
                fetchRoadmap();
                console.warn(results)
            }        
            else{   
                console.warn(results)
               
                    
                   
               
            }
        }catch(error){
            console.warn(error)
        }
        
    },[check,fetchRoadmap] )
    
   

    
    
    return {results};
}


