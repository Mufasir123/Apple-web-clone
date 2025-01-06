import { lazy, Suspense } from "react";

// Lazy load components
const Navbar = lazy(() => import("./components/Navbar"));
const Heros = lazy(() => import("./components/Heros"));
const Highlights = lazy(() => import("./components/Highlights"));
const Model = lazy(() => import("./components/Model"));
const Features = lazy(() => import("./components/Features"));
const HowItWorks = lazy(() => import("./components/HowItWorks"));
const Footer = lazy(() => import("./components/Footer"));

function App() {
  return (
    <>
      <main className="bg-black">
        <Suspense fallback={<div className='flex items-center justify-center mt-56 text-4xl font-semibold' >Loading....</div>}>
          <Navbar />
          <Heros />
          <Highlights />
          <Model  />
          <Features />
          <HowItWorks />
          <Footer />
        </Suspense>
      </main>
    </>
  );
}

export default App;
