import Link from 'next/link'

export function Navigation() {
  return (
    <nav className="bg-blue-500 text-white p-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <Link href="/" className="text-2xl tracking-tight font-sans">
          <span className="text-white">ProstaVive</span>{" "}
          <span className="text-blue-200">Review</span>
        </Link>
        <ul className="flex flex-wrap justify-center gap-4 md:gap-6 font-sans text-sm md:text-base">
          <li><Link href="/" className="hover:text-blue-100">Home</Link></li>
          <li><Link href="/prostate-cancer" className="hover:text-blue-100">Prostate Cancer</Link></li>
          <li><Link href="/bph" className="hover:text-blue-100">BPH</Link></li>
          <li><Link href="/natural-remedies" className="hover:text-blue-100">Natural Remedies</Link></li>
          <li><Link href="/video-content" className="hover:text-blue-100">Videos</Link></li>
          <li><Link href="/blog" className="hover:text-blue-100">Blog</Link></li>
          <li><Link href="/resources" className="hover:text-blue-100">Resources</Link></li>
          <li><Link href="/calculators" className="hover:text-blue-100">Calculators</Link></li>
          <li><Link href="/faq" className="hover:text-blue-100">FAQ</Link></li>
          <li><Link href="/about" className="hover:text-blue-100">About</Link></li>
          <li><Link href="/contact" className="hover:text-blue-100">Contact</Link></li>
        </ul>
      </div>
    </nav>
  )
}

