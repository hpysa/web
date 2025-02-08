import { memo } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Components from './Components/Components';
const { Layout, QRImg, Attendance } = Components;

const App = memo(() => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<QRImg src="/hpysa.png" />} />
        <Route path="attendance/">
          <Route path="eq" element={<Attendance page="Elder's Quorum" image="/eqattendance.png" />} />
          <Route path="rs" element={<Attendance page="Relief Society" image="/rsattendance.png" />} />
          <Route path="ss" element={<Attendance page="Sunday School" image="/ssattendance.png" />} />
        </Route>
        <Route path="facebook" element={<QRImg src="/hpfacebook.png" h2="Facebook" />} />
        <Route path="oreo" element={<QRImg src="/oreo.png" h2="Oreo March Madness" />} />
        <Route path="*" element={<QRImg src="/hpysa.png" />} />
      </Route>
    </Routes>
  </BrowserRouter>
));

export default App;
