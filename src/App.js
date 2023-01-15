import Header from "./components/Header/Header";
import Home from "./pages/home/Home";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AddExpense from "./pages/expense/AddExpense";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Router>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/add-expense" element={<AddExpense/>}/>
      </Routes>
      <Footer></Footer>
    </Router>
  );
}

export default App;
