import {useState, useEffect, useCallback} from 'react';


import  RoadMaps  from "../configs/Course";
export const HookInfoCourse=({id})=>{
    


    const [course, set_course]= useState([])
    const [student, set_student]=useState([])
    const [eveluate, set_eveluate]=useState([])
    const [enable, set_enable]= useState(true)
    const[teacher, set_teacher]=useState({})
    const getdatainfocourse = useCallback( async()=>{
        try{
            console.log(id)
            const info_course=await RoadMaps.getInfoCourses(id);  
            set_course(info_course.course)
            set_student(info_course.student)
            console.log(info_course)
            set_eveluate(info_course.eveluate) 
            set_teacher(info_course.course.teacher)
        }catch(error){
           
        }
       
    },[id])        
    
    
    useEffect(()=>{
        async function fetchdata(){
            try{
                if(course.length===0){
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
    }, [getdatainfocourse,course,student,eveluate, enable,teacher])

    const [eveluateCourse, seteveluateCourse]= useState([])
    const getAllEveluateCourse = useCallback( async()=>{
        try{
            const AllEveluateCourse=await RoadMaps.getEveluateCourse(id);  
            seteveluateCourse(AllEveluateCourse.data)
        }catch(error){
           
        }
       
    },[id])        
    
    
    useEffect(()=>{        
        async function fetchdata(){
            try{
                if(eveluateCourse.length===0){
                    await getAllEveluateCourse();   
                             
                }
                else{  
                    console.log(eveluateCourse)       
                                
                
                }

            }catch{
                
            }
           
        }
        fetchdata()
    }, [eveluateCourse, getAllEveluateCourse])
    return { course, enable, eveluate, student, teacher, eveluateCourse};
}


