import Link from "next/link"
import {Button} from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card"
import { ArrowLeft, Brain, Lightbulb, Pencil, RefreshCw } from "lucide-react"

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
            <div className="container px-4 py-8 mx-auto">
                <div className="flex items-center mb-8">
                    <Link href="/">
                    <Button variant="ghost" className="flex items-center gap-2">
                        <ArrowLeft size={18} /> 
                        <span>Back to Wheel</span>
                    </Button>
                    </Link>
                    </div>
                    <div className="max-w-3xl mx-auto">
                        <div className="mb-12 text-center">
                            <h1 className="mb-4 text-4xl font-bold text-slate-800 dark:text-slate-100">About Topic Wheel</h1>
                            <p className="text-xl text-slate-600 dark:text-slate-300">
                            Inspiring writers with AI-powered topic suggestions and resources    
                            </p>
                        </div>

                        <Card className="mb-12">
                            <CardHeader>
                                <CardTitle>Our Mission</CardTitle>
                            </CardHeader>
                            <CardContent className="prose dark:prose-invert max-w-none">
                                <p>
                                  Topic Wheel was created to solve the common problem of writer's block and to inspire more in-depth
                writing on diverse subjects. Our mission is to help writers:
              </p>
                <ul>
                <li>Discover fresh, unique topics to write about</li>
                <li>Explore subjects they might not have considered</li>
                <li>Find high-quality resources for research</li>
                <li>Develop a consistent writing practice</li>
                <li>Avoid repetitive subject matter</li>
              </ul>
              <p>
                By combining the element of randomness with AI-powered topic curation, we create an engaging experience
                that makes finding writing inspiration fun and effective.
              </p>
            </CardContent>
          </Card>
          <h2 className="mb-6 text-2xl font-semibold text center text-slate-800
          dark:text-slate-100">How It Works</h2>
          <div className="grid gap-6 mb-12 mb:grid-cols-2">
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Brain className="text-purple-500" />
                        AI-Powered Topics
                    </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 dark:text-slate-300">
                  Our system uses artificial intelligence to generate and curate writing topics based on current events,
                  trending subjects, and timeless themes. The AI analyzes news sources, academic publications, and
                  cultural trends to ensure topics are relevant and inspiring.
                </p>  
                </CardContent>
            </Card>
             <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <RefreshCw className="text-green-500" />
                  Regular Updates
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 dark:text-slate-300">
                  Topics are continuously refreshed to ensure you always have new inspiration. Our system uses web
                  scraping and API connections to news sources to stay current with world events and emerging trends
                  across various fields.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lightbulb className="text-yellow-500" />
                  Diverse Subject Matter
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 dark:text-slate-300">
                  We deliberately include topics from a wide range of categories including science, arts, technology,
                  history, philosophy, current events, and more. This diversity helps writers expand their horizons and
                  develop versatility in their writing.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Pencil className="text-blue-500" />
                  Writing Resources
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 dark:text-slate-300">
                  Each topic comes with carefully selected resources including articles, books, and websites to help you
                  dive deeper into the subject. We also provide writing prompts to help you get started immediately.
                </p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Technical Details</CardTitle>
            </CardHeader>
            <CardContent className="prose dark:prose-invert max-w-none">
              <p>Topic Wheel is built using the MERN stack:</p>
              <ul>
                <li>
                  <strong>MongoDB:</strong> Stores topic data, resources, and user interactions
                </li>
                <li>
                  <strong>Express.js:</strong> Powers our backend API
                </li>
                <li>
                  <strong>React.js:</strong> Creates an interactive and responsive frontend
                </li>
                <li>
                  <strong>Node.js:</strong> Runs server-side code and AI integrations
                </li>
              </ul>
              <p>Our AI topic generation system uses:</p>
              <ul>
                <li>Natural language processing to analyze current events</li>
                <li>API connections to news sources and academic databases</li>
                <li>Web scraping for trending topics across various platforms</li>
                <li>Custom algorithms to ensure topic diversity and freshness</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  )
}
