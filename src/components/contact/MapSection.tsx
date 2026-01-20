const MapSection = () => {
  return (
    <div className="h-full min-h-[400px]">
      <div className="w-full h-full bg-gray-200 rounded-lg overflow-hidden">
        {/* Placeholder para o mapa - você pode integrar com Google Maps API */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.0976736831473!2d-47.06348668449636!3d-22.90467384346159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8cf32b4f8b3f7%3A0x7d4a5d7a5a4a5a4a!2sAv.%20Carlos%20Lacerda%2C%2038%20-%20Jardim%20Santa%20Lucia%2C%20Campinas%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1234567890"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full"
        />
      </div>
    </div>
  )
}

export default MapSection

