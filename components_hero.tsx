import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="py-20 bg-gradient-to-b from-blue-100 to-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <Image
            src="/logo.png"
            alt="Dr. Sarker's Logo"
            width={150}
            height={150}
            className="rounded-full"
          />
          <h1 className="text-3xl font-bold tracking-tighter text-blue-800 sm:text-4xl md:text-5xl lg:text-6xl">
            Dr. Md Mainul Hasan Sarker
          </h1>
          <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
            Research Scientist at University of California, San Diego
            Specializing in Epigenomics and Chronic Disease Prediction
          </p>
          <div className="space-x-4">
            <Link href="https://github.com/mainul1" target="_blank" rel="noopener noreferrer">
              <Button variant="outline">GitHub</Button>
            </Link>
            <Link href="https://scholar.google.com/citations?user=d9eDK5kAAAAJ&hl=en" target="_blank" rel="noopener noreferrer">
              <Button variant="outline">Google Scholar</Button>
            </Link>
            <Link href="#contact">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">Contact</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

