import Image from "next/image";
import Link from "next/link";
import { CiTwitter, CiInstagram , CiFacebook  } from "react-icons/ci";

export default function Footer() {
    
  return (
    <div className="flex flex-col items-center justify-center py-10 px-5 gap-[24px] mx-auto w-[80%]">
        <div className="flex justify-between w-[100%] text-[#ADADAD]">
          <Link href={"#"} className="w-[160px] text-center">Privacy Policy</Link>
          <Link href={"#"} className="w-[160px] text-center">Terms of Service</Link>
          <Link href={"#"} className="w-[160px] text-center">Shipping & Returns</Link>
        </div>
        <div className="flex gap-[16px]">
          <Link href={"#"}>
            <CiTwitter size={24}/>
          </Link>
          <Link href={"#"}>
            <CiInstagram size={24}/>
          </Link>
          <Link href={"#"}>
            <CiFacebook  size={24}/>
          </Link>
        </div>
        <div>
          <h1 className="text-[16px] text-[#ADADAD]">@2024 ShopAll. All rights reserved.</h1>
        </div>
    </div>
  );
}