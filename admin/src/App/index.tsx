import { BrowserRouter, Routes, Route } from "react-router-dom";
import { memo, Suspense } from 'react';

import * as pages from './pages';
import Wrapper from './Wrapper';

const App = memo(() => (
  <Suspense fallback={<h2>Loading...</h2>}>
    <BrowserRouter basename='/'>
      <Routes>
        <Route path='/*' element={<Wrapper />}>
          <Route path="attendance" element={<pages.WIP />} /> 
          <Route path="activities" element={<pages.Activities />} />
          <Route path="keys" element={<pages.BuildingKeys />} />
          <Route path="success" element={<pages.Success />} />
          <Route path="wip" element={<pages.WIP />} />
          <Route path="*" element={<pages.InvalidRoutes />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </Suspense>
));

export default App;
