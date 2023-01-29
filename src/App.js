import { useState } from "react";
import { userStateContext, userProfileContext } from "./context/userProfile";
import { RouterProvider } from "react-router-dom";
import "./App.scss";
import Register from "./routes";

function App() {
  const [userState, setUserState] = useState(() => {
    return localStorage.getItem("userState") ?? "offline";
  });
  const [userProfile, setUserProfile] = useState("");
  console.log(userState);
  return (
    <>
      <userProfileContext.Provider value={{ userProfile, setUserProfile }}>
        <userStateContext.Provider value={{ userState, setUserState }}>
          <RouterProvider router={Register(userState)} />
        </userStateContext.Provider>
      </userProfileContext.Provider>
    </>
  );
}

export default App;
