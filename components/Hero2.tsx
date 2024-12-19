import Image from "next/image"
import Hero2Frame1 from "../public/Hero2Frame1.png";
import Hero2Frame2 from "../public/Hero2Frame2.png";
import Hero2Frame3 from "../public/Hero2Frame3.png";
import DefiProjectCard from "./DefiProjectCard";
import BlogHeader from "../public/blogheader.png";
import Button from "./ui/Button";
import BlogCard from "./BlogCard";
import Link from "next/link";
import NoProject from "./NoProject";
const projects = [
    {
        title: "Orca",
        description:"DeFi for people, not programs",
        content: "Trade, farm, and build on Solana’s most user-friendly concentrated liquidity AMM.",
        imageUrl: "/orca-logo.png"
    },
    {
        title: "Jupiter Aggregator",
        description:"Built for smart traders who like money",
        content: "Jupiter offers a wide range of tokens in the Solana ecosystem.",
        imageUrl: "/jupiter-logo.png"
    },
    {
        title: "Solend",
        description:"The bank of the future, for everyone.",
        content: "Trade, farm, and build on Solana’s most user-friendly concentrated liquidity AMM.",
        imageUrl: "/solend.png"
    },
    {
        title: "Drift Protocol",
        description:"Trade with leverage. Earn yield.",
        content: "All your assets cross-margined and a lightning fast experience.",
        imageUrl: "/driftprotocol.png"
    },
]

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
]
const Hero2 = () => {
  return (
    <div className="flex flex-col gap-[120px] mb-[180px]">
        <section className="flex flex-col w-[840px] h-[502px] gap-[40px]">
            <div className="flex items-center w-full min-h-[80px] h-auto gap-[40px]">
                <p className="w-[405px] h-[80px] font-tasaDisplay font-bold text-[40px] leading-[40px] text-transparent bg-clip-text bg-gradient-to-b from-[#0A2935] to-[#25ABE2]">A safe & trusted staking solution</p>
                <p className="w-[395px] h-[42px] opacity-60 text-[16px] leading-[21.2px] font-jetbrains text-[#0A2935]">Ice Staking has been helping 147,548 people stake on Solana for 2+ years</p>
            </div>
            <div className="flex w-full h-[382px] gap-3">
                <Image
                    src={Hero2Frame1}
                    alt="Hero Image"
                />
                <div className="flex flex-col gap-3">
                    <Image
                        src={Hero2Frame2}
                        alt="Hero Image"
                    />
                    <Image
                        src={Hero2Frame3}
                        alt="Hero Image"
                    />
                </div>
            </div>
        </section>
        <section className="flex flex-col gap-[40px]">
            <div className="flex items-center justify-between w-[840px] min-h-[80px]">
                <p className="w-[450px] h-[80px] font-tasaDisplay font-bold text-[40px] leading-[40px] text-transparent bg-clip-text bg-gradient-to-b from-[#0A2935] to-[#25ABE2]">Top open source
                    projects under Ice Staking</p>
                <div className="flex items-center min-w-[103px] w-auto h-[40px] rounded-[12px] border-[3px] border-[#25ABE233] py-3 px-[20px] gap-[10px] bg-[#CDEBFF]">
                    <Link href={"/projects"}><span className="w-[63px] h-[16px] font-tasaDisplay font-semibold text-[14px] leading-[16.24px] text-center text-[#25ABE2]">Explore all</span></Link>
                </div>
            </div>
            
            {projects.length === 0 ? (<NoProject/>) : (<div className="grid grid-cols-2 gap-3">
                {projects.map(project => (<DefiProjectCard key={project.title} title={project.title} description={project.description} content={project.content} imageUrl={project.imageUrl}/>))}
            </div>)}
            
        </section>
        <section className="flex flex-col gap-6">
            <header className="flex flex-row items-center w-[840px] h-[279px] gap-[40px]">
                <div className="flex flex-col w-[528px] h-[198px] gap-[20px]">
                    <div className="flex flex-col w-full h-[138px] gap-4">
                        <p className="w-[358px] h-[80px] font-tasaDisplay font-bold text-[40px] leading-[40px] text-transparent bg-clip-text bg-gradient-to-b from-[#0A2935] to-[#25ABE2]">Browse through
                        the latest resources</p>
                        <p className="w-[528px] h-[42px] opacity-60 font-jetbrains font-medium text-[16px] leading-[21.12px] text-[#0A2935]">The thoughts, ideas and advice you need to get started with Ice Staking</p>
                    </div>
                    <div className="w-[105px]">
                        <Link href={"/blogs"}><Button title={"Read More"}/></Link>
                    </div>
                </div>
                <BlogCard imageUrl={BlogHeader.src} date="04 NOVEMBER 2024" title="Why is everyone obsessing over Solana?"/>
            </header>
            <div className="grid grid-cols-3 w-[840px] h-[279px] gap-3">
                {blogs.map(blog => (<BlogCard imageUrl={blog.imageUrl} date={blog.date} title={blog.title} />))}
            </div>
        </section>
    </div>
  )
}

export default Hero2