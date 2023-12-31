import styled from "styled-components";

export const Child = styled.img`
  position: relative;
  width: 608px;
  height: 310px;
  z-index: 0;
`;
export const Div1 = styled.div`
margin: 0 !important;
display: flex;
align-items: flex-start;
z-index: 2;
color: #000000;
font-family: "Roboto-SemiBold", Helvetica;
font-size: 25px;
font-weight: 600;
height: 59px;
left: 70px;
letter-spacing: 0.1px;
line-height: normal;
position: absolute;
top: 140px;
width: 450px;
`;
export const Div2 = styled.div`
  margin: 0 !important;
  display: flex;
  align-items: flex-start;
  z-index: 2;
  color: #000000;
  font-family: "Roboto-SemiBold", Helvetica;
  font-size: 25px;
  font-weight: 600;
  height: 59px;
  left: 130px;
  letter-spacing: 0.1px;
  line-height: normal;
  position:absolute;
  top: 200px;
  width: 400px;
`;
export const Div3 = styled.div`
  position: absolute;
  margin: 0 !important;
  width: 67.88%;
  top: 17.28%;
  left: 18.5%;
  text-align: left;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  z-index: 3;
  color: #000000;
  font-family: "Roboto-SemiBold", Helvetica;
  font-size: 30px;
  font-weight: 600;
  height: 129px;
  letter-spacing: 0.1px;
  line-height: normal;
  text-align: center;
  width: 407px;
`;
export const X = styled.button`
  cursor: pointer;
  border: none;
  padding: 0;
  background-color: transparent;
  position: absolute;
  margin: 0 !important;
  height: 17.86%;
  top: 3.08%;
  left: 93.3%;
  text-align: left;
  display: inline-block;
  z-index: 4;
  color: #bcc1c9;
  font-family: "Noto Sans KR-Medium", Helvetica;
  font-size: 24px;
  font-weight: 500;
  letter-spacing: 0;
  line-height: normal;
  width: 18px;
`;
export const DivRoot = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  max-width: 100%;
  max-height: 100%;
  overflow: auto;
  text-align: left;
  font-size: var(--font-size-11xl);
  color: var(--color-black);
  font-family: var(--font-roboto);
  
`;