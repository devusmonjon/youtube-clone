import { Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import { Main, Channel, VideoDetail, Search } from "../../components";

import "./app.css";

const App = () => {
  return (
    <Box>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/channel/:slug" element={<Channel />} />
        <Route path="/video/:slug" element={<VideoDetail />} />
        <Route path="/search/:query" element={<Search />} />
      </Routes>
    </Box>
  )
}

export default App