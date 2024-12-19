import Image from "next/image";
import OcraLogo from "../public/orca-logo.png";
import LineDefi from "../public/DefiLine185.png";
import Globe from "../public/globe2.svg";
import Github from "../public/githab.svg";
interface DefiProjectProps {
    title: string; 
    description: string;
    content: string;
    imageUrl: string;
  }
const DefiProjectCard = ({title, description, content, imageUrl}: DefiProjectProps) => {
  return (
    <div className="flex flex-col w-[414px] h-[267px] rounded-[16px] p-6 gap-[40px] bg-white">
        <div className="flex w-[366px] h-[147px] gap-[20px]">
            <div className="flex flex-col gap-4">
                <div className="flex gap-4">
                    <Image
                        src={imageUrl}
                        width={52}
                        height={52}
                        alt="Ocra Logo"
                    />
                    <div className="flex flex-col gap-2">
                        <p className="font-tasaDisplay font-bold text-[20px] leading-[23.3px] text-[#0A2935]">{title}</p>
                        <p className="w-[298px] h-[19px] opacity-60 font-tasaDisplay font-medium text-[16px] leading-[18.56px] text-[#0A2935]">{description}</p>
                    </div>
                </div>
                <Image
                    src={LineDefi}
                    alt="dotted line"
                />
                <p className="w-[366px] h-[63px] font-jetbrains text-[16px] font-medium leading-[21.12px] text-[#0A2935]">{content}</p>
            </div>
        </div>
        <div className="flex min-w-[76px] w-auto h-[32px] gap-3">
            <div className="flex text-white justify-center items-center border-2 border-[#FFFFFF1F] w-[32px] h-[32px] bg-[#0A2935] rounded-full">
                <Image
                    src={Globe}
                    width={20}
                    height={20}
                    alt="Globe"
                />
            </div>
            <div>
                <Image
                    src={Github}
                    width={32}
                    height={32}
                    alt="Github"
                />
            </div>
        </div> 
    </div>
  )
}

export default DefiProjectCard