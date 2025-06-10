interface SubtitleProps {
  text: string
}

export const Subtitle = ({ text }: SubtitleProps) => {
  return <p className="text-gray-500 dark:text-gray-300 text-base font-semibold text-center mb-8 w-full whitespace-pre-line">{text}</p>
}