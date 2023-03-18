import { render } from '@testing-library/react';
import App from './App';
// import AuthenticationFormHeaderText from "../src/components/user/userAuthenticationSection/AuthenticationFormHeaderText";

// test('header text test', () => {
//   render(<AuthenticationFormHeaderText />);
//   const linkElement = screen.getByText(/Login/i);
//   expect(linkElement).toBeInTheDocument();
// });

test('should render all component correctly in the application', () => {
  
  // eslint-disable-next-line testing-library/render-result-naming-convention
  const component = render(<App />);
  console.log(component)
});


// test('testing header login', () => {
  
//   // eslint-disable-next-line testing-library/render-result-naming-convention
//   render(<AuthenticationFormHeaderText />);
//   const aboutAnchorNode = screen.getByText(/Login/i)
//   expect(aboutAnchorNode).toMatch("Login")
// });
// eslint-disable-next-line no-undef
