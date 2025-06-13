"use client"

import { useForm } from "@tanstack/react-form"
import Image from "next/image"
import Link from "next/link"
import { toast } from "sonner"

import Logo from "@/public/logo.png"
import { Button } from "@/components/ui/button"
import { InputField } from "@/components/ui/input"
import { Title } from "@/components/ui/title"
import { Subtitle } from "@/components/ui/subtitle"
import { supabase } from "@/lib/supabase-client"

export default function SignupPage() {
  const form = useForm({
    defaultValues: {
      email: "",
      firstName: "",
      lastName: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit: async ({ value: { email, firstName, lastName, password }, formApi: { reset } }) => {
      const redirectUrl = `${process.env.NEXT_PUBLIC_SITE_URL}/email-confirmation`
      try {
        const { data, error: authError } = await supabase.auth.signUp({ email, password, options: { emailRedirectTo: redirectUrl } })

        if (authError) {
          return toast.error("Signup Error", { description: authError.message })
        }

        const { error: usersError } = await supabase.from("users").insert({ id: data.user?.id, email, first_name: firstName, last_name: lastName }).single()

        if (usersError) {
          return toast.error("Signup Error", { description: usersError.message })
        }

        toast.success("You have successfully signed up!", { description: "Please confirm your account using the link sent to your email", duration: 5 })
        reset()
      } catch (error) {
        toast.error("Something went wrong", {
          description: "Please try again later.",
        })
      }
    },
  })

  return (
    <main className="min-h-screen bg-white dark:bg-slate-900 flex items-center justify-center px-4">
      <div className="w-full max-w-md space-y-6">
        {/* Logo & Title */}
        <div className="flex flex-col items-center">
          <Image src={Logo} alt="FreshFold Logo" className="w-20 h-20 mb-2" />
          <Title type="sm" text="Create Account" />
          <Subtitle text="Schedule pickups, track orders, and manage your account with ease." />
        </div>

        <form
          className="space-y-4"
          onSubmit={e => {
            e.preventDefault()
            form.handleSubmit()
          }}>
          <form.Field
            name="email"
            validators={{
              onChange: ({ value }) => {
                if (!value) return "Email is required"
                if (!/\S+@\S+\.\S+/.test(value)) return "Invalid email format"
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
            name="firstName"
            validators={{
              onChange: ({ value }) => {
                if (!value) return "First name is required"
              },
            }}>
            {field => (
              <InputField
                label="First Name"
                placeholder="First Name"
                value={field.state.value}
                onChange={e => field.handleChange(e.target.value)}
                error={field.state.meta.errors?.[0]}
              />
            )}
          </form.Field>

          <form.Field
            name="lastName"
            validators={{
              onChange: ({ value }) => {
                if (!value) return "Last name is required"
              },
            }}>
            {field => (
              <InputField
                label="Last Name"
                placeholder="Last Name"
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
                if (value.length < 6) return "Password must be at least 6 characters"
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

          <form.Field
            name="confirmPassword"
            validators={{
              onChange: ({ value, fieldApi }) => {
                if (!value) return "Please confirm your password"
                if (value !== fieldApi.form.state.values.password) return "Passwords do not match"
              },
            }}>
            {field => (
              <InputField
                label="Confirm Password"
                type="password"
                placeholder="Confirm Password"
                value={field.state.value}
                onChange={e => field.handleChange(e.target.value)}
                error={field.state.meta.errors?.[0]}
              />
            )}
          </form.Field>

          <form.Subscribe>
            {formState => (
              <Button type="submit" className="w-full" disabled={!formState.canSubmit || formState.isSubmitting}>
                {formState.isSubmitting ? "Signing Up..." : "Sign Up"}
              </Button>
            )}
          </form.Subscribe>
        </form>

        <p className="text-center text-sm text-gray-600 dark:text-gray-400 mt-4">
          <Link href="/login" className="text-blue-500 hover:underline">
            Already have an account? Log In
          </Link>
        </p>
      </div>
    </main>
  )
}
