import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./pages/Root";
import Home from "./pages/Home";
import VideoDetail from "./pages/VideoDetail"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <Home /> },
      { path: "/videos/watch/:id" , element: <VideoDetail /> }
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
