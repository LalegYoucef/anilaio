
import TeacherCard from "./app/Components/TeacherCard/TeacherCard.js"
import Navbar from "./app/Components/Navbar/Navbar.js";
import SearchBar from "./app/Components/SearchBar/SearchBar.js";
import ProductCard from "./app/Components/ProductCard/ProductCard.js"
import Footer from "./app/Components/Footer/Footer.js";
import Hero from './app/Components/Hero/Hero.js'
import ContactForm from "./app/Components/ContactForm/ContactForm.js";

function App() {
  return (
    <>
    <Navbar> </Navbar>

   <Hero></Hero>
   
   <TeacherCard></TeacherCard>
   
   <div className="ProductCard">
    <ProductCard className="Product"></ProductCard>
    <ProductCard className="Product"></ProductCard>
    <ProductCard className="Product"></ProductCard>
    </div>
    <ContactForm></ContactForm>
   
        
    <Footer></Footer>
    </>

  );
}

export default App;
