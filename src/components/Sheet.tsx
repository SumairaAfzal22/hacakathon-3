import { TiThMenu } from "react-icons/ti";

import { Button } from "@/components/ui/button"

import {
  Sheet,
  SheetContent,
  
  SheetTrigger,
} from "@/components/ui/sheet"
import Link from "next/link";
 
export function SheetDemo() {
  return (
    <Sheet>
      <SheetTrigger asChild className="md:hidden">
        <Button className=""> <TiThMenu /></Button>
      </SheetTrigger>
      <SheetContent >
      <ul className='  '>
                    <li className='grid grid-cols-1 gap-y-5'>
                        <Link href={""}>New&Featured</Link>
                        <Link href={"cart"}>Men</Link>
                        <Link href={""}>Women</Link>
                        <Link href={""}>Kids</Link>
                        <Link href={"productdetail"}>Sale</Link>
                        <Link href={""}>SNKRS</Link>
                    </li>
                </ul>
      </SheetContent>
    </Sheet>
  )
}
