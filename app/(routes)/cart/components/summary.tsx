import Currency from "@/components/currency";
import Button from "@/components/ui/button";
import useCart from "@/hooks/use-cart";
import { useSearchParams } from "next/navigation";

const Summary = () => {

    const searchParams=useSearchParams()
    const items=useCart((state)=>state.items)
    const removeAll=useCart((state)=>state.removeAll)

    const totalPrice=items.reduce((total,item)=>{
        return total+Number(item.price)
    },0)

  return (
    <div className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8">
      {/* order summary */}
      <h2 className="text-lg font-medium text-gray-900">Order Summary</h2>
      <div className="mt-6 space-y-4">
        <div className="flex items-center justify-between border-t border-gray-200 pt-4">
          {/* order total */}
          <div className="text-base font-medium text-gray-900">Order total</div>
          <Currency value={totalPrice}/>
        </div>
      </div>
      <Button className="w-full mt-6">
        Checkout
      </Button>
    </div>
  );
};

export default Summary;
