import { Outlet } from 'react-router-dom';
import Header from './header/Header';
import Footer from './footer/Footer';
import ScrollToTop from '../components/common/ScrollToTop';


function Layout() {
  return (
    <div>
      <Header />
      <main className="pt-20 md:pt-24">
        <Outlet />
      </main>
      <ScrollToTop />
      <Footer />
    </div>
  );
}

export default Layout;