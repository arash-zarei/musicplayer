import './App.css';
import Layout from './components/layout/Layout';

import { Routes, Route, Navigate } from "react-router-dom"
import Home from './components/home/Home';
import MusicsPage from './components/musicsPage/MusicsPage';
import SingerPage from './components/singerPage/SingerPage';
import MusicPage from './components/musicPage/MusicPage';
import ScrollToTop from "./shared/ScrollToTop"

function App() {
  return (
    <Layout>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/musics/:slug?' element={<MusicsPage />} />
        <Route path="/musics/" element={<Navigate to="/musics/divar" />} />
        <Route path='/singers/:slug' element={<SingerPage />} />
        <Route path='/music/:slug' element={<MusicPage />} />
      </Routes>
    </Layout>
  );
}

export default App;