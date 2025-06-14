export function LoadingFallback({ text = "Loading..." }: { text?: string }) {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center text-slate-700 dark:text-slate-200">
      <div className="w-8 h-8 mb-4 animate-spin rounded-full border-4 border-blue-600 border-t-transparent dark:border-blue-400"></div>
      <p className="text-base font-medium">{text}</p>
    </div>
  )
}
