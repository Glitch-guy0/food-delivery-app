import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Separator } from "@/components/ui/separator"



// icons
import { FaRupeeSign } from "react-icons/fa";
import { Input } from "@/components/ui/input";


type Orders = {
  items: [];
};

export default function userOrderPage() {
  return (
    <div>
      <h1 className="text-3xl m-4 font-semibold">Your Orders</h1>
      <Table>
        {/* footer showing the total */}
        <TableCaption className="text-right mx-4">Total: <FaRupeeSign className="inline-block"/>100</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Item</TableHead>
            <TableHead>Quantity</TableHead>
            <TableHead>Rate</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>

        {/* Data Section */}
        <TableBody className="">

          <TableRow>
            <TableCell className="font-medium">INV001</TableCell>
            <TableCell className="text-left">
              <Input type="number" className="peer shadow mx-2 border-none invalid:text-red-400" min={1} max={15}/>
              <p className="text-red-400 text-sm hidden peer-invalid:block">Limit Exceeded (max 15)</p>
              </TableCell>
            <TableCell>Credit Card</TableCell>
            <TableCell className="text-right tracking-tighter"><FaRupeeSign className="inline-block"/>250.00</TableCell>
          </TableRow>
          {/* multiples from here */}
          <TableRow>
            <TableCell className="font-medium">INV001</TableCell>
            <TableCell className="text-left">
              <Input type="number" className="peer shadow mx-2 border-none invalid:text-red-400" min={1} max={15}/>
              <p className="text-red-400 text-sm hidden peer-invalid:block">Limit Exceeded (max 15)</p>
              </TableCell>
            <TableCell>Credit Card</TableCell>
            <TableCell className="text-right tracking-tighter"><FaRupeeSign className="inline-block"/>250.00</TableCell>
          </TableRow>
          {/* multiples from here */}
          <TableRow>
            <TableCell className="font-medium">INV001</TableCell>
            <TableCell className="text-left">
              <Input type="number" className="peer shadow mx-2 border-none invalid:text-red-400" min={1} max={15}/>
              <p className="text-red-400 text-sm hidden peer-invalid:block">Limit Exceeded (max 15)</p>
              </TableCell>
            <TableCell>Credit Card</TableCell>
            <TableCell className="text-right tracking-tighter"><FaRupeeSign className="inline-block"/>250.00</TableCell>
          </TableRow>
          {/* multiples from here */}
          <TableRow>
            <TableCell className="font-medium">INV001</TableCell>
            <TableCell className="text-left">
              <Input type="number" className="peer shadow mx-2 border-none invalid:text-red-400" min={1} max={15}/>
              <p className="text-red-400 text-sm hidden peer-invalid:block">Limit Exceeded (max 15)</p>
              </TableCell>
            <TableCell>Credit Card</TableCell>
            <TableCell className="text-right tracking-tighter"><FaRupeeSign className="inline-block"/>250.00</TableCell>
          </TableRow>
          {/* multiples from here */}
          <TableRow>
            <TableCell className="font-medium">INV001</TableCell>
            <TableCell className="text-left">
              <Input type="number" className="peer shadow mx-2 border-none invalid:text-red-400" min={1} max={15}/>
              <p className="text-red-400 text-sm hidden peer-invalid:block">Limit Exceeded (max 15)</p>
              </TableCell>
            <TableCell>Credit Card</TableCell>
            <TableCell className="text-right tracking-tighter"><FaRupeeSign className="inline-block"/>250.00</TableCell>
          </TableRow>
          {/* multiples from here */}


          
          
        </TableBody>
      </Table>
      <Separator className="shadow-md"/>
      <h1 className="text-2xl mx-4 my-1 font-semibold">Address</h1>
      <h2 className="text-sm mx-4 -mt-2">Where to ship the order</h2>
      <textarea rows={3} className="outline-none text-lg rounded w-[80%] lg:w-[50%] mt-2 mx-4 resize-none bg-zinc-100"></textarea>
      <div className="mx-4 py-8 lg:py-4 flex gap-8 items-center *:font-semibold *:text-lg">
        <Button variant="destructive" className="bg-rose-500 rounded hover:bg-red-500/80 text-white">Cancel</Button>
        <Button variant="destructive" className="bg-green-500 rounded hover:bg-green-500/80 text-white">Order</Button>      </div>
    </div>
  );
}
