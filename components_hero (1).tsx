import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="py-20 bg-gradient-to-b from-primary/10 to-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
            Dr. Md Mainul Hasan Sarker
          </h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            Research Scientist specializing in Epigenomics and Chronic Disease Prediction
          </p>
          <div className="space-x-4">
            <Link href="https://github.com/mainul1" target="_blank" rel="noopener noreferrer">
              <Button variant="outline">GitHub</Button>
            </Link>
            <Link href="https://scholar.google.com/citations?user=d9eDK5kAAAAJ&hl=en" target="_blank" rel="noopener noreferrer">
              <Button variant="outline">Google Scholar</Button>
            </Link>
            <Link href="#contact">
              <Button>Contact</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

