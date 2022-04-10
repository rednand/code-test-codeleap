import styled from "styled-components";

export const SignUpBloc = styled.div`
  font-family: "Roboto";
  width: 30%;
  margin: auto;
  background: #ffffff;
  box-sizing: border-box;
  padding: 1% 2%;

  @media (max-width: 900px) {
    width: 50%;
  }
  @media (max-width: 400px) {
    width: 80%;
  }
`;

export const Welcomeh2 = styled.h2`
  font-weight: 700;
  font-size: 22px;
  line-height: 26px;
  color: #000000;
  margin: 2% 0 5%;
`;

export const UserNameIndication = styled.p`
  margin: 3% 0 2%;
  text-align: start;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #000000;
`;

export const UserNameInput = styled.input`
  background: #ffffff;
  border: 1px solid #777777;
  box-sizing: border-box;
  border-radius: 4px;
  width: 100%;
  height: 28px;
  margin: auto;
`;

export const EnterButton = styled.button`
  margin: 5% 0% 2% 75%;
  width: 25%;
  height: 33px;
  background: #000000;
  color: white;
  display: block;
  cursor: pointer;
  border: none;

  @media (max-width: 900px) {
    margin: 5% 0% 2% 70%;
    width: 30%;
  }

  @media (max-width: 400px) {
    margin: 5% 0% 2% 60%;
    width: 40%;
  }
`;
