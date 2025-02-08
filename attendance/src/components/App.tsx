import { memo } from "react";
import { Routes, Route } from "react-router-dom";

import Attendance from "./Attendance";

const Main = memo(() => (
  <>
    <header>
      <h1>Attendance Homepage</h1>
    </header>
    <main>
      <p>There is no content for this page.</p>
      <p>Please select a type of attendance below.</p>
      <ul>
        <li><a href="./eq">Elder's Quorum</a></li>
        <li><a href="./rs">Relief Society</a></li>
        <li><a href="./ss">Sunday School</a></li>
      </ul>
    </main>
  </>
));

const Success = memo(() => (
  <>
    <header>
      <h1>Attendance</h1>
      <h2>Success</h2>
    </header>
    <main>
      <p>Thank you for submitting your attendance.</p>
    </main>
  </>
))

const App = memo(() => (
  <Routes>
    <Route index element={<Main />} />
    <Route path="success" element={<Success />} />
    <Route path=":type" element={<Attendance />} />
  </Routes>
));

export default App;
