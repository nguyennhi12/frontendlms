import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";
  
const Footer = () => {
  return (
    <Box>
     
      <Container>
        <Row>
          <Column>
            <Heading>Về chúng tôi</Heading>
            <FooterLink href="#">Sứ mệnh</FooterLink>
            <FooterLink href="#">Nhiệm vụ</FooterLink>
           
          </Column>
          <Column>
            <Heading>Dịch vụ</Heading>
            <FooterLink href="#">Học thuật</FooterLink>
            <FooterLink href="#">Tài liệu</FooterLink>
            <FooterLink href="#">Lập trình</FooterLink>
            <FooterLink href="#">Giảng dạy</FooterLink>
          </Column>
          <Column>
            <Heading>Liên hệ</Heading>
            <FooterLink href="#">Yến Nhi</FooterLink>
            <FooterLink href="#">Nhựt Thiên</FooterLink>
            <FooterLink href="#">Đức Huy</FooterLink>
            <FooterLink href="#">Nhật Tú</FooterLink>
            <FooterLink href="#">Gia Huy</FooterLink>

          </Column>
          <Column>
            <Heading>Mạng xã hội</Heading>
            <FooterLink href="#">
              <i className="fab fa-facebook-f">
                <span style={{ marginLeft: "10px" }}>
                  Facebook
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-instagram">
                <span style={{ marginLeft: "10px" }}>
                  Instagram
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-twitter">
                <span style={{ marginLeft: "10px"}}>
                  Twitter
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-youtube">
                <span style={{ marginLeft: "10px" }}>
                  Youtube
                </span>
              </i>
            </FooterLink>
          </Column>
        </Row>
      </Container>
    </Box>
  );
};
export default Footer;