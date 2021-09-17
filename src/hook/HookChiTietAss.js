import {useState, useEffect, useCallback} from 'react';
import  Assignment  from "../configs/Course";

export const HookChiTietAss=({idroadmapcontent,id_ass})=>{
    console.log("idass:"+id_ass)
    var initposition = -1
    var initpositionass = 0
    const [results, setresult]=useState([]);
    const [position, setposition]= useState(initposition)    
    const [assignment, setassignment] = useState({})
    const [positionass, setpositionass]= useState(initpositionass)
    const[check, setcheck]=useState(false)
    const fetchRoadmap = useCallback( async()=>{
        try{            
            setposition(0)
            const detail=await Assignment.getAssigment(idroadmapcontent);    
            if(detail.success==true){
                setcheck(true)
            }        
            setresult(detail.data);            
            setposition(0)            
        }catch(error){
           
        }
       
    },[results,idroadmapcontent])        
    
    
    useEffect(()=>{ 
        try{
            if((position<0 || check==false)){ 
                fetchRoadmap();
            }        
            else{   
                console.warn(results)
                results.map(result=>(
                    result.id==id_ass?setassignment(result):console.log(id_ass)
                ))
                    
                   
               
            }
        }catch{

        }
        
    },[position,check,fetchRoadmap, idroadmapcontent] )
    
    
    
    useEffect(()=>{ 
       setposition(initposition)
       setpositionass(0)
       
       
    },[idroadmapcontent] )

    
    const[chitietass, setchitietass]= useState({});
    useEffect(()=>{ 
        try{            
            console.warn(results.createAssignment)
            results.createAssignment.map(result=>(
            result.id==id_ass?setchitietass(result):console.log(id_ass)
            )) 
        }catch{

        }
        
    },[id_ass, results] )
    
    return {assignment, chitietass};
}


