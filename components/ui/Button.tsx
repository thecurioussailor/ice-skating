const Button = ({title}: {title: string}) => {
  return (
    <div className="flex items-center w-auto h-[40px] rounded-[12px] border-[3px] border-[#25ABE233] py-3 px-[20px] gap-[10px] bg-[#CDEBFF]">
        <span className="w-[65px] h-[16px] font-tasaDisplay font-semibold text-[14px] leading-[16.24px] text-center text-[#25ABE2] tracking-tighter">{title}</span>
    </div>
  )
}

export default Button