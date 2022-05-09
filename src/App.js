import React, { useState } from 'react';
import About from './components/About';
import Nav from './components/Nav';
import Gallery from './components/Gallery';
import ContactForm from './components/Contact';
import './App.css';

function App() {
  // lift categories up a state
  const [categories] = useState([
    { name: 'commercial',  description: 'Photos of grocery stores, food truchs, and other commercial projects' },
    { name: 'portraits', description: 'Portraits of people in my life' },
    { name: 'food', description: 'Delicious delicacies' },
    { name: 'landscape',  description: 'Fields, farmhouses, waterfalls, and the beauty of nature' },
  ]);

  // SPA state setting
  const [contactSelected, setContactSelected] = useState(false);
  // set state
  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      <main>
        {/*Conditionally to switch between Gallery and About page, and Contact Page*/}
        {!contactSelected ? (
          <>
            <Gallery currentCategory={currentCategory}></Gallery>
            <About></About>
            </>
        ) : (
          <ContactForm></ContactForm>
        )}
      </main>
    </div>
  );
}

export default App;
