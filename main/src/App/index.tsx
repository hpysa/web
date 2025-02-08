import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

import Wrapper from "./Wrapper";

export default function App() {
  const Main = lazy(() => import("./Main"));
  const Join = lazy(() => import("./Join"));
  const Cleaning = lazy(() => import("./Cleaning"));

  return (
    <Suspense fallback={<h2>Loading...</h2>}>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<Wrapper />}>
            <Route index element={<Main />} />
            <Route path="join" element={<Join />} />
            <Route path="cleaning" element={<Cleaning />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

