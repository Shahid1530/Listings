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
import "./App.css";

// Loader function to fetch blog post data dynamically
const blogPostLoader = async ({ params }) => {
  const response = await fetch(`https://api.example.com/blogs/${params.id}`);
  if (!response.ok) throw new Response("Not Found", { status: 404 });
  return response.json();
};

// Router setup with loaders
const router = createBrowserRouter([
  { path: "/", element: <Homepage /> },
  { path: "/about", element: <Aboutus /> },
  { path: "/blog", element: <Blog /> },
  {
    path: "/blog/:id",
    element: <Blog_specific_page />,
    loader: blogPostLoader,
  },
  { path: "/contact", element: <Contact /> },
  { path: "/custom", element: <Custom_page /> },
  { path: "/categories", element: <Listing_categories /> },
  { path: "/pricing", element: <Pricing /> },
  { path: "/listings", element: <Listing_page /> },
  {
    path: "/listing/:id",
    element: <Listing_specific_page />,
    loader: async ({ params }) => {
      const res = await fetch(`https://api.example.com/listings/${params.id}`);
      if (!res.ok) throw new Response("Not Found", { status: 404 });
      return res.json();
    },
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
