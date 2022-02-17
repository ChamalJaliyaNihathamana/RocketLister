import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";
import Footer from "./common/components/ui/Footer";
import HeaderDashboard from "./common/components/ui/Header/HeaderDashboard";
import DashboardPage from "./pages/DashboardPage";
import HomePage from "./pages/HomePage";
import OrderHistoryPage from "./pages/OrderHistoryPage";
import PickupPage from "./pages/PickupPage";
import UpdateProfilePage from "./pages/UpdateProfilePage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface AppProps {
  name: string;
}

interface AppState {
  // location: string
}

class App extends React.Component<AppProps, AppState> {
  state = {
    // location: 'dashboard',
  };

  locationNameHandler = (location: string) => {
    this.setState({ location: location });
  };

  render() {
    return (
      <div>
        <Router>
          <HeaderDashboard />
          <Routes>
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/order-history" element={<OrderHistoryPage />} />
            <Route path="/update-profile" element={<UpdateProfilePage />} />
            <Route path="/pick-up" element={<PickupPage />} />
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
