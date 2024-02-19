import '../App.css';
import {Navbar} from '../component/Navbar'
import {Banner} from '../component/Banner'
import {Footer} from '../component/Footer'


import 'tailwindcss/base.css';
import 'tailwindcss/components.css';
import 'tailwindcss/utilities.css';


function Home() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Footer />
    </div>
  );
}

export default Home;
