const BOOKS = [
  { title: 'Programming in Scala',                       author: 'Martin Odersky',                              year: 2025 },
  { title: 'Introduction to Algorithms',                 author: 'CLRS',                                        year: 2025 },
  { title: 'Software Maintenance: Concepts and Practice', author: 'Penny Grub and Armstrong A Takang',          year: 2024 },
  { title: 'Measuring the Software Process',             author: 'Florac and Carleton',                         year: 2023 },
  { title: 'Software Architecture in Practice',          author: 'Bass, Clements, and Kazman',                  year: 2023 },
  { title: 'Continuous Delivery',                        author: 'Jez Humble and David Farley',                 year: 2023 },
  { title: 'Practical Software Testing',                 author: 'Burnstein, Ilene',                            year: 2023 },
  { title: 'Agile Project Management',                   author: 'Highsmith, Jim',                              year: 2023 },
  { title: 'CMMI for Development',                       author: 'May Beth Chrissis, Mike Konrad, Sandy Shrum', year: 2023 },
  { title: 'Software Requirements',                      author: 'Karl Wiegers and Joy Beatty',                 year: 2023 },
  { title: 'Managing the Software Process',              author: 'Humphrey',                                    year: 2022 },
]

export default function Books() {
  return (
    <section id="books" className="py-24 bg-[#161b22] border-y border-[#30363d]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-[#e6edf3] text-2xl font-semibold tracking-widest mb-2">
            BOOKS READ BY YEAR
          </h2>
          <p className="text-[#484f58] text-sm">Technical and professional reading, by year</p>
        </div>

        <div className="max-w-3xl mx-auto">
          <ul className="divide-y divide-[#21262d]">
            {BOOKS.map((book) => (
              <li
                key={book.title}
                className="flex items-baseline justify-between gap-4 py-3"
              >
                <span className="text-[#8b949e] text-sm">
                  <em className="text-[#c9d1d9] not-italic">{book.title}</em>
                  {' / '}
                  {book.author}
                </span>
                <span className="font-mono text-xs text-[#484f58] flex-shrink-0">
                  {book.year}
                </span>
              </li>
            ))}
          </ul>

          <p className="text-[#484f58] text-xs mt-8 text-center">
            Reading target: 4 or more technical books per year.
          </p>
        </div>
      </div>
    </section>
  )
}
