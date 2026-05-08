import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

const HomePage = lazy(() => import("./pages/HomePage"));
const ProjectDetailPage = lazy(() => import("./pages/ProjectDetailPage"));

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Suspense fallback={<div />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects/:slug" element={<ProjectDetailPage />} />
          </Routes>
        </Suspense>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
