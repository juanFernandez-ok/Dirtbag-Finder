import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";
import LandingPage from "./LandingPage";
import SignIn from "./SignIn";
import Home from "./Home";
import Partners from "./Partners";
import PostDetails from "./PostDetails";
import Profile from "./Profile";
import InOut from "./InOut";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";


const App = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  return (
    <>
      <BrowserRouter>
        <Main>
          <GlobalStyles />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            {/* <Route path="/signin" element={<SignIn />} /> */}
            <Route path="/home" element={<Home />} />
            <Route path="/select-category" element={<InOut />} />
            <Route path="/partners/:category" element={<Partners />} />
            <Route path="/partners/:postId" element={<PostDetails />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </Main>
      </BrowserRouter>
    </>
  );
};

const Main = styled.div`
`



export default App;
