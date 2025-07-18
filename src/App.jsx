import AppLayout from "./Components/Layouts/AppLayout";
import "bootstrap/dist/css/bootstrap.min.css";
import About from "./pages/About";
import { Contact, contactData } from "./pages/Contact";
import Home from "./pages/Home";
import Movie from "./pages/Movie";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Errorpage from "./pages/Errorpage";
import { GetMoviesApiData } from "./API/GetApiData";
import "./App.css";
import MovieData from "./Components/UI/MovieData";
import { Getmoviesdetails } from "./API/Getmoviesdetails";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <Errorpage />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/movie",
          element: <Movie />,
          loader: GetMoviesApiData,
        },
        {
          path: "/movie/:movieID",
          element: <MovieData />,
          loader: Getmoviesdetails,
        },
        {
          path: "/contact",
          element: <Contact />,
          action: contactData,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
