import Image from 'next/image';

export default function NavBar() {
  return (
    <nav className="flex items-center justify-between bg-[#f2efe7] px-10 py-6 font-['Adelphi_PE_Variable']">
      {/* Logo */}
      <div className="flex items-center">
  
          <Image src="/logo.svg" alt="The Dirt Herders" width={140} height={40} />
   
      </div>
      {/* Links */}
      <div className="flex flex-row items-center gap-[49px]">
        <a href="#" className="text-black text-[14px] capitalize font-normal leading-[14px]">Home</a>
        <a href="#" className="text-black text-[14px] capitalize font-normal leading-[14px]">About Us</a>
        <div className="flex flex-row items-center gap-1 cursor-pointer">
          <span className="text-black text-[14px] capitalize font-normal leading-[14px]">Our Services</span>
          <svg width="12" height="8" viewBox="0 0 12 8" fill="none"><path d="M1 1L6 7L11 1" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </div>
        <div className="flex flex-row items-center gap-1 cursor-pointer">
          <span className="text-black text-[14px] capitalize font-normal leading-[14px]">Service Areas</span>
          <svg width="12" height="8" viewBox="0 0 12 8" fill="none"><path d="M1 1L6 7L11 1" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </div>
        <a href="#" className="text-black text-[14px] capitalize font-normal leading-[14px]">Previous Jobs</a>
      </div>
      {/* CTA Button */}
      <button className="bg-[#25344b] text-white rounded-[16px_0_16px_0] px-6 py-2 text-[14px] font-normal capitalize">
        Book Free Quote
      </button>
    </nav>
  );
} 