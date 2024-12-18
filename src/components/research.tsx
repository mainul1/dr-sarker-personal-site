import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function Research() {
  return (
    <section id="research" className="py-16 bg-blue-50">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter text-center mb-8 text-blue-800">Research Interests</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card className="bg-white">
            <CardHeader>
              <CardTitle className="text-blue-700">Epigenomic Markers</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Identifying epigenomic markers to predict chronic diseases associated with post-traumatic stress disorder.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-white">
            <CardHeader>
              <CardTitle className="text-blue-700">Multi-omics Integration</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Integrating genomics, transcriptomics, and proteomics data to enhance understanding of epigenomic regulation in health and disease.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-white">
            <CardHeader>
              <CardTitle className="text-blue-700">Machine Learning in Disease Prediction</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Developing predictive models for disease risk assessment using machine learning and artificial intelligence techniques.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

