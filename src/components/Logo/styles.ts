import styled from "styled-components";

export const LogoImg = styled.div`
  text-align: center;
  background-color: #ffffff;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    width: 30%;
    animation: zoom-in 2s ease;
    @keyframes zoom-in {
      0% {
        transform: scale(0.1, 0.1);
      }
      100% {
        transform: scale(1, 1);
      }
    }
  }
`;

export const Login = styled.button`
  width: 10%;
  margin: 2%;
  color: #ffffff;
  background-color: #000000;
  border: none;
  height: 2rem;
  align-items: center;
  cursor: pointer;
  animation: fading 5s ease;

  @keyframes fading {
    0% {
      background-color: #ffffff;
    }
    100% {
      background-color: #000000;
    }
  }
`;
