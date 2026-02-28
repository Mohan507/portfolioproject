import { useState, useEffect } from "react"
import { HiMenu, HiX } from "react-icons/hi"

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-black/70 backdrop-blur-xl border-b border-white/10 shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">

          {/* Logo */}
          <h1 className="text-xl md:text-2xl font-extrabold tracking-tight cursor-pointer group">
            <span className="text-white group-hover:text-blue-400 transition duration-300">
              Chitukula
            </span>{" "}
            <span className="text-blue-500 group-hover:text-white transition duration-300">
              Mohan
            </span>
          </h1>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-10 text-sm font-medium">
            <NavLink href="#home" title="Home" />
            <NavLink href="#about" title="About" />
            <NavLink href="#projects" title="Projects" />
            <NavLink href="#contact" title="ContactUs" />
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button onClick={() => setOpen(!open)}>
              {open ? (
                <HiX className="text-3xl text-white" />
              ) : (
                <HiMenu className="text-3xl text-white" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/95 backdrop-blur-lg flex flex-col items-center justify-center space-y-10 text-2xl font-semibold text-white transform ${
          open ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 md:hidden z-40`}
      >
        <MobileLink href="#home" title="Home" setOpen={setOpen} />
        <MobileLink href="#about" title="About" setOpen={setOpen} />
        <MobileLink href="#projects" title="Projects" setOpen={setOpen} />
        <MobileLink href="#contact" title="Contact" setOpen={setOpen} />
      </div>
    </>
  )
}

/* Desktop Link */
function NavLink({ href, title }) {
  return (
    <a
      href={href}
      className="relative group py-2 text-gray-300 hover:text-white transition"
    >
      {title}
      <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
    </a>
  )
}

/* Mobile Link */
function MobileLink({ href, title, setOpen }) {
  return (
    <a
      href={href}
      onClick={() => setOpen(false)}
      className="hover:text-blue-500 transition"
    >
      {title}
    </a>
  )
}