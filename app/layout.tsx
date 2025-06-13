import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { ThemeProvider } from "next-themes"
import "./globals.css"
import { Toaster } from "sonner"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "FreshFold Logistics",
  description: "Laundry & Dry Cleaning Made Easy",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
          <Toaster
            position="top-center"
            theme="system"
            toastOptions={{
              classNames: {
                toast: "rounded-xl shadow-md !bg-white !text-slate-900 !border !border-slate-200 dark:!bg-slate-800 dark:!text-white dark:!border-slate-700",
                title: "!font-semibold !text-base !text-[#041C58] dark:!text-white",
                description: "!text-sm !text-gray-600 dark:!text-gray-300 !mt-1",
                actionButton: "!bg-blue-600 !text-white !rounded-md !px-3 !py-1 !text-sm hover:!bg-blue-700 !transition",
                cancelButton: "!text-gray-500 hover:!text-gray-700 dark:hover:!text-gray-200 !text-sm",
              },
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  )
}
