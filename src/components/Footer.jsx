const footerColumns = [
  {
    title: "PRODUCT",
    links: ["Home", "Technologies", "Projects"],
  },
  {
    title: "COMPANY",
    links: ["About", "Contact", "Careers"],
  },
  {
    title: "LEGAL",
    links: ["Privacy Policy", "Terms of Service"],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-gray-100">
      <div className="max-w-[1400px] mx-auto px-10 py-14 flex justify-between">
        <div className="max-w-[300px]">
          <div className="flex items-center">
            <img
              src="/images/logo-text.png"
              alt="Dev Stack"
              className="h-8 w-auto"
            />
          </div>
          <p className="text-sm text-gray-500 mt-4 leading-relaxed">
            Curated tools, technologies, and resources for developers building
            modern software.
          </p>
          <div className="flex gap-4 mt-5 text-sm text-gray-600">
            <a href="#">GitHub</a>
            <a href="#">Twitter</a>
            <a href="#">LinkedIn</a>
          </div>
        </div>

        <div className="flex gap-20">
          {footerColumns.map((col) => (
            <div key={col.title}>
              <p className="text-xs font-semibold text-gray-800 tracking-wide">
                {col.title}
              </p>
              <ul className="mt-4 flex flex-col gap-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-gray-500 hover:text-gray-800"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-gray-100">
        <div className="max-w-[1400px] mx-auto px-10 py-5 flex justify-between text-xs text-gray-400">
          <span>
            © {new Date().getFullYear()} Dev Stack. All rights reserved.
          </span>
          <div className="flex gap-5">
            <a href="#" className="hover:text-gray-600">
              Privacy
            </a>
            <a href="#" className="hover:text-gray-600">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
