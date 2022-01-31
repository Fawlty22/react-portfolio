import React, {useState} from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import About from "./components/About";
import Contact from "./components/Contact";
import Resume from "./components/Resume";

function App() {

  const [categories] = useState([
    {
      name: 'projects'
    },
    {
      name: 'about'
    },{
      name: 'resume'
    },{
      name: 'contact'
    },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0].name);



  return (
    <div className="h-screen App bg-gray">
      <Header 
        categories={categories}
        currentCategory={currentCategory}
        setCurrentCategory={setCurrentCategory}
      /> 
      <main className="h-full">
        {currentCategory === 'about' &&   
        <About 
          categories={categories}
          currentCategory={currentCategory}
          setCurrentCategory={setCurrentCategory}
          />
        }
        {currentCategory === 'projects' && <Gallery />}
        {currentCategory === 'contact' &&<Contact />}
        {currentCategory === 'resume' &&<Resume />}
        
      
      </main>
     <Footer />
    </div>
  );
}

export default App;
