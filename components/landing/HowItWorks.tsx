const HowItWorks = () => {
  const steps = [
    {
      title: "📦 Schedule Pickup",
      description: "Pick a time that works for you.",
    },
    {
      title: "🧼 We Clean",
      description: "Your clothes are washed, folded or dry cleaned.",
    },
    {
      title: "🚚 Delivery",
      description: "Get your clean clothes delivered to your door.",
    },
  ]

  return (
    <section id="how-it-works" className="py-20 px-4 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-5xl mx-auto text-center space-y-12">
        <h2 className="text-3xl font-bold">How FreshFold Works</h2>
        <div className="grid md:grid-cols-3 gap-12 text-left">
          {steps.map(({ title, description }, i) => (
            <div key={i}>
              <h3 className="text-xl font-semibold">{title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks