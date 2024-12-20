import Image from "next/image";
import Search from "../../public/search.svg";
import BlogCard from "@/components/BlogCard";
const blogs = [
    {
        imageUrl: "/employer.png",
        date: "11 AUGUST 2024",
        title: "Should employers use psychometric tests in recruitment?"
    },
    {
        imageUrl: "/blog2.png",
        date: "04 NOVEMBER 2024",
        title: "Why is everyone obsessing over Solana?"
    },
    {
        imageUrl: "/blog3.png",
        date: "05 MAY 2024",
        title: "A comprehensive guide at understanding how we fund events and how to properly utilise the funds."
    },
    {
        imageUrl: "/employer.png",
        date: "11 AUGUST 2024",
        title: "Should employers use psychometric tests in recruitment?"
    },
    {
        imageUrl: "/blog2.png",
        date: "04 NOVEMBER 2024",
        title: "Why is everyone obsessing over Solana?"
    },
    {
        imageUrl: "/blog3.png",
        date: "05 MAY 2024",
        title: "A comprehensive guide at understanding how we fund events and how to properly utilise the funds."
    }
]
const Blogs = () => {
  return (
    <div className="mb-36 mt-[60px]">
        <div className="flex flex-col w-[840px] gap-10">
            <div className="flex flex-col w-[840px] h-[144px] gap-5">
                <h1 className="w-[405px] h-[80px] font-tasaDisplay font-bold text-[40px] leading-[40px] text-transparent bg-clip-text bg-gradient-to-b from-[#0A2935] to-[#25ABE2] shadow-inner">Articles from the Community</h1>
                <div className="flex w-full h-[44px] justify-between">
                    <div className="flex flex-row items-center w-[365px] h-[44px] rounded-[12px] border-[3px] border-[#25ABE233] py-3 px-[20px] gap-2 bg-white">
                        <div className="w-[20px] h-[20px] opacity-80">
                            <Image
                                src={Search}
                                alt="Search"
                            />
                        </div>
                        <input className="w-[297px] h-[18px] opacity-60 placeholder-[#0A2935] font-jetbrains font-bold text-[14px] leading-[18.48px] text-[#0A2935] outline-none border-none" placeholder="Search"/>
                    </div>
                    <div className="flex w-[322px] h-[34px] gap-3">
                        <div className="flex justify-center items-center w-[91px] h-[34px] rounded-[12px] border-[3px] border-[#25ABE2B2] py-4 px-[20px] gap-[10px] bg-gradient-to-b from-[#25ABE2] to-[#00DDFF]">
                            <span className="flex justify-center items-center w-[51px] h-[18px] font-jetbrains font-bold text-[14px] leading-[18.48px] text-white">LATEST</span>
                        </div>
                        <div className="flex justify-center items-center w-[99px] h-[34px] rounded-[12px] border-[2px] py-2 px-5 bg-white border-[#FFFFFF29]">
                            <span className="w-[59px] h-[18px] font-jetbrains font-bold text-[14px] leading-[18.48px] text-[#25ABE2]">POPULAR</span>
                        </div>
                        <div className="flex justify-center items-center w-[108px] h-[34px] rounded-[12px] border-[2px] py-2 px-5 bg-white border-[#FFFFFF29]">
                            <span className="w-[68px] h-[18px] font-jetbrains font-bold text-[14px] leading-[18.48px] text-[#25ABE2]">TRENDING</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-3 w-[840px] gap-3">
                {blogs.map((blog, index )=> (<BlogCard key={index} imageUrl={blog.imageUrl} date={blog.date} title={blog.title} />))}
            </div>
        </div>
    </div>
  )
}

export default Blogs