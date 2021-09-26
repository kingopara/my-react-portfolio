// import React, {useState} from 'react';
// import './App.css';
// import Header from './components/Header';
// // import Navigation from './components/Navigation';
// import About from './components/About';
// // import Project from './components/Project';
// import Footer from './components/Footer';
// import ContactForm from './components/Contact';
// // import projectcards from './projectcards.json'

// function App() {

//   // const [projects, setProjects] = useState(projectcards);
//   const [contactSelected, setContactSelected] = useState(false);
//   return (
//     <div>
//       <Header/>
//       <main>
//         {!contactSelected ? (
//           <> 
//             <About/> 
//           </>
//         ) : ( 
//           <ContactForm/>
//         )}
//       </main>
//       <Footer/>
//     </div>
//   );
// }

// export default App;

import React from "react";
import Navigation from "./components/Navigation";
import Header from "../src/components/Header/index";
import Footer from "../src/components/Footer/index"

function App() {
  return (
    <div>
      <Header/>
      <main>
        <Navigation/>
      </main>
      <Footer/>
    </div>
  )
}

export default App;