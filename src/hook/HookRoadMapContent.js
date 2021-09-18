import {useState, useEffect, useCallback} from 'react';
import  Assignment  from "../configs/Course";

export const HookRoadMapContent=({idroadmapcontent})=>{ 
     
    const [results, setresult]=useState([]); 
    const[check, setcheck]=useState(false)
    const fetchRoadmap = useCallback( async()=>{
        try{  
            const detail=await Assignment.getAssigment(idroadmapcontent);            
            setresult(detail.data); 
            if(detail.success==true) {
                setcheck(true)
            }
        }catch(error){
           
        }
       
    },[idroadmapcontent])  
    useEffect(()=>{ 
        try{
            if(( check==false)){ 
                fetchRoadmap();
                
            }        
            else{   
                
               
            }
        }catch{

        }
        
    },[check,fetchRoadmap, idroadmapcontent] )
    return {results};
}


