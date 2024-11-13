
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button";

import { RiShoppingCart2Line } from "react-icons/ri";


function Navbar({children}:{children:React.ReactNode}){
  return(
    <nav className=" shadow-md w-full min-h-[80px] flex justify-between items-center px-4 lg:px-8 relative">
      {children}
    </nav>
  )
}
function Userinfo(){
  return(<>
    {/* 
      avatar
      username
      logout
    */}
    <div  className="flex items-center gap-4  font-bold text-lg h-full">
    <Avatar className="size-[5vmax] lg:size-[4vmax] text-black ">
      <AvatarImage src="https://github.com/shadcn.png" alt="DP" />
      <AvatarFallback>DP</AvatarFallback>
    </Avatar>
      <h1 className="text-xl">Username</h1>
      <Button variant="destructive" className="rounded">Logout</Button>
    </div>
  </>)
}

export default function foodPage(){
  return(
    <>
      <Navbar>
        <Userinfo />
        <RiShoppingCart2Line  className="text-3xl text-blue-600 hover:text-blue-600/80"/>
      </Navbar>
      <div>
        <ul>
          <li>
            {/* <h1>categoy1</h1> */}
            {/* corosel 
                  cards
            */}

          </li>

        </ul>
      </div>
    </>
  );
}