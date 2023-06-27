import Header from "./components/Header";
import Search from "./components/Search";
import Body from "./components/Body";
import Navbar from "./layouts/Navbar";
import Footer from "./layouts/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Search />
      <Body />
      <Footer />
    </div>
  );
};

export default App;
