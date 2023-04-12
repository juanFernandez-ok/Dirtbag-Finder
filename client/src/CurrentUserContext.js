import { createContext, useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

export const CurrentUserContext = createContext(null);

const CurrentUserProvider = ({ children }) => {
  const { logout, isAuthenticated, user } = useAuth0();
  const [currentUser, setCurrentUser] = useState(null);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    if (isAuthenticated) {
      fetch("/newUser", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: user.given_name,
          lastName: user.family_name,
          email: user.email,
        }),
      })
        //sends the data to the server
        .then((res) => res.json())
        //receives the data back from the server
        .then((data) => {
          console.log(data);
          window.sessionStorage.setItem("user", JSON.stringify(data.data));
          setCurrentUser(data.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [isAuthenticated, refresh]);


  useEffect(() => {
    const myUser = window.sessionStorage.getItem("user");
    if (myUser) {
      const parsedUser = JSON.parse(myUser);

      fetch("/newUser", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: parsedUser.firstName,
          lastName: parsedUser.lastName,
          email: parsedUser.email,
        }),
      })
        //sends the data to the server
        .then((res) => res.json())
        //receives the data back from the server
        .then((data) => {
          console.log(data);
          window.sessionStorage.setItem("user", JSON.stringify(data.data));
          setCurrentUser(data.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, []);

  if (isAuthenticated && !user) {
    return <div>Loading...</div>;
  }

  return (
    <CurrentUserContext.Provider value={{ currentUser, setCurrentUser, refresh, setRefresh }}>
      {children}
    </CurrentUserContext.Provider>
  );
};

export default CurrentUserProvider;
