import React, { useState, useEffect } from "react";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar } from "react-modern-calendar-datepicker";
import "./Calendar.css";
import callApi from "../../api/apiService";
import { utils } from "react-modern-calendar-datepicker";
import { array } from "prop-types";
import FileCopyIcon from '@material-ui/icons/FileCopy';
import { exportDefaultSpecifier } from "@babel/types";
const CalendarDeadline = () => {
 
  var date = new Date();
  var firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
  var lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
  const [listDeadline,setListDeadline] = useState([])

  var dead ;

  const [deadline, setDeadline] = useState();
  const handleData = () => {
    callApi(
      `CreateAssigments/getDeadLineAssigment?timeStart=${first}&timeEnd=${second}`,
      "GET"
    )
      .then((res) => {
        // console.log(res.data.data)
        console.log(res);
        setDeadline(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });


  };

  const format = (temp) => {
    let s;
    let date_ob = new Date();

    // adjust 0 before single digit date
    let date = ("0" + temp.getDate()).slice(-2);

    // current month
    let month = ("0" + (temp.getMonth() + 1)).slice(-2);

    // current year
    let year = temp.getFullYear();

    s = year + "-" + month + "-" + date;
    return s;
  };

  const formatObject = () => {
    let date_ob = new Date();

    // adjust 0 before single digit date
    let date = ("" + firstDay.getDate()).slice(-2);

    // current month
    let month = ("" + (firstDay.getMonth() + 1)).slice(-2);

    // current year
    let year = firstDay.getFullYear();



    const s = {
      year: parseInt(year),
      month: parseInt(month),
      day: parseInt(date),
    };

    

    var arrayDeadline = []

        for(var key in deadline){
        if(deadline.hasOwnProperty(key)){
            console.log(`${key}`)
            arrayDeadline.push({
                year: parseInt(year),
                month: parseInt(month),
                day: parseInt(key),
                className:'orangeDay'
              })
        }
    }

    return arrayDeadline;
  };
  const first = format(firstDay);
  const second = format(lastDay);

  {
      console.log(formatObject())
  }

  const compareValue = (val) =>{
    for(var key in deadline){
        if(deadline.hasOwnProperty(key)){
            if(val===parseInt(key)){

                // console.log(deadline[val])
                return deadline[val]
            
            }
           
        }
       
    }
  }
  const defaultValue = {
    year: 2019,
    month: 3,
    day: 1,
  };
  const [selectedDay, setSelectedDay] = useState(utils().getToday());
 
  

  useEffect(() => {
    handleData();
  }, []);

  

 
  return (
      <>
    <Calendar
      value={selectedDay}
      customDaysClassName = {formatObject()}
       onChange={setSelectedDay}
      colorPrimary="#9c88ff" // added this
      calendarClassName="custom-calendar" // and this
      calendarTodayClassName="custom-today-day" // also this
    />
    {/* {
        console.log(compareValue(selectedDay.day))

        
    }
    {
      console.log(dead)
    } */}

    {

      
        compareValue(selectedDay.day)!=null && compareValue(selectedDay.day).length && compareValue(selectedDay.day).map((item)=>(

      <div className="deadline-show">
        <div className="deadline-course">{item.nameCourse}</div>
        <div className="deadline-test"><FileCopyIcon className="deadline-icon"/>{item.title}</div>
      </div>
      ))
    }

    {
      compareValue(selectedDay.day)==null && <span></span>
    }

    </>
  );
};

export default CalendarDeadline;
