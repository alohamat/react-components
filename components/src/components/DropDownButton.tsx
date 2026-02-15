import React, { useState } from "react"
import classNames from "classnames"
import { ArrowDown } from "lucide-react"

export type DropdownItem = {
  label: string
  icon?: React.ReactNode
  onClick?: () => void
}

type DropdownButtonProps = {
  icon: React.ReactNode
  label: string
  items: DropdownItem[]
}

function List({ isOpen, children }: { isOpen: boolean; children: React.ReactNode }) {
  return (
    <ul
      className={classNames(
        "absolute top-full left-0 mt-2 w-40 bg-white/15 border border-white/6 p-2 text-white backdrop-blur-xl rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 ease-in-out",
        {
          "opacity-100 translate-y-0": isOpen,
          "opacity-0 -translate-y-2 pointer-events-none": !isOpen,
        }
      )}
    >
      {children}
    </ul>
  )
}

function ListElement({ label, icon, onClick }: DropdownItem) {
  return (
    <li
      onClick={onClick}
      className="flex items-center gap-2 py-2 px-4 hover:bg-white/55 rounded-full transition-all cursor-pointer"
    >
      {icon}
      <span>{label}</span>
    </li>
  )
}

export default function DropdownButton({
  icon,
  label,
  items,
}: DropdownButtonProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex items-center shadow-[0_0_10px_rgba(0,0,0,0.3)] rounded-full px-2 gap-2 py-2 cursor-pointer"
      >
        {icon}
        {label}
        <ArrowDown
          size={20}
          className={classNames("transition-all ease-in-out", {
            "rotate-180": isOpen,
          })}
        />
      </button>

      <List isOpen={isOpen}>
        {items.map((item) => (
          <ListElement
            key={item.label}
            label={item.label}
            icon={item.icon}
            onClick={item.onClick}
          />
        ))}
      </List>
    </div>
  )
}