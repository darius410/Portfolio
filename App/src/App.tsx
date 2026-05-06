import Nav from "./components/js/Nav";
import Hero from "./components/js/Hero";
import About from "./components/js/About";
import Blog from "./components/js/Blog";
import Portfolio from "./components/js/Portfolio";
import Footer from "./components/js/Footer";
function App() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <Nav />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <About />
        <Blog />
        <Portfolio />
      </main>
      <Footer />
    </>
  );
}

export default App;
