import { auto } from "async";
import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import callApi from "../../../api/apiService";
import Notification from "../../Notification/Notification";

const colors = {
  orange: "#FFBA5A",
  grey: "#a9a9a9",
};

function StudentRating(props) {
  const stars = Array(5).fill(0);
  const [count, setCount] = useState();
  const [currentValue, setCurrentValue] = useState(0);
  const [comment,setComment] = useState()
  const [hoverValue, setHoverValue] = useState(undefined);
  const [notify, setNotify] = useState({ isOpen: false, message: "", type: "" });
  const buttonSubmitVoting = (e) => {
    e.preventDefault();
    const data = {
      "idCourse":props.id,
      "comment":comment,
      "point":count
    }
    callApi(
      `EveluateCourse/createEveluateCourse`,
      "POST",data
    )
      .then((res) => {
        console.log(res);
       
          setNotify({isOpen:true,message:'Bạn đã hoàn thành đánh giá',type:'success'})
          window.location.reload()
        
      })
      .catch((err) => {
        if(err.response.data.message==="You Eveluated Course"){
          setNotify({isOpen:true,message:'Bạn đã đánh giá rồi',type:'warning'})
        }
        console.log(err);
      });
  };
  const handleClick = (value) => {
    setCurrentValue(value);
  };

  const handleMouseOver = (value) => {
    setHoverValue(value);
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined);
  };

  return (
    <>
      <div style={styles.wrapper}>
        <div style={styles.rating}>
          <div style={styles.feedback}>
            <div>
              <h1>{props.name}</h1>

              <div>Khóa học này đánh giá mấy sao</div>
            </div>

            <div style={styles.wrap}>
              <div style={styles.stars}>
                {stars.map((_, index) => {
                  return (
                    <FaStar
                      key={index}
                      size={30}
                      style={{
                        marginRight: 10,
                        cursor: "pointer",
                      }}
                      color={
                        (hoverValue || currentValue) > index
                          ? colors.orange
                          : colors.grey
                      }
                      onClick={() => {
                        handleClick(index + 1);
                        setCount(index + 1);
                      }}
                      onMouseOver={() => handleMouseOver(index + 1)}
                      onMouseLeave={handleMouseLeave}
                    />
                  );
                })}
              </div>
              <div>Nhận xét của bạn khóa học này như thế nào ?</div>
              <textarea placeholder="Nhận xét" style={styles.textarea} onChange={(e)=>{setComment(e.target.value)}}/>
              <div style={styles.listButton}>
                <button style={styles.buttonvote} onClick={buttonSubmitVoting}>Đánh giá</button>
                <button style={styles.buttonquit} onClick={props.handleClose}>
                  Hủy
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Notification notify={notify} setNotify={setNotify} />
    </>
  );
}

const styles = {
  wrapper: {
    position: "fixed",
    background: "#00000050",
    width: "100%",
    height: "100vh",
    top: 0,
    left: 0,
    zIndex: 100,
  },
  rating: {
    width: 800,
    height: 800,
   
    marginLeft: "-200px",
  
    
  },
  feedback: {
    display: "inline-block",
    marginLeft: 700,
    padding: "30px",
    marginTop: 100,
    backgroundColor:'#fff',
    boxShadow:'rgba(0, 0, 0, 0.35) 0px 5px 15px',
    borderRadius: "10px",
  },
  wrap: {
    display: "flex",
    flexDirection: "column",
  },
  textarea: {
    border: "1px solid #a9a9a9",
    borderRadius: 10,
    width: 560,
    padding: 10,
    margin: "20px 0 ",
    minHeight: 60,
  },
  listButton: {
    display: "flex",
    justifyContent: "space-around",
  },
  buttonvote: {
    color: "#fff",
    border: "1px solid #a9a9a9",
    borderRadius: 5,
    backgroundColor: "green",
    width: 100,
    padding: 10,
  },
  buttonquit: {
    color: "#fff",
    border: "1px solid #a9a9a9",
    borderRadius: 5,
    backgroundColor: "red",
    width: 100,
    padding: 10,
  },
};

export default StudentRating;
