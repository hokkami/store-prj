import { useState } from "react";
import { useRoutes } from "react-router-dom";
import Topbar from "./components/Topbar/Topbar";
import routes from "./routes";
import Footer from './components/Footer/Footer'
import { products , question } from './datas'
import productsContext from './Context/ProductsContext'
import Header from "./components/Header/Header";

//بدست آوردن تمامی برند ها بصورت غیر  تکراری با استفاده از set
const allBrands = ['همه', ...new Set(products.map(menu => menu.brand))]

function App() {


  let router = useRoutes(routes)

  const [allProducts, setAllProducts] = useState(products) //استیت برای تمامی محصولات موجود در فابل دیتا
  const [userBag, setUserBag] = useState([])//استیت برای سبد خرید کاربر
  const [isShowToast, setIsShowToast] = useState(false)//استیت برای نمایش توست
  const [isShowBag, setIsShowBag] = useState(false)//استیت برای نمایش سبد خرید  
  const [brands, setBrands] = useState(allBrands)
  const [questions , setQuestions] = useState(question)

  const filterMenus = (brand) => {
    if (brand === 'همه') {
      setAllProducts(products)
      console.log(products);
      return
    }

    let filteredMenus = products.filter(product => product.brand === brand);
    console.log(filteredMenus);
    setAllProducts(filteredMenus);
  }

  return (
    <div>
      <productsContext.Provider value={{
        allProducts,
        setAllProducts,
        userBag,
        setUserBag,
        isShowToast,
        setIsShowToast,
        isShowBag,
        setIsShowBag,
        brands,
        setBrands,
        filterMenus
      }}>
        <Topbar />
        {router}
        <Footer />
      </productsContext.Provider>
    </div>
  );
}

export default App;
