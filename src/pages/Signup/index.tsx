import React from "react";
import SignUpCard from "../../components/SignupCard";
import { SignUpBackground } from "./styles";

function SignUpPage() {
  return (
    <SignUpBackground>
      <SignUpCard />
    </SignUpBackground>
  );
}

export default SignUpPage;
