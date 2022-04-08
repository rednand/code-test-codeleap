import styled from "styled-components";

export const Card = styled.div`
  background-color: #ffffff;
  width: 60%;
  margin: 2% auto;
  font-family: "Roboto";
  box-sizing: border-box;
  border: 3px solid #000000;
`;

export const CardHeaderIcons = styled.h2`
  background-color: #000000;
  display: flex;
  justify-content: space-between;
  width: 100%;
  color: #ffffff;
  .iconsSpan {
    display: inline-flex;
    padding: 2% 4%;
  }
  .icons {
    margin-right: 15%;
    display: flex;
    border: none;
    cursor: pointer;
    color: #ffffff;
    background-color: #000000;
  }
`;

export const CardHeader = styled.h2`
  padding: 2% 4%;
  font-weight: 700;
  font-size: 22px;
  line-height: 26px;
`;

export const CardBody = styled.div`
  padding: 2%;
  color: #000000;
`;

export const CardNameDate = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;
  text-align: right;
`;

export const CardName = styled.p`
  padding: 2%;
  color: #777777;
`;

export const CardContent = styled.p`
  padding: 2%;
  color: #000000;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
`;
