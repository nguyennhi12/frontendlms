import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, NavDropdown, Nav } from "react-bootstrap";
import SortIcon from "@material-ui/icons/Sort";
import Filter1Icon from "@material-ui/icons/Filter1";
import { HookInfoCourse } from "../../../../hook/HookInfoCourse";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { useHistory } from "react-router-dom";
const HeaderListMentor = ({ id }) => {
  console.log(id);
  const { course } = HookInfoCourse({ id });
  const history = useHistory();
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="white"
      style={{ borderBlock: "none" }}
    >
      <span
        onClick={() => {
          history.goBack();
        }}
        style={{
          marginLeft: 0,
          marginTop: '-10px',
          display: "block",
          textDecoration: "none",
          color: "#98a0a5",
          cursor: "pointer",
          width: 150,
          height: 60,
          padding: 10,
        }}
      >
        <ArrowBackIosIcon style={{ fontSize: "20px" }} />
        Quay lại
      </span>
      <Container>
        <Navbar.Brand href="#home">Khóa học : {course.name}</Navbar.Brand>
        <Navbar.Collapse>
          <Nav
            class="navbar-collapse collapse w-100 order-3 dual-collapse2 ml-auto text-dark"
            style={{ width: "100%", color: "back" }}
          ></Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default HeaderListMentor;
