const StatsSection = () => {
  const stats = [
    { value: '+12', label: 'mil  cirurgias de implantes', suffix: '' },
    { value: '3', label: 'unidades', suffix: '' },
    { value: '24', label: 'anos de experiência', suffix: '' },
  ]

  return (
    <section className="bg-secondary py-16">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-white">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center">
              <h2 className="text-5xl md:text-6xl font-bold mb-2">
                {stat.value}
              </h2>
              <p className="text-lg md:text-xl text-gray-200">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default StatsSection

