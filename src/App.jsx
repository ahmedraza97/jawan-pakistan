import "./App.css";
import Acadmics from "./components/Acadmics/Acadmics";
import Banner from "./components/Banner/Banner";
import Echooling from "./components/Echooling/Echooling";
import Footer from "./components/Footer/Footer";
import Review from "./components/Review/Review";
import Events from "./components/UpcomingEvents/Events";

function App() {
  return (
    <>
      <Banner />
      <Acadmics />
      <Events />
      <Review />
      <Echooling />
      <Footer />
    </>
  );
}

export default App;
