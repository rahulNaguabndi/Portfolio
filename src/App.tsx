import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./Components/Header";
import HomePage from "./Components/HomePage";
import AboutMe from "./Components/AboutMe";
import Experience from "./Components/Experience";
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "about",
    element: <AboutMe />,
  },
  {
    path: "experience",
    element: <Experience />,
  },
]);
function App() {
  return (
    <>
      <Header />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
