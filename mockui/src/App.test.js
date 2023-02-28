import { render } from '@testing-library/react';
import App from './App';
// import AuthenticationFormHeaderText from "../src/components/user/userAuthenticationSection/AuthenticationFormHeaderText";

// test('header text test', () => {
//   render(<AuthenticationFormHeaderText />);
//   const linkElement = screen.getByText(/Login/i);
//   expect(linkElement).toBeInTheDocument();
// });

test('testing all the layout components', () => {
  
  // eslint-disable-next-line testing-library/render-result-naming-convention
  const component = render(<App />);
  console.log(component)
});
