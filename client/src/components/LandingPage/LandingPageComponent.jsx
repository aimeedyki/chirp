import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #172932;
  height: 100vh;
  color: #FFF100;
`;

const Logo = styled.h1`
  font-family: 'Kaushan Script', cursive;
  font-size: 7rem;
  margin-bottom: 2rem;
`;

const GoogleButton = styled.button`
  display: inline-block;
  background: white;
  color: #444;
  // width: 190px;
  border-radius: 5px;
  border: thin solid #888;
  box-shadow: 1px 1px 1px grey;
  white-space: nowrap;
`;

const LoginText = styled.h2`
  opacity: .8;
`;

const Icon = styled.span`
  background: url('https://res.cloudinary.com/damc3mj5u/image/upload/v1526571608/google-logo_jjjjqs.svg') transparent 5px 50% no-repeat;
  display: inline-block;
  vertical-align: middle;
  width: 35px;
  height: 35px;
`;
const ButtonText = styled.span`
  display: inline-block;
  vertical-align: middle;
  padding-left: 15px;
  padding-right: 21px;
  font-size: 14px;
  font-weight: bold;
  font-family: 'Roboto', sans-serif;
  color: #000000;
`;

const LandingPageComponent = () => (
  <Container>
    <Logo>Chirp</Logo>
    <LoginText>Login to chat with friends</LoginText>
    <GoogleButton>
      <Icon/>
      <ButtonText>Sign in with Google</ButtonText>
    </GoogleButton>
  </Container>
);

export default LandingPageComponent;
