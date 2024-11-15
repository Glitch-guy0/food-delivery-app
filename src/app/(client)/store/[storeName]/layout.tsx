import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";


// icons
import { FaPhone } from "react-icons/fa6";

export default function storeDetails({
  children, params
}: {
  children: React.ReactNode,
  params: { storeName: string }
}) {
  return (
    <>
      <div className=" w-full my-4">
        <div className="flex px-4 lg:px-6 py-2 lg:py-4 items-center gap-6 lg:gap-12">
        <Avatar className="size-[14vmax] text-black rounded-none">
          <AvatarImage src="https://github.com/shadcn.png" className="" />
        </Avatar>
          <div className="space-y-1">
          <h1 className="text-3xl font-semibold">{params.storeName}</h1>
          <h4 className="text-sm"><strong>Address:</strong> {"some villa @ villa, earths"}</h4>
          <h2 className="text-lg"><FaPhone className="inline-block mr-2" />+91 {"4343545345"}</h2>
          </div>
        </div>
        <div>

        </div>
      </div>
      {children}
    </>
  );
}
