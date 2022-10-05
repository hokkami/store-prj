import BagPage from "./Pages/BagPage/BagPage";
import ContactUS from "./Pages/ContactUS/ContactUS";
import HistoryCompany from "./Pages/HistoryCompany/HistoryCompany";
import Home from "./Pages/Home/Home";
import Personnel from "./Pages/Personnel/Personnel";
import ProductDetails from "./Pages/ProductDetails/ProductDetails";
import Products from "./Pages/Products/Products";


let routes = [
    { path: '/', element: <Home /> },
    { path: '/product/:productID', element: <ProductDetails /> },
    { path: '/products', element: <Products /> },
    { path: '/bagPage', element: <BagPage /> },
    { path: '/historyCompany', element: <HistoryCompany /> },
    { path: '/personnel', element: <Personnel /> },
    { path: '/contactUs', element: <ContactUS /> },
    { path: '/survey', element: <ContactUS /> },
]

export default routes;