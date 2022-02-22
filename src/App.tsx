/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import "./App.scss";
import Footer from "./common/components/ui/Footer/Footer";
// import HeaderDashboard from "./common/components/ui/Header/HeaderDashboard";
import DashboardPage from "./pages/Dashboard/DashboardPage";
import HomePage from "./pages/Home/HomePage";
import OrderHistoryPage from "./pages/OrderHistory/OrderHistoryPage";
import UpdateProfilePage from "./pages/UpdateProfile/UpdateProfilePage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoginPage from "./pages/Login/LoginPage";
import RegisterPage from "./pages/Register/RegisterPage";
import "./styles/css/style.css";
import Header from "./common/components/ui/Header/Header";
import PricingPage from "./pages/Packages/Pricing/PricingPage";
interface AppProps {
  name: string;
}

interface AppState {
  currentRoute: string;
}

class App extends React.Component<AppProps, AppState> {
  state = {
    currentRoute: "",
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
          <Header type="default"/>
          <Routes>
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/order-history" element={<OrderHistoryPage />} />
            <Route path="/update-profile" element={<UpdateProfilePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/pricing" element={<PricingPage />} />
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
