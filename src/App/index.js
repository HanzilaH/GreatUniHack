import {
    createMemoryRouter,
    RouterProvider,
    createBrowserRouter
} from "react-router-dom";

const routes = [
    {
        path: "/test",
        element: <div>Test</div>
    }
]


// for final
// const router = createMemoryRouter(routes);

// for testing
const router = createBrowserRouter(routes);

const App = () => {

    return (

        <RouterProvider router={router} />

    );

}

export default App;