const navLinks = ["Home", "Technologies", "Projects", "About", "Contact"];

export default function Header() {
  return (
    <header className="border-b border-gray-100">
      <div className="max-w-[1400px] mx-auto px-10 h-[72px] flex items-center justify-between">
        {/* logo */}
        <div className="flex items-center">
          <img
            src="/images/logo-text.png"
            alt="Dev Stack"
            className="h-8 w-auto"
          />
        </div>

        {/* nav */}
        <nav className="flex items-center gap-8">
          {navLinks.map((link, i) => (
            <a
              key={link}
              href="#"
              className={
                i === 0
                  ? "text-pink-600 font-medium text-sm"
                  : "text-gray-600 hover:text-gray-900 text-sm"
              }
            >
              {link}
            </a>
          ))}
        </nav>

        {/* auth buttons */}
        <div className="flex items-center gap-5">
          <a href="#" className="text-sm text-gray-700 hover:text-gray-900">
            Sign In
          </a>
          <button className="btn-gradient text-white text-sm font-medium px-5 py-2 rounded-full">
            Sign Up
          </button>
        </div>
      </div>
    </header>
  );
}
