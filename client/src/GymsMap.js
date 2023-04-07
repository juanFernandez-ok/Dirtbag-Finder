import styled from "styled-components";
import { useEffect, useState, useContext } from "react";
import { CurrentUserContext } from "./CurrentUserContext";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import {
  useJsApiLoader,
  GoogleMap,
  MarkerF,
  InfoWindow,
} from "@react-google-maps/api";

const GymsMap = () => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });
  const { logout, isAuthenticated, user } = useAuth0();
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
  const [activeGym, setActiveGym] = useState(null);
  const [gyms, setGyms] = useState();

  const mtlCenter = { lat: 45.5017, lng: -73.5673 };

  useEffect(() => {
    fetch(`/montreal-gyms`)
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 400 || data.status === 500) {
          throw new Error("data.message");
        }
        console.log(data.data);
        setGyms(data.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  const handleMakerClick = (gym) => {
    setActiveGym(gym);
  };
  const handleInfoWindowClose = () => {
    setActiveGym(null);
  };

  if (!isLoaded) {
    return <h1>Loading...</h1>;
  }
  return (
    <>
      {!gyms ? (
        <h1>Loading...</h1>
      ) : (
        <Wrapper>
          <GoogleMap
            center={mtlCenter}
            zoom={12}
            mapContainerStyle={{ width: "100%", height: "100%" }}
          >
            <MarkerF position={mtlCenter} />
            {gyms.map((gym) => {
              return (
                <MarkerF
                  key={gym._id}
                  position={gym.coordinates}
                  title={gym.gymName}
                  onClick={() => handleMakerClick(gym)}
                />
              );
            })}
            {activeGym && (
              <InfoWindow
                position={activeGym.coordinates}
                onCloseClick={handleInfoWindowClose}
              >
                <div>
                  <h2>{activeGym.gymName}</h2>
                  <p>{activeGym.address}</p>
                  <Link to={activeGym.websiteUrl}>{activeGym.websiteUrl}</Link>
                </div>
              </InfoWindow>
            )}
          </GoogleMap>
        </Wrapper>
      )}
    </>
  );
};

const Wrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  height: 100vh;
  width: 100vw;
`;

export default GymsMap;
