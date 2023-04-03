import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";
import LandingPage from "./LandingPage";
import Home from "./Home";
import Partners from "./Partners";
import PostDetails from "./PostDetails";
import CurrentProfile from "./CurrentProfile";
import InOut from "./InOut";
import ProfileDetails from "./ProfileDetails";
import CreatePost from "./CreatePost"
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";
import { CurrentUserContext } from "./CurrentUserContext";
import { useContext } from "react";
import EditProfile from "./EditProfile";


const App = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  const { currentUser } = useContext(CurrentUserContext);

  return (
    <>
      <BrowserRouter>
        <Main>
          <GlobalStyles />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/home" element={<Home />} />
            <Route path="/select-category" element={<InOut />} />
            <Route path="/partners/:category" element={<Partners />} />
            <Route path="/post-details/:postId" element={<PostDetails />} />
            <Route path="/profile" element={<CurrentProfile />} />
            <Route path="/profile/:userId" element={<ProfileDetails />} />
            <Route path="/edit-profile" element={<EditProfile />} />
            <Route path="/create-post" element={<CreatePost />} />
          </Routes>
        </Main>
      </BrowserRouter>
    </>
  );
};

const Main = styled.div`
`



export default App;
