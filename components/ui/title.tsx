interface TitleProps {
  text: string
  type: "lg" | "sm"
}

export const Title = ({ text, type }: TitleProps) => {
  const sizeClasses = type === "lg" ? "text-7xl mb-16" : "text-4xl mb-8"

  return <h1 className={`${sizeClasses} text-[#041C58] dark:text-white font-semibold text-center`}>{text}</h1>
}
