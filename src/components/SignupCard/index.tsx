import React, { useEffect, useState } from "react";
import {
  SignUpBloc,
  UserNameIndication,
  UserNameInput,
  EnterButton,
  Welcomeh2,
} from "./styles";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userName } from "../../actions/actions";

export interface Username {
  user: string;
}

const InitialState = {
  user: "",
};

function SignUpCard() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [user, setUser] = useState<Username>({ ...InitialState });

  const SignUpForm = (username) => {
    dispatch(userName(username));
    navigate("/network");
  };

  useEffect(() => {
    dispatch(userName(user));
  }, []);

  return (
    <SignUpBloc>
      <Welcomeh2>Welcome to CodeLeap network!</Welcomeh2>
      <UserNameInput
        value={user.user}
        type="text"
        required
        placeholder="John doe"
        onChange={(e) => setUser({ ...user, user: e.target.value })}
      ></UserNameInput>
      {user.user.length > 0 ? (
        <EnterButton onClick={() => SignUpForm(user)}>ENTER</EnterButton>
      ) : (
        <>
          <UserNameIndication>Please enter your username</UserNameIndication>
          <EnterButton
            title="Enter your username to enter"
            onClick={() => navigate("/sign")}
          >
            ENTER
          </EnterButton>
        </>
      )}
    </SignUpBloc>
  );
}

export default SignUpCard;
