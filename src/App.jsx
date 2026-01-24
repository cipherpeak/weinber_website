import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import HomeContents from "./pages/home/HomeContents";
import Products from "./pages/products/ProductsPage";
import AboutUs from "./pages/about/AboutContents";
import Contact from "./pages/contact/Contact";
import ProductDetailsPage from "./pages/products/ProductDetailsPage";
import WarrantyRegistration from "./pages/warranty/WarrantyRegistration";
import WarrantyClaim from "./pages/warranty/WarrantyClaim";
import withLoader from "./hoc/withLoader";

import Sirius from "./pages/brands/Sirius";
import DaxDetailing from "./pages/brands/DaxDetailing";
import DaxSolutions from "./pages/brands/DaxSolutions";
import Advantage from "./pages/brands/Advantage";

// Wrap all components with loader
const HomeWithLoader = withLoader(HomeContents, { spinnerColor: 'primary' });
const ProductsWithLoader = withLoader(Products, { spinnerColor: 'success' });
const ProductDetailsWithLoader = withLoader(ProductDetailsPage, { spinnerColor: 'success' });
const AboutWithLoader = withLoader(AboutUs, { spinnerColor: 'warning' });
const ContactWithLoader = withLoader(Contact, { spinnerColor: 'warning' });
const WarrantyRegistrationWithLoader = withLoader(WarrantyRegistration, { spinnerColor: 'danger' });
const WarrantyClaimWithLoader = withLoader(WarrantyClaim, { spinnerColor: 'danger' });

// Brand Pages with specific loader colors
const SiriusWithLoader = withLoader(Sirius, { spinnerColor: 'primary' });
const DaxDetailingWithLoader = withLoader(DaxDetailing, { spinnerColor: 'warning' });
const DaxSolutionsWithLoader = withLoader(DaxSolutions, { spinnerColor: 'success' });
const AdvantageWithLoader = withLoader(Advantage, { spinnerColor: 'danger' });

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomeWithLoader />} />
            <Route path="/products" element={<ProductsWithLoader />} />
            <Route path="/products/:id" element={<ProductDetailsWithLoader />} />

            {/* Brand Routes */}
            <Route path="/brands/sirius" element={<SiriusWithLoader />} />
            <Route path="/brands/dax-detailing" element={<DaxDetailingWithLoader />} />
            <Route path="/brands/dax-solutions" element={<DaxSolutionsWithLoader />} />
            <Route path="/brands/advantage" element={<AdvantageWithLoader />} />

            <Route path="/about" element={<AboutWithLoader />} />
            <Route path="/contact" element={<ContactWithLoader />} />
            <Route path="/warranty-registration" element={<WarrantyRegistrationWithLoader />} />
            <Route path="/warranty-claim" element={<WarrantyClaimWithLoader />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;