import "./App.css";
import Feedback from "./components/Feedback";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import Newsletter from "./components/Newsletter";
import Order from "./components/Order";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Header></Header>
      <Menu></Menu>
      <Order></Order>
      <Feedback></Feedback>
      <Newsletter></Newsletter>
      <Footer></Footer>
    </>
  );
}

export default App;
