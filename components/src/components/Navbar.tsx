import classNames from "classnames"
import { Atom, Handbag, Camera, Settings, Info, ArrowDown } from "lucide-react"
import { useState } from "react"

type NavItemProps = {
    icon: React.ReactNode,
    label: string,
    arrow?: React.ReactNode,
    click?: () => void,
    children?: React.ReactNode
}

type DropdownListProps = {
    droptype?: string,
    labels: string[]
    isOpen: boolean,
}

type ListProps = {
    isOpen: boolean
    children?: React.ReactNode
}

function List({ children, isOpen }: ListProps) {
    return (
    <ul
        className={classNames(
          "absolute top-full left-0 mt-2 w-40 bg-white/15 border border-white/6  p-2 text-white backdrop-blur-xl rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 ease-in-out",
          {
            "opacity-100 translate-y-0": isOpen,
            "opacity-0 -translate-y-2 pointer-events-none": !isOpen
          }
        )}
      >
        {children}
      </ul>
    )
}

function ListElement({ label }: { label: string }) {
    return (
        <li className="px-4 py-2 hover:bg-white/55 rounded-full transition-all ease-in-out cursor-pointer">{label}</li>
    )
}

function NavItem({ icon, label, arrow, click, children }: NavItemProps) {
    return (
        <span className="flex relative items-center shadow-[0_0_10px_rgba(0,0,0,0.3)] rounded-full px-2 gap-2 cursor-pointer" onClick={click}>
            {icon}
            {label}
            {arrow}
            {children}
        </span>
    )
}

function DropdownList({ isOpen, labels }: DropdownListProps) {
    return (
      <List isOpen={isOpen}>
        {labels.map((label) => (
            <ListElement key={label} label={label} />
        ))}
      </List>
    )
}

export default function Navbar() {
    const [isProductDropdown, setProductDropdown] = useState(false)
    const [isGalleryDropdown, setGalleryDropdown] = useState(false)

    return (
        <header className="sticky poppins-regular flex justify-between top-0 w-full bg-white/20 border border-white/10 text-white backdrop-blur-xl rounded-2xl p-2">
            <nav className="flex gap-2">
                <NavItem icon={<Atom />} label="Navbar" />
            </nav>
            <nav className="flex gap-10">
                <NavItem icon={<Handbag />} label="Products" arrow={<ArrowDown size={20} className={classNames("transition-all ease-in-out", {"rotate-180": isProductDropdown})} />} click={() => setProductDropdown(!isProductDropdown)}>
                    <DropdownList labels={["iPhone 17", "RTX 5090"]} isOpen={isProductDropdown}/>
                </NavItem>
                <NavItem icon={<Camera />} label="Gallery" arrow={<ArrowDown size={20} className={classNames("transition-all ease-in-out", {"rotate-180": isGalleryDropdown})} />} click={() => setGalleryDropdown(!isGalleryDropdown)} >
                    <DropdownList labels={["2025", "2026"]} isOpen={isGalleryDropdown}/>
                </NavItem>
                <NavItem icon={<Settings />} label="Settings" />
                <NavItem icon={<Info />} label="Info" />
            </nav>
            <button className="rounded-full h-10 w-32 cursor-pointer shadow-[0_0_10px_rgba(0,0,0,0.3)] bg-linear-to-r bg-left  bg-[length:200%_200%] from-purple-500 via-red-500 to-yellow-500 font-bold hover:bg-right hover:scale-105 transition-all ease-in-out duration-200 ">
                Start now!
            </button>
        </header>
    )
}