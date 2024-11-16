"use client";
// no DB calls here

import {
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

// client Interface
import { Item } from "@/lib/interface/clientInterface";

// icons
import { FaRupeeSign } from "react-icons/fa";

// react components
import { useState, useEffect } from "react";


// ****************************************************************** forgetting where the main function is so...
export default function OrderDialog(props: Item) {
  // style constants
  const addSubButtonStyle = "shadow-md rounded px-4 py-2";

  const [qty, setqty] = useState<number>(0);

  // ui states
  const [qtyExcess, setQtyExcess] = useState<boolean>(false);

  function qtyHandler(action: "add" | "sub") {
    if (action === "add" && qty < 15) {
      setqty(qty + 1);
    }
    if (action === "sub" && qty > 0) {
      setqty(qty - 1);
    }
  }

  useEffect(() => {
    if (qty >= 15) {
      setQtyExcess(true);
    } else {
      setQtyExcess(false);
    }
  }, [qty]);

  return (
    <div>
      <DialogHeader>
        {/*  */}
        {/* image */}
        <img
          src={props.image}
          className="min-h-[150px] h-[20vmax] lg:h-[15vmax]  w-full object-cover object-center"
        />
        <div className="text-left p-2 flex justify-between items-center">
          <div>
            {/* image / product description */}
            <DialogTitle className="text-2xl mt-2">{props.name}</DialogTitle>
            <DialogDescription>{props.description}</DialogDescription>
          </div>
          <div className="mr-4 font-semibold text-lg">
            {/* contains price and ratings */}
            <p>
              <FaRupeeSign className="inline-block" />
              {props.price}
            </p>
          </div>
        </div>
        <div className="w-full flex justify-between items-center">
          <div className="flex items-center gap-4 p-2">
            {/* consistency of buttons in order page and this page */}
            <Button
              variant="secondary"
              className={addSubButtonStyle}
              onClick={() => qtyHandler("sub")}
              >
              -
            </Button>
            <Button
              variant="secondary"
              className={addSubButtonStyle}
              onClick={() => qtyHandler("add")}
              >
              +
            </Button>
              {/* table showing product qunatity and price */}
              <p>{qty}</p>
          </div>
          <div>
            {/* hero button */}
            <Button className="px-4 py-2 bg-green-400 hover:bg-green-400/80 font-semibold text-xl mx-4">
              Order
            </Button>
          </div>
        </div>
        <div>
          {/* error message */}
          {qtyExcess && (
            <p className="text-rose-800 text-left px-2">
              Quantity Exceeded 15 Max
            </p>
          )}
        </div>
      </DialogHeader>
    </div>
  );
}
