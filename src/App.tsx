import { BrowserRouter, Routes, Route } from "react-router-dom";
import Lenis from "lenis";
// pages
import Root from "./pages/Root";
import HomePage from "./pages/home/HomePage";
import Error from "./pages/error/Error";
import { useEffect } from "react";
import { RefProvider } from "./context/RefContext";

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
			<RefProvider>
				<BrowserRouter
					future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
				>
					<Routes>
						<Route path="/" element={<Root />}>
							<Route index element={<HomePage />}></Route>
						</Route>

						<Route path="*" element={<Error />} />
					</Routes>
				</BrowserRouter>
			</RefProvider>
		</main>
	);
}

export default App;
