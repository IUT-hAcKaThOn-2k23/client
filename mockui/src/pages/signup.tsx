import type { NextPage } from 'next';
import styled from 'styled-components';
import UserSignUpFormLayout from 'src/home/UserSignUpFormLayout';

const BackgroundImage = styled.div`
  background-image: url('https://d33wubrfki0l68.cloudfront.net/3697f8a424a77e6e5b422007590aedb27abca140/2cad2/static/constellations-4eee0ff82aba4d347fc46bb276834140.jpg');
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
  width: 80%;
  max-width: 600px;
  border: 2px solid #6c63ff;
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
    border: 1px solid #6c63ff; /* Add border here */
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
      <UserSignUpFormLayout/>
      
    </>
  );
};

export default Signup;
