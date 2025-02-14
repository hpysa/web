import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Wrapper from "./Wrapper";

export default function App() {
  const Main = lazy(() => import("./Main"));
//   const Join = lazy(() => import("./Join"));
//   const Cleaning = lazy(() => import("./Cleaning"));

  return (
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
}

