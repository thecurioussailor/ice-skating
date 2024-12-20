import Image from "next/image";
import solana from "../public/solana.png";
import solana113 from "../public/solana113.svg";
import Line184 from "../public/Line184.png";
import Chaveronright from "../public/Chevronright.svg";
import HeroVector from "../public/Frame1000003998.png";
import HeroTop from "../public/HeroTopLevel.svg";
const Hero = () => {
  return (
    <div className="flex top-[81px] h-[691px] px-[60px] gap-[10px]">
        <div className="relative flex w-[1160px] h-[691px] rounded-[32px]">
            <div className="flex flex-col min-w-[552px] w-auto min-h-[363px] h-auto mt-[135.5px] ml-[160px] gap-[60px] z-10">
                <div className="flex flex-col min-w-[512px] w-auto min-h-[244px] h-auto gap-8">
                    <div className="flex relative w-[414px] min-h-[30px] h-auto rounded-[10px] border-2 drop-shadow-custom-blue backdrop-blur-sm border-[#25ABE21F] py-[6px] px-3 gap-4 bg-[#F1F9FF1F]">
                        <div className="absolute -right-2 -top-3">
                            <Image
                                src={HeroTop}
                                alt="Hero Top"
                            />
                        </div>
                        <p className="font-jetbrains w-[100px] h-[18px] font-bold text-[14px] leading-[18.48px] text-center text-transparent bg-clip-text bg-gradient-to-b from-[#0A2935] to-[#25ABE2]">$105M TVL</p>
                        <div className="border-2 border-[#25ABE2] opacity-[24%]"></div>
                        <p className="font-jetbrains w-[126px] h-[18px] font-bold text-[14px] leading-[18.48px] text-center text-transparent bg-clip-text bg-gradient-to-b from-[#0A2935] to-[#25ABE2]">5.2M SOL Staked</p>
                        <div className="border-2 border-[#25ABE2] opacity-[24%]"></div>
                        <p className="font-jetbrains w-[100px] h-[18px] font-bold text-[14px] leading-[18.48px] text-center text-transparent bg-clip-text bg-gradient-to-b from-[#0A2935] to-[#25ABE2]">12.7% APY</p>
                    </div>
                    <div className="flex flex-col min-w-[512px] w-auto min-h-[182px] h-auto gap-4">
                        <div className="flex flex-col w-[498px] h-[124px] gap-1">
                            <div className="flex w-[352px] h-[60px] gap-3">
                                <div className="flex items-center w-[171px] h-[60px] gap-[6px]">
                                    <p className="w-[125px] h-[60px] font-tasaDisplay font-bold text-[52px] leading-[60.32px] text-center text-transparent bg-clip-text bg-gradient-to-b from-[#25ABE2] to-[#00DDFF]">$SOL</p>
                                    <div className="relative w-[40px] h-[40px] rounded-[78px] bg-[#0A2935] ">
                                        <Image
                                            src={solana}
                                            width={23.69}
                                            height={18.95}
                                            alt="solana logo"
                                            className="top-[10.32px] absolute left-[8.39px]"
                                        />
                                    </div>
                                </div>
                                <p className="w-[169px] h-[60px] font-tasaDisplay font-bold text-center leading-[60.32px] text-[52px] text-transparent bg-clip-text bg-gradient-to-b from-[#0A2935] to-[#25ABE2] shadow-[0_1px_2px_0_rgba(255,255,255,0.2)]">Backed</p>
                            </div>
                            <p className="w-[498px] h-[60px] font-tasaDisplay font-bold text-[52px] text-3xl leading-[60.32px] text-center">Infrastructure Funding</p>
                        </div>
                        <p className="font-jetbrains w-[512px] h-[42px] text-[16px] opacity-60 leading-[21.12px] text-[#0A2935] font-medium">
                            Ice Staking is an initiative to help fund open source infrastructure on Solana
                        </p>
                    </div>
                </div>
                <div className="w-[552px] flex items-center min-h-[59px] h-auto rounded-2xl justify-between py-2 px-[10px] bg-white">
                    <div className="flex items-center min-w-[137px] w-auto min-h-[32px] h-auto gap-[12px]">
                        <Image
                            src={solana113}
                            width={32}
                            height={32}
                            alt="Solana logo"
                        />
                        <input className="w-[93px] h-[19px] opacity-40 font-tasaDisplay font-semibold text-[16px] leading-[18.56px] placeholder-[#0A2935] text-[#0A2935] tracking-tight outline-none" placeholder="Enter Amount"/>
                    </div>
                    <div className="flex min-w-[260px] w-auto min-h-[43px] h-auto gap-[20px]">
                        <Image
                            src={Line184}
                            width={2}
                            alt="Line 184"
                        />
                        <div className="flex items-center min-w-[115px] w-auto min-h-[20px] h-auto gap-[10px]">
                            <p className="w-[85px] h-[19px] font-tasaDisplay font-semibold text-[16px] leading-[18.56px] tracking-tight text-center text-[#0A2935]">Native Stake</p>
                            <Image
                                src={Chaveronright}
                                width={20}
                                height={20}
                                alt="dropdown"
                            />
                        </div>
                        <div className="flex justify-center items-center w-[105px] min-h-[43px] h-auto rounded-[12px] border-[3px] border-[#25ABE2B2] py-3 px-[20px] bg-gradient-to-b from-[#25ABE2] to-[#00DDFF]">
                            <button className="w-[39px] h-[19px] font-tasaDisplay font-semibold tracking-tight text-center text-[16px] leading-[18.56px] text-white">
                                Stake
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute w-[585.4px] h-[592px] top-[1px] left-[575px] z-0">
                <Image
                    src={HeroVector}
                    alt="Hero"
                />
            </div>
        </div>
    </div>
  )
}

export default Hero