

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';


const App = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-16"> {/* Add padding equal to navbar height */}
        <Hero/>
      </main>
      <Footer />
    </div>
  );
};


export default App;