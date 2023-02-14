import { RouterProvider } from "react-router-dom";
import { route } from "./routes";

import "./App.scss";

function App() {
  return <RouterProvider router={route} />;
}

export default App;
