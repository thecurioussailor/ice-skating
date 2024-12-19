import Image from "next/image"
import Hammer from "../public/hammer.png"
import NoProject1 from "../public/noproject1.png";
const NoProject = () => {
  return (
    <div className="flex relative justify-center w-[840px] h-[209px] rounded-[16px] overflow-hidden px-6 py-[40px] gap-[40px] bg-white">
        <div className="flex flex-col justify-center items-center w-[404px] h-[129px] gap-4 z-50">
            <Image
                src={Hammer}
                alt="Hammer"
            />
            <div className="flex flex-col justify-center items-center w-[404px] h-[73px] gap-2">
                <p className="w-[235px] h-[23px] font-tasaDisplay font-bold text-[20px] leading-[23.2px] tracking-tight text-[#0A2935]">Get started with Ice Staking!</p>
                <p className="w-full h-[42px] opacity-60 font-jetbrains font-medium text-[16px] leading-[21.2px] text-center text-[#0A2935]">There are no projects built using Ice Staking yet, be the first one to build it!</p>
            </div>
        </div>
        <div className="absolute -bottom-0">
            <Image
                src={NoProject1}
                alt="NO Project"
            />
        </div>
    </div>
  )
}

export default NoProject