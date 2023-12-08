import { useEffect, useState } from "react";

import ButtonAddCart from "@/components/ButtonAddCart";
import Container from "@/components/Container";
import { Helmet } from "react-helmet";
import NavBar from "@/components/NavBar";
import NotFound404 from "../404";
import ProductDetailSkeleton from "@/components/ProductDetailSkeleton";
import { ProductProps } from "@/interface/product";
import StarRating from "@/components/StarRating";
import Wrapper from "@/components/Wrapper";
import { addToCart } from "@/redux/reducer/cartReducer";
import axios from "axios";
import { formatCurrency } from "@/utils/formatCurrency";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

const getDataProduct = async (id: string): Promise<ProductProps> => {
  const response = await axios
    .get(`https://fakestoreapi.com/products/${id}`)
    .then((res) => res.data);
  return response;
};

export default function ProductDetail() {
  const dispatch = useDispatch();
  const params = useParams();
  const { id } = params as { id: string };
  const [dataNotFound, setDataNotFound] = useState(false);
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState<ProductProps>({} as ProductProps);
  useEffect(() => {
    const fetchData = async () => {
      const dataProduct = await getDataProduct(id);
      if (!dataProduct) setDataNotFound(true);
      setProduct(dataProduct);
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    };
    fetchData();
  }, [id]);

  if (dataNotFound) return <NotFound404 />;
  return (
    <>
      <Helmet>
        <title>Product Detail</title>
      </Helmet>
      <Wrapper>
        <NavBar />
        <Container className="mt-10">
          {loading ? (
            <>
              <ProductDetailSkeleton />
            </>
          ) : (
            <>
              <div className="flex flex-col lg:flex-row gap-20">
                <div className="w-96 lg:w-[640px] flex items-center justify-center">
                  <img
                    src={product.image}
                    alt={`img-${product.title}`}
                    className="w-full lg:w-[640px]"
                  />
                </div>
                <div>
                  <div className="flex flex-col gap-1">
                    <h1 className="text-xl font-medium">{product.title}</h1>
                    <span>{product.category}</span>
                    <StarRating rate={product.rating?.rate} />
                  </div>
                  <div className="mt-2 text-4xl font-bold">
                    {formatCurrency(product.price)}
                  </div>
                  <div className="flex flex-col gap-1 mt-10">
                    <span className="text-gray-600 text-sm font-bold">
                      Description
                    </span>
                    <p>
                      {product.description || "No description for this product"}
                    </p>
                  </div>
                  <div className="mt-4 flex items-center gap-2">
                    <ButtonAddCart
                      onClick={() =>
                        dispatch(addToCart({ ...product, quantity: 1 }))
                      }
                    />
                  </div>
                </div>
              </div>
            </>
          )}
        </Container>
      </Wrapper>
    </>
  );
}
