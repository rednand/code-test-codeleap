import styled from "styled-components";

export const Card = styled.div`
  background-color: #ffffff;
  width: 60%;
  margin: 2% auto;
  font-family: "Roboto";
  box-sizing: border-box;
  border: 3px solid #000000;

  @media (max-width: 900px) {
    width: 80%;
  }
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
  .contentModal {
    margin: auto;
    width: 100%;
  }
  .inputModal {
    display: block;
  }
  .title {
    width: 100%;
    color: #000000;
  }
  .input {
    width: 98%;
    margin: 2% 0;
  }
  .save {
    background-color: #000000;
    border: none;
    color: #ffffff;
    width: 15%;
    margin: 1% 85%;
    justify-content: end;
    align-content: flex-end;
    height: 1.8rem;

    @media (max-width: 900px) {
      width: 25%;
      margin: 1% 75%;
    }
  }
`;

export const CardHeader = styled.h2`
  padding: 2% 4%;
  font-weight: 700;
  font-size: 22px;
  line-height: 26px;
  word-wrap: break-word;
  width: 50%;

  @media (max-width: 900px) {
    font-size: 15px;
  }
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

  @media (max-width: 900px) {
    font-size: 15px;
  }
`;

export const CardName = styled.p`
  padding: 2%;
  color: #777777;
  word-wrap: break-word;
`;

export const CardContent = styled.p`
  padding: 2%;
  color: #000000;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  word-wrap: break-word;

  @media (max-width: 900px) {
    font-size: 15px;
  }
`;

export const CardModalFooterButton = styled.button`
  background-color: #ffffff;
  margin: 5% 2% -1%;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  border: 1px solid #000000;
  box-sizing: border-box;
  font-size: 16px;
  line-height: 19px;
  height: 1.5rem;
  color: #000000;
  width: 20%;
  cursor: pointer;

  @media (max-width: 900px) {
    width: 80%;
  }
`;
