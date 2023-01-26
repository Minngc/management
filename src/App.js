import { RouterProvider } from "react-router-dom";
import "./App.scss";
import Register from "./routes";
import { useUserState } from "./hooks/useUserProfile";
import unLoginPage from "./routes/unLogin";

function App() {
  const [userState] = useUserState();
  return (
    <>
      <RouterProvider router={Register(userState)} />
    </>
  );
}

export default App;
