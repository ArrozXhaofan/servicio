import Image from "next/image"

export default function Nav() {
  return (
    <nav className="absolute w-full h-8  bg-gradient-to-r from-[#9C4A9F] to-[#FB923C] flex justify-center items-center">
      <Image src={'/images/futuraLogo2.png'} width={80} height={80} alt="dasas" />
    </nav>
  )
}
