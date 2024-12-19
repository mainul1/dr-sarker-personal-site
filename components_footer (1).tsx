import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="py-6 bg-background border-t">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-center text-sm text-muted-foreground">
            © 2024 Dr. Md Mainul Hasan Sarker. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="https://github.com/mainul1" className="text-muted-foreground hover:text-primary">
              GitHub
            </Link>
            <Link href="https://www.linkedin.com/in/md-mainul-hasan-sarker-phd-421bb257/" className="text-muted-foreground hover:text-primary">
              LinkedIn
            </Link>
            <Link href="#contact" className="text-muted-foreground hover:text-primary">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

