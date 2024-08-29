import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "./components";
import { Home, Cart } from "./pages";
import { store } from "@/data";
import { Provider } from "react-redux";
import { ErrorBoundary } from "react-error-boundary";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

function App() {
  return (
    <ErrorBoundary fallback={<p>Oops... Something went wrong</p>}>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </ErrorBoundary>
  );
}

export default App;
