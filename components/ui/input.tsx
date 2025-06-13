import * as React from "react"
import { cn } from "@/lib/utils"

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
  error?: string
}

const InputField = React.forwardRef<HTMLInputElement, InputFieldProps>(({ label, error, className, id, ...props }, ref) => {
  const inputId = id ?? `input-${label.toLowerCase().replace(/\s+/g, "-")}`

  return (
    <div className="mb-4">
      <label htmlFor={inputId} className="block text-sm font-semibold text-[#0F172A] dark:text-white mb-2">
        {label}
      </label>

      <input
        id={inputId}
        ref={ref}
        aria-invalid={!!error}
        aria-describedby={error ? `${inputId}-error` : undefined}
        className={cn(
          "w-full h-12 text-base rounded-2xl border px-4 py-3 transition-all",
          "bg-gray-100 text-[#0F172A] placeholder:text-gray-400",
          "dark:bg-slate-800 dark:text-white",
          "focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-300",
          error ? "border-red-500 focus-visible:ring-red-300" : "border-gray-200 dark:border-gray-600",
          className
        )}
        {...props}
      />

      {error && (
        <p id={`${inputId}-error`} className="mt-1 text-sm text-red-500">
          {error}
        </p>
      )}
    </div>
  )
})

InputField.displayName = "InputField"

export { InputField }
