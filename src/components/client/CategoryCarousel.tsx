




// required imports
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";




// adding the required imports
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Item } from "@/lib/interface/clientInterface";
import OrderDialog from "@/components/client/OrderDialog";

import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";

import { FaRupeeSign } from "react-icons/fa";

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

function DialogHandler(props: Item) {
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
        <OrderDialog
          name={props.name}
          description={props.description}
          price={props.price}
          image={props.image}
        />
      </DialogContent>
    </Dialog>
  );
}











// list to cards / group of cards | products
export default function CategoryCarousel({ category }: { category: string }) {
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
          <DialogHandler
            name="Food"
            description="This is a food item"
            price={100}
            image={image}
          />
        </CarouselItem>
        <CarouselItem>
          {/* cards/ items */}
          {/* example card */}
          <DialogHandler
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