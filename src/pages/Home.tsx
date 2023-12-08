import { useEffect, useState } from "react";

import Container from "@/components/Container";
import { Helmet } from "react-helmet";
import NavBar from "@/components/NavBar";
import ProductCard from "@/components/ProductCard";
import ProductCardSkeleton from "@/components/ProductCardSkeleton";
import { ProductProps } from "@/interface/product";
import Wrapper from "@/components/Wrapper";
import axios from "axios";

export default function Home() {
  const [products, setProducts] = useState<ProductProps[]>([]);
  const [loadingProducts, setLoadingProducts] = useState(true);
  useEffect(() => {
    fetchProducts();
  }, []);

  // get data from api
  const fetchProducts = async () => {
    try {
      const response = await axios
        .get("https://fakestoreapi.com/products")
        .then((res) => res.data);
      setProducts(response);
      setTimeout(() => {
        setLoadingProducts(false);
      }, 1000);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Wrapper>
        <NavBar />
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {loadingProducts ? (
              <>
                {[...Array(8)].map((_, index) => (
                  <ProductCardSkeleton key={index} />
                ))}
              </>
            ) : (
              <>
                {products.map((product, index) => (
                  <ProductCard key={index} product={product} />
                ))}
              </>
            )}
          </div>
        </Container>
      </Wrapper>
    </>
  );
}
