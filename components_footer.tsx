import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="py-6 bg-blue-800 text-white border-t border-blue-700">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-center text-sm text-white">
            © 2024 Dr. Md Mainul Hasan Sarker. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="https://github.com/mainul1" className="text-blue-200 hover:text-white">
              GitHub
            </Link>
            <Link href="https://www.linkedin.com/in/md-mainul-hasan-sarker-phd-421bb257/" className="text-blue-200 hover:text-white">
              LinkedIn
            </Link>
            <Link href="#contact" className="text-blue-200 hover:text-white">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

