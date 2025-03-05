import { BrowserRouter, Routes, Route } from "react-router-dom";
import Lenis from "lenis";
// pages
import Root from "./pages/Root";
import HomePage from "./pages/home/HomePage";
import Error from "./pages/error/Error";
import { useEffect } from "react";
import ProjectPage from "./pages/projects/ProjectPage";

function App() {
	useEffect(() => {
		const lenis = new Lenis();

		function raf(time: number) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}
		requestAnimationFrame(raf);
	}, []);

	return (
		<main className="flex h-full w-full">
			<BrowserRouter
				future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
			>
				<Routes>
					<Route path="/" element={<Root />}>
						<Route index element={<HomePage />}></Route>
						<Route path="project/:projectID" element={<ProjectPage />}></Route>
					</Route>

					<Route path="*" element={<Error />} />
				</Routes>
			</BrowserRouter>
		</main>
	);
}

export default App;
