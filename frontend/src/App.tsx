import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

import MainLayout from "./layouts/MainLayout";
import PrivacyPage from "./pages/PrivacyPage";

const HomePage = lazy(() => import("./pages/HomePage"));
const ProjectDetailPage = lazy(() => import("./pages/ProjectDetailPage"));

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Suspense fallback={<div />}>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects/:slug" element={<ProjectDetailPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
          </Routes>
        </Suspense>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
