
import getBillboard from "@/actions/get-billboards";
import getProducts from "@/actions/get-products";
import Billboard from "@/components/billboard";
import ProductLists from "@/components/product-list";
import Container from "@/components/ui/container";
import React from "react";

export const revalidate=0

const HomePage = async() => {

  const billboarddata=await getBillboard("81e89a57-da6c-434e-a05c-41701d2d7890")
  
  const products=await getProducts({isFeatured:true})

  return <Container>
    <div className="space-y-10 pb-10">
      <Billboard data={billboarddata}/>
    </div>
    <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
      <ProductLists title="Featured Products" items={products}/>
    </div>
  </Container>;
};

export default HomePage;
