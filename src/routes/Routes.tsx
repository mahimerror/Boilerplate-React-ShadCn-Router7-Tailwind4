import { createBrowserRouter } from "react-router";

export const route = createBrowserRouter([
  {
    path: "/",
    element: <></>,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: (
          <PageTitle title="Home">
            <Home />
          </PageTitle>
        ),
      },
    ],
  },

  {
    path: "*",
    element: <NotFoundError />,
  },
]);
