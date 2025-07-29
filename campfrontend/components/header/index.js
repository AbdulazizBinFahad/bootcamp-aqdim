import Image from "next/image";
import Link from "next/link";

export default function Header() {
    
  return (
    <div className="flex px-10 py-3 border-b border-[#E5E8EB] justify-between">
        <div className="flex">
            <Link className="flex items-center" href={"/"}>
                <Image src={"/logo.svg"} width={16} height={16} alt="Logo"/>
                <h1 className="font-bold text-[18px] mr-[32px] ml-[16px]">ShopAll</h1>
            </Link>
            <div className="flex gap-[36px] items-center">
                <Link className="font-medium text-[14px]" href={"/"}>Home</Link>
                <Link className="font-medium text-[14px]" href={"/about"}>About Us</Link>
                <Link className="font-medium text-[14px]" href={"/contact"}>Contact</Link>
            </div>
        </div>
        <div className="flex items-center gap-[32px]">
            <div className="flex bg-[#363636] rounded-[12px] items-center">
                <Image src={"/icons/search.svg"} width={24} height={24} alt="Search Icon" className="mb-[8px] mt-[8px] ml-[16px]"/>
                <input placeholder="Search" type="text" className="mt-[8px] mb-[8px] ml-[8px] mr-[16px] w-[120px]"/>
            </div>
            <div className=" flex h-[40px] px-[10px] justify-center items-center gap-[8px] bg-[#363636] rounded-[20px]">
                <Image src={"/icons/cart.svg"} width={20} height={20} alt="Cart Icon"/>
            </div>
        </div>
    </div>
  );
}