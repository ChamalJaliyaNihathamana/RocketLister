/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import "./App.scss";
import Footer from "./common/components/ui/Footer/Footer";
// import HeaderDashboard from "./common/components/ui/Header/HeaderDashboard";
import DashboardPage from "./pages/DashboardPage";
import HomePage from "./pages/HomePage";
import OrderHistoryPage from "./pages/OrderHistoryPage";
import PickupPage from "./pages/PickupPage";
import UpdateProfilePage from "./pages/UpdateProfilePage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoginPage from "./pages/Login/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import "./styles/css/style.css"
import HeaderBar from "./common/components/ui/Header/HeaderBar";
interface AppProps {
  name: string;
}

interface AppState {
  currentRoute:string
}

class App extends React.Component<AppProps, AppState> {
  state = {
   currentRoute:""
  };

   usePathname = () => {
    const location = useLocation();
    return location.pathname;
  };

  // componentDidMount() {
  //   this.setState({currentRoute:this.usePathname()})
  // }
  
  
  render() {
    // const location = useLocation();
    // console.log(location);
    return (
      <div>
        <Router>
          {/* <HeaderBar location={this.state.currentRoute} /> */}
          <Routes>
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/order-history" element={<OrderHistoryPage />} />
            <Route path="/update-profile" element={<UpdateProfilePage />} />
            <Route path="/pick-up" element={<PickupPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/" element={<HomePage />} />
          </Routes>

          <Footer />
          <ToastContainer
            position="bottom-right"
            autoClose={5000}
            hideProgressBar
            newestOnTop
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </Router>
      </div>
    );
  }
}

export default App;
