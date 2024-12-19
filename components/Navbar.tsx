import Image from 'next/image';
import Logo from '../public/logo.svg';
const Navbar = () => {
  return (
    <div className='flex justify-between px-[220px] py-5 h-20 w-[1280px] max-w-[2000px]'>
        <Image
            src={Logo}
            width={40.21}
            height={31.25}
            alt="Picture of the author"
        />
        <div className='flex gap-5 min-h-10 h-auto min-w-[306px] w-auto items-center'>
            <span className='font-medium text-base leading-[21.12px] text-center text-[#0A2935] w-auto min-w-[77px] h-auto min-h-[21px] size-4 font-jetbrains'>Security</span>
            <span className='font-medium text-base leading-[21.12px] text-center text-[#0A2935] w-auto min-w-[58px] h-auto min-h-[21px] size-4 font-jetbrains'>System</span>
            <button className='min-w-[131px] w-auto min-h-[40px] h-auto rounded-xl border-[3px] border-[#25ABE233] bg-[#CDEBFF] py-3 px-5 gap-[10px]'>
                <span className='w-[91px] h-4 text-[14px] text-[#25ABE2] leading-[16.24px] text-center font-tasaDisplay font-semibold'>Connect Wallet</span>
            </button>
        </div>
    </div>
  )
}

export default Navbar