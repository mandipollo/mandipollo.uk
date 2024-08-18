import { createBrowserRouter, RouterProvider } from "react-router-dom";

// pages
import Root from "./pages/Root";
import HomePage from "./pages/HomePage";

const Route = createBrowserRouter([
	{
		element: <Root />,
		path: "/",
		children: [
			{
				element: <HomePage />,
				index: true,
			},
		],
	},
]);

function App() {
	return (
		<div className="flex h-screen w-full">
			<RouterProvider router={Route}></RouterProvider>
		</div>
	);
}

export default App;
