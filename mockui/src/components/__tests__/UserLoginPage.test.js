import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { act, create } from 'react-test-renderer';
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
  test('should render Register component correctly', async () => { 
   
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

  //  test("email input field should accept email", () => {
  //   render( 
  //     <BrowserRouter>
  //       <Routes>
  //         <Route path="/users/login" element={<UserLoginPage />}></Route>
  //       </Routes>
  //     </BrowserRouter>
  //     )
  //   const email = screen.getByPlaceholderText("email");
  //   userEvent.type(email, "dipesh");
  //   expect(email.value).not.toMatch("dipesh.malvia@gmail.com");
  // });

  //cypres

  // test("passport input should have type password", async () => {
  //   render( <BrowserRouter>
  //     <Routes>
  //       <Route path="/users/login" element={<UserLoginPage />}></Route>
  //     </Routes>
  //   </BrowserRouter>);
  //   // eslint-disable-next-line testing-library/no-await-sync-query
  //   const aboutAnchorNode = screen.getByText(/Login/i)
  //   expect(aboutAnchorNode).toMatch("Login")
  // });



  //  test('should fail on email validation', () => { 
    

  //         const testEmail = "sanu.com"
  //         expect(handleE)
  //   })

  //  test('should fail on email validation', () => { 
    

  //         const testEmail = "sanu.com"
  //         expect(handleE)
  //   })

  it("should show error message when all the fields are not entered", () => {
    render( 
      <BrowserRouter>
        <Routes>
          <Route path="/users/login" element={<UserLoginPage />}></Route>
        </Routes>
      </BrowserRouter>)
     const buttonElement = screen.getByRole("button",{ level: 3 });
    // eslint-disable-next-line no-undef
    userEvent.click(buttonElement);
});


test("passport input should have type password", () => {
  render( <BrowserRouter>
    <Routes>
      <Route path="/users/login" element={<UserLoginPage />}></Route>
    </Routes>
  </BrowserRouter>);
  const password = screen.getByPlaceholderText("password",{level : 2});
  expect(password).toHaveAttribute("type", "password");
});

test("email should be failed on email validation", () => {
  const testEmail = "dipesh.com";
  expect(handleEmailChange(testEmail)).not.toBe(true);
});

// snapshot

// test("snapshot", () => {

//   let tree; 
//   act(() => {
//     tree = create(<BrowserRouter>
//       <Routes>
//         <Route path="/users/login" element={<UserLoginPage />}></Route>
//       </Routes>
//     </BrowserRouter>)
//   });
 
//   expect(tree.toJSON()).toMatchSnapshot();
// });





})



// describe('Test the user login page', () => { 
//   test('render the user login page header text', async () => { 
   
//          // eslint-disable-next-line testing-library/render-result-naming-convention
//          const textTest =  render( 
//           <BrowserRouter>
//             <Routes>
//               <Route path="/users/login" element={<UserLoginPage />}></Route>
//             </Routes>
//           </BrowserRouter>
//           )
//           // const buttonList = await screen.findByLabelText("submit")
//           // expect(buttonList).toHaveLength(1)
//           // eslint-disable-next-line testing-library/render-result-naming-convention

//               textTest = screen.getByText(/Login/i);
//               expect(textTest).toBeInTheDocument();
     

//    }) 

