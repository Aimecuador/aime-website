export default function GoogleMapComponent() {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.794898807083!2d-78.4925312!3d-0.196322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d59b6585003af3%3A0x3ade300a249ee288!2sAsociaci%C3%B3n%20de%20Ingenieros%20de%20Minas%20del%20Ecuador!5e0!3m2!1ses-419!2sec!4v1743730844658!5m2!1ses-419!2sec"
      width="100%"
      height="450"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Ubicación de AIME"
      className="rounded-lg"
    />
  )
}