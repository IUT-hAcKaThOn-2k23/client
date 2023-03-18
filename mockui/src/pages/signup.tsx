import type { NextPage } from 'next';
import styled from 'styled-components';

const SignupContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url('/background-image.jpg');
  background-size: cover;
  background-position: center;
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
);
};

export default Signup;