import Image from "next/image";
import Link from "next/link";

export default function HomeCard({item}){

    return(
        <Link className="flex flex-col items-start gap-[12px] pb-[12px] w-[176px]" href={`/item/${item.id}`}>
            <div className="rounded-[12px] w-[176px] h-[176px] overflow-hidden bg-white">
                <Image src={item.image} width={176} height={176} alt={item.title} />
            </div>
            <h1 className="text-[16px] font-medium">{item.title}</h1>
            <p className="text-[#ADADAD] text-[14px] self-stretch">
                {item.description.slice(0,30)} - ${item.price}
            </p>
        </Link>
    );
}