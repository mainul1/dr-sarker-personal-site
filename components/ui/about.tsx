import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function About() {
  return (
    <section id="about" className="py-16 bg-background">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter text-center mb-8">About Me</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Research Focus</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                As a Research Scientist, I specialize in identifying epigenomic markers to predict chronic diseases associated with post-traumatic stress disorder. My work involves designing experiments, developing protocols for epigenetic data analysis, and integrating multi-omics data.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Expertise</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Epigenomics & Chronic Disease Prediction</li>
                <li>Multi-omics Data Integration</li>
                <li>Experimental Design & Data Analysis</li>
                <li>Machine Learning in Bioinformatics</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

