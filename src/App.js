
import './App.css';
import CategorySection from './componet/CategorySection';
import DealOfTheDay from './componet/DealOfTheDay';
import FeatureGrid from './componet/FeatureGrid';
import Footer from './componet/Footer';
import Header from './componet/Header';
import HeroSection from './componet/HeroSection';
import Imagesldier from './componet/Imageslider';
import ProductSlider from './componet/ProductSlider';
import PromoSlider from './componet/PromoSlider';
import SkincareGrid from './componet/SkincareGrid';
import SliderComponent from './componet/SliderComponent';
import StorySection from './componet/StorySection';

function App() {
  return (
    <div className="App">
      
   <Header/>
   <HeroSection/>
   
   <CategorySection/>
   {/* <PromoSlider/> */}
   <SliderComponent/>
   
   <ProductSlider/>
    <FeatureGrid/>
   <SkincareGrid/>
  
   <DealOfTheDay/>
   <StorySection/>
   <Footer/>
    </div>
  );
}

export default App;
