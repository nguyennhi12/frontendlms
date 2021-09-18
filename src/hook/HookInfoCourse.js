import {useState, useEffect, useCallback} from 'react';


import  RoadMaps  from "../configs/Course";
export const HookInfoCourse=({id})=>{
    const [course, set_course]= useState([])
    const [student, set_student]=useState([])
    const [eveluate, set_eveluate]=useState([])
    const [enable, set_enable]= useState(true)
    const[teacher, set_teacher]=useState({})
    const[check, setcheck]=useState(false)
    const getdatainfocourse = useCallback( async()=>{
        try{
            console.log(id)
            const info_course=await RoadMaps.getInfoCourses(id); 
            if(info_course.success==true){
                setcheck(true)
                set_course(info_course.course)
                set_student(info_course.student)
                console.log(info_course)
                set_eveluate(info_course.eveluate) 
                set_teacher(info_course.course.teacher)
            } 
           

        }catch(error){
           
        }
       
    },[id])
    useEffect(()=>{
        async function fetchdata(){
            try{
                if(check==false){
                    await getdatainfocourse();   
                             
                }
                else{  
                    if(course.status==="DELETED"){
                        set_enable(false)
                    }                 
                                
                
                }
            }catch{

            }
           
        }
        fetchdata()
    }, [getdatainfocourse,check])

    const [eveluateCourse, seteveluateCourse]= useState([])
    const[checkeve, setcheckeve]=useState(false)
    const getAllEveluateCourse = useCallback( async()=>{
        try{            
            const AllEveluateCourse=await RoadMaps.getEveluateCourse(id);  
            seteveluateCourse(AllEveluateCourse.data)
            if(AllEveluateCourse.success==true){
                setcheckeve(true)
            }
        }catch(error){
           
        }
       
    },[id])  
    useEffect(()=>{        
        async function fetchdata(){
            try{
                if(checkeve==false){
                    await getAllEveluateCourse();   
                      
                }
                else{  
                    console.log(eveluateCourse)       
                                
                
                }

            }catch{
                
            }
           
        }
        fetchdata()
    }, [checkeve, getAllEveluateCourse])
    return { course, enable, eveluate, student, teacher, eveluateCourse};
}


