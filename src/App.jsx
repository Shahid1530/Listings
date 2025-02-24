import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./components/Homepage";
import Aboutus from "./components/Aboutus";
import Blog from "./components/Blog";
import Blog_specific_page from "./components/Blog_specific_page";
import Contact from "./components/Contact";
import Custom_page from "./components/Custom_page";
import Listing_categories from "./components/Listing_categories";
import Listing_specific_page from "./components/Listing_specific_page";
import Pricing from "./components/Pricing";
import Listing_page from "./components/Listing_page";
import PropertyForm from "./components/Propertyform";
import BlogForm from "./components/BlogForm";
import ProductList from "./components/ProductList";
import Login from "./components/Login";
import Signup from "./components/Signup";
import OtpVerification from "./components/OtpVerification";
import ProtectedRoute from "./components/Protectedroute";
import './App.css'
import BlogList from "./components/BlogList";
import ContactsList from "./components/ContactsList";

const blogPostLoader = async ({ params }) => {
  const response = await fetch(`http://127.0.0.1:5000/api/blogs/${params.id}`);
  if (!response.ok) throw new Response("Not Found", { status: 404 });
  return response.json();
};
const blogsLoader = async () => {
  const response = await fetch(`http://127.0.0.1:5000/api/blogs/`);
  if (!response.ok) throw new Response("Not Found", { status: 404 });
  return response.json();
};

const router = createBrowserRouter([
  { path: "/", element: <Homepage />},
  { path: "/about", element: <Aboutus /> },
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <Signup /> },
  { path: "/otpverify", element: <OtpVerification /> },
  { path: "/blog", element: <Blog /> ,loader: blogsLoader},
  { path: "/blog/:id", element: <Blog_specific_page />, loader: blogPostLoader },
  { path: "/contact", element: <Contact /> },
  { path: "/contactdata", element: <ContactsList/> },
  { path: "/blogedit", element: <BlogList/> },
  { path: "/custom", element: <Custom_page /> },
  { path: "/categories", element: <Listing_categories /> },
  { path: "/pricing", element: <Pricing /> },
  { path: "/listings", element: <Listing_page /> },
  { path: "/createblog", element: <BlogForm/> },
  { path: "/edit", element: <ProductList /> },
  {
    path: "/listing/:id",
    element: <Listing_specific_page />,
    loader: async ({ params }) => {  // Correctly destructure params
      const [datasen, products] = await Promise.all([
        fetch(`http://127.0.0.1:5000/api/products/${params.id}`),  // Use params.id
        fetch("http://127.0.0.1:5000/api/products/")
      ]);
  
      if (!datasen.ok || !products.ok) {
        throw new Error("Failed to fetch data");
      }
  
      const data = await datasen.json();
      const product = await products.json();
  
      return { data, product };
    },
  },
  
  // ✅ Protected Route for "/add"
  {
    path: "/add",
    element: (
      <ProtectedRoute>
        <PropertyForm />
      </ProtectedRoute>
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
