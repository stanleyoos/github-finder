const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <footer className="footer p-5 bg-gray-700 text-primary-content footer-center">
      <p>Copyright {year} All rights reserved</p>
    </footer>
  )
}

export default Footer
