import { Route, Routes } from "react-router-dom";
import Signup from "./pages/Signup/Signup";
import Login from "./pages/Login/Login";
import Library from "./pages/Library/Library";
import VideoPage from "./pages/Video/VideoPage";
import ProtectedRoute from "./components/feature/ProtectedRoute";
import Home from "./pages/Home/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/library"
          element={
            <ProtectedRoute>
              <Library />
            </ProtectedRoute>
          }
        />
        <Route path="/videos/:id" element={<VideoPage />} />
      </Routes>
    </>
  );
}

export default App;
