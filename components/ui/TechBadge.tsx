interface TechBadgeProps {
  label: string
}

export function TechBadge({ label }: TechBadgeProps) {
  return (
    <span className="inline-block px-3 py-1 text-xs font-mono border border-[#30363d] rounded text-[#8b949e] bg-[#161b22]">
      {label}
    </span>
  )
}
