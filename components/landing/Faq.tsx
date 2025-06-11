const FAQ = () => {
  const questions = [
    {
      q: "How long does delivery take?",
      a: "Typically within 24 hours for most locations.",
    },
    {
      q: "Can I schedule recurring pickups?",
      a: "Yes! Choose weekly or biweekly from your account.",
    },
    {
      q: "Do you offer ironing?",
      a: "Yes, ironing is available as a separate service.",
    },
  ]

  return (
    <section id="faq" className="py-20 px-4 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
        {questions.map(({ q, a }, i) => (
          <div key={i} className="text-left">
            <h3 className="font-semibold">{q}</h3>
            <p className="text-gray-600 dark:text-gray-400">{a}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default FAQ
