import { Header } from "./components";
import { Dashboard, Signin, Signup } from "./pages";

const routes = [
  {
    path: "/",
    element: <Signin />,
  },
  {
    path: "/sign-up",
    element: <Signup />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
];

export default routes;
