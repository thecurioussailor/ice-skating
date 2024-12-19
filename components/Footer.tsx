import Image from "next/image";
import FooterLogo from "../public/footerlogo.svg";
import IceSkating from "../public/ICEstaking.svg";
import FooterTop from "../public/FooterTop@2x.png";
const Footer = () => {
  return (
    <div className="relative w-full">
        <div className="absolute -top-32 w-full">
            <Image
                src={FooterTop}
                alt="Footer Top"
            />
        </div>
        <footer className="relative flex justify-center w-full h-[367.78px] rounded-tl-[40px] rounded-tr-[40px] border-t-2 border-white bg-white">
            <div className="flex justify-between absolute w-[832px] h-[142px] top-[69.78px]">
                <div className="flex flex-col w-[400px] h-[142px] gap-4">
                    <h1 className="w-[64px] h-[16px] font-tasaDisplay text-[14px] font-semibold leading-[16.24px] text-[#25ABE2]">ABOUT US</h1>
                    <div className="flex flex-col w-[400px] h-[110px] gap-4">
                        <div>
                            <Image 
                                src={FooterLogo}
                                alt="Footer Logo"
                            />
                        </div>
                        <p className="w-[400px] h-[42px] font-jetbrains font-medium text-[16px] leading-[21.2px] text-[#0A2935]">Ice Staking is an initiative to help fund open source infrastructure on Solana</p>
                    </div>
                </div>
                <div className="flex flex-row w-[284px] h-[140px] gap-[44px]">
                    <div className="flex flex-col w-[120px] h-[140px] gap-4">
                        <h1 className="w-9 h-4 font-tasaDisplay font-semibold text-[14px] leading-[16.24px] text-[#25ABE2]">LINKS</h1>
                        <div className="flex flex-col w-[116px] h-[108px] gap-2">
                            <span className="w-[68px] h-[21px] opacity-60 font-jetbrains text-[16px] font-medium leading-[21.12px] text-[#0A2935]">Gitbook</span>
                            <span className="w-[68px] h-[21px] opacity-60 font-jetbrains text-[16px] font-medium leading-[21.12px] text-[#0A2935]">Sanctum</span>
                            <span className="w-[87px] h-[21px] opacity-60 font-jetbrains text-[16px] font-medium leading-[21.12px] text-[#0A2935]">Stakewizz</span>
                            <span className="w-[116px] h-[21px] opacity-60 font-jetbrains text-[16px] font-medium leading-[21.12px] text-[#0A2935]">Solana Beach</span>
                        </div>
                    </div>
                    <div className="flex flex-col w-[120px] h-[140px] gap-4">
                        <h1 className="w-9 h-4 font-tasaDisplay font-semibold text-[14px] leading-[16.24px] text-[#25ABE2]">SOCIAL</h1>
                        <div className="flex flex-col w-[116px] h-[108px] gap-2">
                            <span className="w-[68px] h-[21px] opacity-60 font-jetbrains text-[16px] font-medium leading-[21.12px] text-[#0A2935]">Twitter</span>
                            <span className="w-[68px] h-[21px] opacity-60 font-jetbrains text-[16px] font-medium leading-[21.12px] text-[#0A2935]">Discord</span>
                            <span className="w-[77px] h-[21px] opacity-60 font-jetbrains text-[16px] font-medium leading-[21.12px] text-[#0A2935]">Telegram</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute bottom-0">
                <Image
                    src={IceSkating}
                    alt="Ice Skating"
                />
            </div>
        </footer>
    </div>
  )
}

export default Footer