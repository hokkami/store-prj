import React, { useContext, useState } from "react";
import "./Home.css";
import Header from "../../components/Header/Header";
import ProductsCard from "../../components/Card/ProductsCard";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import productsContext from "../../Context/ProductsContext";
import Bag from "../../components/Bag/Bag";
import ProductSection from "../../components/ProductSection/ProductSection";


export default function Home() {
  // const [selectProducts, setSelectProducts] = useState(customProduct);
  // const [allProducts, setAllProducts] = useState(products)



  // let filtredProducts = []
  // contextData.allProducts.map(porduct=>{
  //   porduct.infos.map(proc =>{
  //     if (proc.isShowHome) {
  //       filtredProducts.push(proc)
  //     }
  //   })
  //   // console.log(filtredProducts);
  // })


  return (
    <Container className="main-container-home">
      <Header/>
      <div className="home-container">
        <ProductSection/>
      </div>
      <Bag />
    </Container>
  );
}
