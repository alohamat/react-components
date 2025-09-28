import type { ReactNode } from "react"

type GlassDivProps = {
    children?: ReactNode;
};

export function GlassDiv({ children }: GlassDivProps) {
    return (
        <div className="bg-white/5 border border-white/6 rounded-2xl p-2 text-white backdrop-blur-sm shadow-lg">
            {children}
        </div>
    )
};