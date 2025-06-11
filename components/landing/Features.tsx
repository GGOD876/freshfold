const Features = () => {
  const features = [
    { title: "Real-Time Tracking", desc: "Know exactly where your laundry is at all times." },
    { title: "Eco-Friendly Cleaning", desc: "We use safe, sustainable, and gentle detergents." },
    { title: "Next-Day Delivery", desc: "Fast and flexible delivery times to fit your schedule." },
  ]

  return (
    <section id="features" className="bg-gray-100 dark:bg-slate-800 py-20 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Why Choose FreshFold?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((item, idx) => (
            <div key={idx} className="p-6 bg-white dark:bg-slate-900 rounded-xl shadow transition-transform duration-300 hover:scale-[1.02]">
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
