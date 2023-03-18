import type { NextPage } from 'next';
import styled from 'styled-components';

const BackgroundImage = styled.div`
  background-image: url('/background-image.jpg');
  background-size: cover;
  background-position: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
`;

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #6c63ff;
  color: white;
`;

const NavbarLogo = styled.a`
  font-size: 2rem;
  font-weight: bold;
  text-decoration: none;
  color: white;
`;

const SignupContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 4rem);
`;

const SignupFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  border: 1px solid #6c63ff;
  border-radius: 10px;
  background-color: white;
`;

const SignupForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;

  label {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
  }

  input {
    height: 2.5rem;
    font-size: 1rem;
    padding: 0.5rem;
    margin-bottom: 1rem;
    border: none;
    border-radius: 5px;
  }

  button {
    height: 2.5rem;
    font-size: 1rem;
    color: white;
    background-color: #6c63ff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
`;

const Signup: NextPage = () => {
  return (
    <>
      <Navbar>
        <NavbarLogo href="">Visual CV Generator</NavbarLogo>
      </Navbar>
      <BackgroundImage />
      <SignupContainer>
        <SignupFormContainer>
          <h1>Sign Up</h1>
          <SignupForm>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" required />
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" required />
            <button type="submit">Sign Up</button>
          </SignupForm>
        </SignupFormContainer>
      </SignupContainer>
    </>
  );
};

export default Signup;
