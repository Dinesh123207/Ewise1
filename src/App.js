import "../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SellerLogin from "./screens/SellerLogin";
import SellerSignup from "./screens/SellerSignup";
import BuyerLogin from "./screens/BuyerLogin";
import BuyerSignup from "./screens/BuyerSignup";
import Home from "./screens/Home";
import Home1 from "./screens/home1";
import BargainPrice from "./screens/BargainPrice";
import Blogs from "./screens/Blogs";
import SellerList from "./screens/SellerList.js";
import Marketplace from "./screens/Marketplace";
import Blog1 from "./blogs/blog1.js";
import Blog2 from "./blogs/blog2.js";
import Blog3 from "./blogs/blog3.js";
import Blog4 from "./blogs/blog4.js";
import Blog5 from "./blogs/blog5.js";
import Blog6 from "./blogs/blog6.js";
import Blog7 from "./blogs/blog7.js";

import About from "./screens/About";
import Contact from "./screens/Contact";
import Shop1 from "./screens/Shop1";
import SelectItems from "./screens/SelectItems.js";
import HomeFacility from "./screens/HomeFacility.js";
import Product from "./screens/Product.js";
import { CartProvider } from "./components/ContextReducer.js";
import MyOrder from './screens/MyOrder.js';
import Option from "./screens/Option.js";
import Additemsdonate from "./screens/Additemsdonate.js";
import PricesonMarketplace from "./screens/PricesonMarketplace.js";
import Emailchalo from "./screens/Emailchalo.js";
import { RewardContextProvider, useRewardPoints } from './screens/RewardContext.js';
import Education from "./screens/Education.js";
import DIY from "./screens/DIY.js";
import CarbonFootprints from "./screens/CarbonFootprints.js";
import Notification from "./screens/Notification.js";
import ApprovedProducts from "./screens/ApprovedProducts.js";
import ChartExample from "./screens/ChartExample.js";
import Pickup from "./screens/Pickup.js";
import SelectItemsRecycle from "./screens/SelectItemsRecycle.js";
import SelectItemsDonate from "./screens/SelectItemsDonate.js";
import Stats from "./screens/Stats.js";
import UserDetailsReward from "./screens/UserDetailsReward.js";
function App() {
  return (
      <CartProvider>
      <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/home" element={<Home1 />} />
          <Route exact path="/shop1" element={<Shop1 />} />
          <Route exact path="/blogs" element={<Blogs />} />
          <Route exact path="/blog1" element={<Blog1 />} />
          <Route exact path="/blog2" element={<Blog2 />} />
          <Route exact path="/blog3" element={<Blog3 />} />
          <Route exact path="/blog4" element={<Blog4 />} />
          <Route exact path="/blog5" element={<Blog5 />} />
          <Route exact path="/blog6" element={<Blog6 />} />
          <Route exact path="/blog7" element={<Blog7 />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/createseller" element={<SellerSignup />} />
          <Route exact path="/loginseller" element={<SellerLogin />} />
          <Route exact path="/createbuyer" element={<BuyerSignup />} />
          <Route exact path="/loginbuyer" element={<BuyerLogin />} />
          <Route exact path="/marketplace" element={<Marketplace />} />
          <Route exact path="/auction" element={<BargainPrice />} />
          <Route exact path="/selectitems" element={<SelectItems />} />
          <Route exact path="/HomeFacility" element={<HomeFacility />} />
          <Route exact path="/Product" element={<Product />} />
          <Route exact path="/myOrder" element={<MyOrder />} />
          <Route exact path="/SellerList" element={<SellerList />} />
          <Route exact path="/PricesonMarketplace" element={<PricesonMarketplace />} />
          <Route exact path="/RewardPointsProvider" element={<RewardContextProvider />} />

          <Route exact path="/Option" element={<Option />} />
          <Route exact path="/Additemstodonate" element={<Additemsdonate />} />
          <Route exact path="/Emailchalo" element={<Emailchalo />} />
          <Route exact path="/education" element={<Education />} />
          <Route exact path="/diy" element={<DIY />} />
          <Route exact path="/carbonFootprints" element={<CarbonFootprints />} />
          <Route exact path="/Notification" element={<Notification />} />
          <Route exact path="/ApprovedProducts" element={<ApprovedProducts />} />
          <Route exact path="/ChartExample" element={<ChartExample />} />
          <Route exact path="/Pickup" element={<Pickup />} />
          <Route exact path="/SelectItemsRecycle" element={<SelectItemsRecycle />} />
          <Route exact path="/SelectItemsDonate" element={<SelectItemsDonate />} />
          <Route exact path="/Stats" element={<Stats />} />
          <Route exact path="/UserDetailsReward" element={<UserDetailsReward />} />

        </Routes>
      </div>
    </Router>
    </CartProvider>
  );
}

export default App;
