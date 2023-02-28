import { render } from '@testing-library/react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserLoginPage from '../../pages/user/UserLoginPage';

// import AuthenticationFormHeaderText from "../src/components/user/userAuthenticationSection/AuthenticationFormHeaderText";

// test('header text test', () => {
//   render(<AuthenticationFormHeaderText />);
//   const linkElement = screen.getByText(/Login/i);
//   expect(linkElement).toBeInTheDocument();
// });

// test('user login component test', () => {
  
//   // eslint-disable-next-line testing-library/render-result-naming-convention
//   const component = render(<UserLoginFormLayout />);
//   console.log(component)
// });


describe('Test the user login page components', () => { 
  test('render the user login page with all the components', async () => { 
   
         // eslint-disable-next-line testing-library/render-result-naming-convention
         const component =  render( 
          <BrowserRouter>
            <Routes>
              <Route path="/users/login" element={<UserLoginPage />}></Route>
            </Routes>
          </BrowserRouter>
          )
          // const buttonList = await screen.findByLabelText("submit")
          // expect(buttonList).toHaveLength(1)
          // eslint-disable-next-line testing-library/render-result-naming-convention

            console.log(component)
     

   }) 

})