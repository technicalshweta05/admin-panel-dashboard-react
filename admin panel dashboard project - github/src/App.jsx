import { Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ViewUser from "./pages/users/ViewUser";

import ProtectedRoute from "./components/ProtectedRoute";
import AdminLayout from "./components/AdminLayout";
import ContactEnquiry from "./pages/enquiries/ContactEnquiry";
import Newsletter from "./pages/enquiries/Newsletter";
import AddColor from "./pages/colors/AddColor";
import ViewColor from "./pages/colors/ViewColor";
import AddMaterial from "./pages/materials/AddMaterial";
import ViewMaterial from "./pages/materials/ViewMaterial";
import AddCategory from "./pages/parentCategory/AddCategory";
import ViewCategory from "./pages/parentCategory/ViewCategory";
import AddSubCategory from "./pages/subCategory/AddSubCategory";
import ViewSubCategory from "./pages/subCategory/ViewSubCategory";
import AddSubSubCategory from "./pages/subSubCategory/AddSubSubCategory";
import ViewSubSubCategory from "./pages/subSubCategory/ViewSubSubCategory";
import AddProduct from "./pages/products/AddProduct";
import ViewProduct from "./pages/products/ViewProduct";
import AddWhyChooseUs from "./pages/whychooseus/AddWhyChooseUs";
import ViewWhyChooseUs from "./pages/whychooseus/ViewWhyChooseUs";
import Orders from "./pages/orders/Orders";
import AddSlider from "./pages/sliders/AddSlider";
import ViewSlider from "./pages/sliders/ViewSlider";
import AddCountry from "./pages/country/AddCountry";
import ViewCountry from "./pages/country/ViewCountry";
import AddTestimonial from "./pages/testimonials/AddTestimonial";
import ViewTestimonial from "./pages/testimonials/ViewTestimonial";
import AddFaq from "./pages/faqs/AddFaq";
import ViewFaq from "./pages/faqs/ViewFaq";
import Error404 from "./pages/Error404";
import Profile from "./pages/profile/Profile";
import CompanyProfile from "./pages/companyProfile/CompanyProfile";

function App() {
  return (
    <Routes>

      <Route path="/login" element={<Login />} />

      <Route element={<ProtectedRoute />}>

        <Route element={<AdminLayout />}>

          <Route path="/dashboard" element={<Dashboard />} />

          <Route path="/users/view" element={<ViewUser />} />



          <Route
            path="/enquiries/contact"
            element={<ContactEnquiry />}
          />

          <Route
            path="/enquiries/newsletter"
            element={<Newsletter />}
          />

          <Route path="/colors/add" element={<AddColor />} />

          <Route
            path="/colors/view"
            element={<ViewColor />}
          />

          <Route
            path="/materials/add"
            element={<AddMaterial />}
          />

          <Route
            path="/materials/view"
            element={<ViewMaterial />}
          />

          <Route
            path="/parent-category/add"
            element={<AddCategory />}
          />

          <Route
            path="/parent-category/view"
            element={<ViewCategory />}
          />

          <Route
            path="/sub-category/add"
            element={<AddSubCategory />}
          />

          <Route
            path="/sub-category/view"
            element={<ViewSubCategory />}
          />

          <Route
            path="/sub-sub-category/add"
            element={<AddSubSubCategory />}
          />

          <Route
            path="/sub-sub-category/view"
            element={<ViewSubSubCategory />}
          />

          <Route
            path="/products/add"
            element={<AddProduct />}
          />



          <Route
            path="/products/view"
            element={<ViewProduct />}
          />

          <Route
            path="/why-choose-us/add"
            element={<AddWhyChooseUs />}
          />

          <Route
            path="/why-choose-us/view"
            element={<ViewWhyChooseUs />}
          />

          <Route
            path="/orders/view"
            element={<Orders />}
          />

          <Route
            path="/sliders/add"
            element={<AddSlider />}
          />

          <Route
            path="/sliders/view"
            element={<ViewSlider />}
          />

          <Route
            path="/country/add"
            element={<AddCountry />}
          />

          <Route
            path="/country/view"
            element={<ViewCountry />}
          />

          <Route
            path="/testimonials/add"
            element={<AddTestimonial />}
          />

          <Route
            path="/testimonials/view"
            element={<ViewTestimonial />}
          />

          <Route
            path="/faqs/add"
            element={<AddFaq />}
          />

          <Route
            path="/faqs/view"
            element={<ViewFaq />}
          />

          <Route
            path="/profile"
            element={<Profile />}
          />

          <Route
            path="/company-profile"
            element={<CompanyProfile />}
          />

        </Route>

      </Route>

      <Route path="/" element={<Navigate to="/login" />} />

      <Route path="*" element={<Error404 />} />

    </Routes>
  );
}

export default App;