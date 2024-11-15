// remove use client after use
"use client";


import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";


import { FaRupeeSign } from "react-icons/fa";
// client components
import { useEffect, useState } from "react";



// Types

type Item = {
  name: string;
  description: string;
  price: number;
  image: string;
  id?: string;
  qty?: number;
};
// end of type / interface declaration

function ProductDisplay(props: Item) {
  // style constants
  const addSubButtonStyle =
    "shadow-md rounded px-4 py-2";

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
            {/* table showing product qunatity and price */}
            {/* - button */}
            <Button variant="secondary" className={addSubButtonStyle} onClick={() => qtyHandler("sub")}>
              -
            </Button>
            <p>{qty}</p>
            {/* + button */}
            <Button variant="secondary" className={addSubButtonStyle} onClick={() => qtyHandler("add")}>
              +
            </Button>
          </div>
          <div>
            {/* hero button */}
            <Button className="px-4 py-2 bg-green-400 hover:bg-green-400/80 font-semibold text-xl mx-4">Order</Button>
          </div>
        </div>
        <div>
          {/* error message */}
          {qtyExcess && (<p className="text-rose-800 text-left px-2">Quantity Exceeded 15 Max</p>)}
        </div>
      </DialogHeader>
    </div>
  );
}

function DisplayDialog(props: Item) {
  return (
    <Dialog>
      <DialogTrigger>
        {/* the dialog preview card in carousel */}
        <ItemCard
          name={props.name}
          description={props.description}
          price={props.price}
          image={props.image}
        />
      </DialogTrigger>
      <DialogContent className="bg-white p-0 rounded-md">
        <ProductDisplay
          name={props.name}
          description={props.description}
          price={props.price}
          image={props.image}
        />
      </DialogContent>
    </Dialog>
  );
}

// card / product display card
function ItemCard(props: Item) {
  return (
    <Card className="shadow-md relative text-left">
      <div className=" min-h-[150px] h-[18vh] w-full overflow-hidden">
        <img src={props.image} alt="" className="object=center object-cover" />
      </div>
      <CardContent className="p-2">
        <CardTitle className="text-xl lg:text-2xl">Card Title</CardTitle>
        <CardDescription>Card Description</CardDescription>
        <p className="text-right w-full"><FaRupeeSign className="inline-block" />100</p>
      </CardContent>
    </Card>
  );
}

// list to cards / group of cards | products
function CategoryList({ category }: { category: string }) {
  // database call here and categorize and show the list and another database call at dialog section
  // remove this image link
  const image =
    "https://plus.unsplash.com/premium_vector-1713201017274-e9e97d783e75?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  return (
    <Carousel className="w-full min-h-[250px]">
      <CarouselContent>
        <CarouselItem className="shadow-lg">
          {/* cards/ items */}
          {/* example card */}
          <DisplayDialog
            name="Food"
            description="This is a food item"
            price={100}
            image={image}
          />
        </CarouselItem>
        <CarouselItem>
          {/* cards/ items */}
          {/* example card */}
          <DisplayDialog
            name="Food"
            description="This is a food item"
            price={100}
            image={image}
          />
        </CarouselItem>
        <CarouselItem>
          {/* cards/ items */}
          {/* example card */}
          <ItemCard
            name="Food"
            description="This is a food item"
            price={100}
            image={image}
          />
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  );
}

// client front page
export default function foodPage() {
  // class for category header
  const categoryHeader = "text-3xl text-semibold my-4";

  return (
    <>

      <div>
        <ul className="px-4 lg:px-8">
          <li>
            {/* <h1>categoy1</h1> */}
            <h1 className={categoryHeader}>Category 1</h1>
            {/* corosel 
                  cards
            */}
            <CategoryList category="category1" />
          </li>
          <li>
            {/* <h1>categoy1</h1> */}
            <h1 className={categoryHeader}>Category 2</h1>
            {/* corosel 
                  cards
            */}
            <CategoryList category="category1" />
          </li>
        </ul>
      </div>
    </>
  );
}
