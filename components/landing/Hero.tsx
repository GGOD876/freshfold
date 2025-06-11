import Image from "next/image"
import Link from "next/link"
import HeroImage from "@/public/hero.png"
import { Button } from "@/components/ui/button"

const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-4 text-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight transition-all duration-700">
        Laundry & Dry Cleaning <br /> <span className="text-blue-500">Made Easy</span>
      </h1>
      <p className="max-w-xl mx-auto text-lg text-gray-600 dark:text-gray-300 mb-6 transition-colors duration-300">
        FreshFold offers fast, reliable pickup and delivery laundry services. Track orders, schedule pickups, and get fresh clothes – all from your phone.
      </p>
      <div className="flex justify-center gap-4">
        <Link href="/signup">
          <Button variant="default" className="px-6 py-3 text-base">
            Get Started
          </Button>
        </Link>
        <Link href="/login">
          <Button variant="secondary" className="px-6 py-3 text-base">
            Sign In
          </Button>
        </Link>
      </div>
      <Image src={HeroImage} alt="FreshFold Hero" className="mt-12 w-full max-w-4xl mx-auto rounded-xl shadow-xl animate-fade-in" priority />
    </section>
  )
}

export default Hero
