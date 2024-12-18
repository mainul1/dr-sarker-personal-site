import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function About() {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter text-center mb-8 text-blue-800">About Me</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <Card className="bg-blue-50">
            <CardHeader>
              <CardTitle className="text-blue-700">Research Focus</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                As a Research Scientist at UCSD, I specialize in identifying epigenomic markers to predict chronic diseases associated with post-traumatic stress disorder. My work involves designing experiments, developing protocols for epigenetic data analysis, and integrating multi-omics data to enhance our understanding of epigenomic regulation in cardiovascular health and disease.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-blue-50">
            <CardHeader>
              <CardTitle className="text-blue-700">Expertise</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Epigenomics & Chronic Disease Prediction</li>
                <li>Multi-omics Data Integration</li>
                <li>Experimental Design & Data Analysis</li>
                <li>Machine Learning in Bioinformatics</li>
                <li>Cardiovascular Epigenetics</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

