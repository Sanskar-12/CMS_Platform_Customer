
import getBillboard from "@/actions/get-billboards";
import Billboard from "@/components/billboard";
import Container from "@/components/ui/container";
import React from "react";

export const revalidate=0

const HomePage = async() => {

  const billboarddata=await getBillboard("81e89a57-da6c-434e-a05c-41701d2d7890")


  return <Container>
    <div className="space-y-10 pb-10">
      <Billboard data={billboarddata}/>
    </div>
  </Container>;
};

export default HomePage;
