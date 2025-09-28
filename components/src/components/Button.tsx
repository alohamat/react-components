import type { ReactNode } from "react"

type ButtonProps = {
    innerContent?: ReactNode;
    click?: () => void;
}

export function Button({ innerContent, click } : ButtonProps) {
    return (
        <button className="bg-white/5 border border-white/6 rounded-2xl p-2 text-white backdrop-blur-sm shadow-lg hover:cursor-pointer hover:bg-black transition-colors duration-200" onClick={click}>{innerContent}</button>
    )
}
