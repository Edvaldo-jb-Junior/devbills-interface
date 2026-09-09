import { Outlet } from "react-router-dom";
import Footer from "../componets/Footer";
import Header from "../componets/Header";



const Applayout = () => {
    return (
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow py-6">
            <Outlet />
          </main>
          <Footer />
        </div>
    );
}
  export default Applayout;