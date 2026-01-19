import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import HomeContents from "./pages/home/HomeContents";
import Products from "./pages/products/ProductsPage";
import AboutUs from "./pages/about/AboutContents";
import Contact from "./pages/contact/Contact";
import WarrantyRegistration from "./pages/warranty/WarrantyRegistration";
import WarrantyClaim from "./pages/warranty/WarrantyClaim";
import withLoader from "./hoc/withLoader";

import Sirius from "./pages/brands/Sirius";
import DaxDetailing from "./pages/brands/DaxDetailing";
import DaxSolutions from "./pages/brands/DaxSolutions";

// Wrap all components with loader
const ProductsWithLoader = withLoader(Products, { spinnerColor: 'success' });
const AboutWithLoader = withLoader(AboutUs, { spinnerColor: 'warning' });
const ContactWithLoader = withLoader(Contact, { spinnerColor: 'warning' });
const WarrantyRegistrationWithLoader = withLoader(WarrantyRegistration, { spinnerColor: 'danger' });
const WarrantyClaimWithLoader = withLoader(WarrantyClaim, { spinnerColor: 'danger' });

// Brand Pages with specific loader colors
const SiriusWithLoader = withLoader(Sirius, { spinnerColor: 'primary' });
const DaxDetailingWithLoader = withLoader(DaxDetailing, { spinnerColor: 'warning' });
const DaxSolutionsWithLoader = withLoader(DaxSolutions, { spinnerColor: 'success' });

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomeContents />} />
            <Route path="/products" element={<ProductsWithLoader />} />

            {/* Brand Routes */}
            <Route path="/brands/sirius" element={<SiriusWithLoader />} />
            <Route path="/brands/dax-detailing" element={<DaxDetailingWithLoader />} />
            <Route path="/brands/dax-solutions" element={<DaxSolutionsWithLoader />} />

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