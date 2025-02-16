import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Wrapper from './pages/Wrapper';

const Main = lazy(() => import("./pages/Main"));
//   const Join = lazy(() => import("./pages/Join"));
//   const Cleaning = lazy(() => import("./pages/Cleaning"));

const App = () => (
	<Suspense>
		<BrowserRouter>
			<Routes>
				<Route path="/*" element={<Wrapper />}>
					<Route index element={<Main />} />
					{/* <Route path="join" element={<Join />} />
					<Route path="cleaning" element={<Cleaning />} /> */}
				</Route>
			</Routes>
		</BrowserRouter>
	</Suspense>
);

export default App;