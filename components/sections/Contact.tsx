export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-[#161b22] border-y border-[#30363d]">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p className="text-[#8b949e] text-sm tracking-widest uppercase mb-3">
          Like what you see?
        </p>
        <h2 className="text-[#e6edf3] text-3xl font-light mb-8">
          I&apos;d love to hear from you!
        </h2>
        <a
          href="mailto:tim@morningstareng.com"
          className="inline-block px-8 py-4 border border-[#58a6ff] text-[#58a6ff] text-sm font-medium tracking-widest uppercase rounded hover:bg-[#58a6ff] hover:text-[#0d1117] transition-all duration-200"
        >
          GET IN TOUCH!
        </a>
      </div>
    </section>
  )
}
