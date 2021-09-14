import {useState, useEffect, useCallback} from 'react';
import  Authentication  from "../configs/Authentication";
import  Course  from '../configs/Course';
export const HookgetUser=({idCourse})=>{
    
    const [user, setuser]=useState([]);
    const [ error, seterror]=useState(false)
    const getUser = useCallback( async()=>{
        try{            
            const detail=await Authentication.getUser(); 
            
            if(detail==null){
                seterror(true);
            }else{
                seterror(false);
                setuser(detail.data)
            }
            
        }catch(error){
            seterror(true);
        }
       
    },[])      
    
    useEffect(()=>{ 
        try{
            if(user.length===0){ 
                getUser();
            }
            
            else{
                console.log(error)
                   
               
            }
        }catch{
            
        }
        
    },[user, getUser] )  


    return {user, error};
}


