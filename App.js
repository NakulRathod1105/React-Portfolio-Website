import "./App.css";
import Header from "./AllFiles/Header";
import Home from "./AllFiles/Home";
import About from "./AllFiles/About";
import Projects from "./AllFiles/Projects";
import Skills from "./AllFiles/Skills";
import Contact from "./AllFiles/Contact";

import Footer from "./AllFiles/Footer";


function App() {

  return (
    <div className="App">
      <Header />
      <Home />
      <About/>
      <Projects/>
      <Skills/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
