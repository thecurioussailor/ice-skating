import Image from "next/image"

const BlogCard = ({imageUrl, date, title}: {imageUrl: string, date: string, title: string}) => {
  const limit = 43;
  return (
    <div className="w-[272px] min-h-[279px] h-auto rounded-[16px] overflow-hidden bg-white">
        <Image
            src={imageUrl}
            width={272}
            height={155}
            alt="Blog"
        />
        <div className="flex flex-col w-[272px] h-[124px] p-6 gap-3">
            <p className="w-[135px] h-[18px] font-jetbrains font-bold text-[14px] leading-[18.48px] text-[#25ABE2]">{date}</p>
            <p className="w-[224px] h-[46px] font-tasaDisplay font-bold text-[20px] leading-[23.2px] tracking-tight text-[#0A2935]">{title.length > limit ? `${title.slice(0, limit)}...`: `${title}`}</p>
        </div>
    </div>
  )
}

export default BlogCard