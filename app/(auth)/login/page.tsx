"use client"

import { useForm } from "@tanstack/react-form"
import { useRouter } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import { InputField } from "@/components/ui/input"
import Logo from "@/public/logo.png"
import { supabase } from "@/lib/supabase-client"

export default function LoginPage() {
  const router = useRouter()

  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    onSubmit: async ({ value: { email, password } }) => {
      try {
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password,
        })

        if (error) {
          toast.error("Login Error", { description: error.message })
        } else {
          router.replace("/dashboard")
        }
      } catch {
        toast.error("Something went wrong", {
          description: "Please try again later.",
        })
      }
    },
  })

  return (
    <main className="min-h-screen bg-white dark:bg-slate-900 flex items-center justify-center px-4">
      <div className="w-full max-w-md space-y-6">
        <div className="flex justify-center">
          <Image src={Logo} alt="FreshFold" className="w-24 h-24" />
        </div>
        <h1 className="text-2xl font-bold text-center text-slate-900 dark:text-white">Welcome Back</h1>
        <p className="text-center text-gray-500 dark:text-gray-300">Sign in to continue with FreshFold</p>

        <form
          onSubmit={e => {
            e.preventDefault()
            form.handleSubmit()
          }}
          className="space-y-4">
          <form.Field
            name="email"
            validators={{
              onChange: ({ value }) => {
                if (!value) return "Email is required"
                if (!/\S+@\S+\.\S+/.test(value)) return "Invalid email"
              },
            }}>
            {field => (
              <InputField
                label="Email"
                type="email"
                placeholder="Email"
                value={field.state.value}
                onChange={e => field.handleChange(e.target.value)}
                error={field.state.meta.errors?.[0]}
              />
            )}
          </form.Field>

          <form.Field
            name="password"
            validators={{
              onChange: ({ value }) => {
                if (!value) return "Password is required"
                if (value.length < 6) return "Minimum 6 characters"
              },
            }}>
            {field => (
              <InputField
                label="Password"
                type="password"
                placeholder="Password"
                value={field.state.value}
                onChange={e => field.handleChange(e.target.value)}
                error={field.state.meta.errors?.[0]}
              />
            )}
          </form.Field>

          <form.Subscribe>
            {formState => (
              <Button type="submit" variant="default" className="w-full" disabled={!formState.canSubmit || formState.isSubmitting}>
                {formState.isSubmitting ? "Logging in..." : "Log In"}
              </Button>
            )}
          </form.Subscribe>
        </form>

        <div className="flex justify-between text-sm text-blue-500">
          <Link href="/signup">{"Don't have an account? Sign Up"}</Link>
          <Link href="/forgot-password">Forgot Password?</Link>
        </div>
      </div>
    </main>
  )
}
