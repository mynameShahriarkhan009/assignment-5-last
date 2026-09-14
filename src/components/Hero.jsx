export default function Hero() {
  return (
    <section className="max-w-[1400px] mx-auto px-10 py-24 flex items-center justify-between">
      <div className="max-w-[540px]">
        <h1 className="text-5xl font-extrabold leading-tight">
          Build Your Ideal
          <br />
          <span className="text-gradient">Development Stack</span>
        </h1>

        <p className="mt-6 text-gray-500 text-[15px] leading-relaxed">
          Explore frontend, backend, database, and tooling options, compare
          them side by side, and put together the stack that fits your next
          project.
        </p>

        <div className="mt-8 flex items-center gap-4">
          <a
            href="#technologies"
            className="btn-gradient text-white font-medium px-6 py-3 rounded-md"
          >
            Explore Technologies
          </a>
          <a
            href="#"
            className="border border-gray-200 font-medium px-6 py-3 rounded-md text-gray-800 hover:bg-gray-50"
          >
            Learn More
          </a>
        </div>
      </div>

      <img
        src="/images/hero-stack.png"
        alt="Illustration of a stacked dev tech platform"
        className="w-[340px]"
      />
    </section>
  );
}
