const Pricing = () => {
  const plans = [
    { type: "Wash & Fold", price: "$1.99 / lb" },
    { type: "Dry Cleaning", price: "From $5 / item" },
    { type: "Monthly Plan", price: "$49 / mo" },
  ]

  return (
    <section id="pricing" className="py-20 px-4 bg-gray-100 dark:bg-slate-800 transition-colors duration-300">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Transparent Pricing</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-10">Only pay for what you use — no hidden fees.</p>
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map(({ type, price }, i) => (
            <div key={i} className="bg-white dark:bg-slate-900 rounded-xl p-6 shadow">
              <h3 className="text-xl font-semibold">{type}</h3>
              <p className="text-2xl font-bold mt-2">{price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing
