import { Atom, Handbag, Camera, Settings, Info, Smartphone, Bike } from "lucide-react"
import DropdownButton from "./DropDownButton";

function NavItem({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <span className="flex items-center shadow-[0_0_10px_rgba(0,0,0,0.3)] rounded-full px-2 gap-2 cursor-pointer">
      {icon}
      {label}
    </span>
  )
}

export default function Navbar() {
  return (
    <header className="sticky poppins-regular flex justify-between top-0 w-full bg-white/20 border border-white/10 text-white backdrop-blur-xl py-2">
      <nav className="flex gap-2">
        <NavItem icon={<Atom />} label="Navbar" />
      </nav>

      <nav className="flex gap-10">
        <DropdownButton
          icon={<Handbag />}
          label="Products"
          items={[
            { label: "iPhone 17", icon: <Smartphone size={16} /> },
            { label: "Bike", icon: <Bike size={16} /> },
          ]}
        />

        <DropdownButton
          icon={<Camera />}
          label="Gallery"
          items={[
            { label: "2025" },
            { label: "2026" },
          ]}
        />

        <NavItem icon={<Settings />} label="Settings" />
        <NavItem icon={<Info />} label="Info" />
      </nav>

      <button className="rounded-full h-10 w-32 cursor-pointer shadow-[0_0_10px_rgba(0,0,0,0.3)] bg-linear-to-r bg-left bg-[length:200%_200%] from-purple-500 via-red-500 to-yellow-500 font-bold hover:bg-right hover:scale-105 transition-all ease-in-out duration-200">
        Start now!
      </button>
    </header>
  )
}