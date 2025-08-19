import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Palette, Box, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function ProductsPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-12">
            <Link
              href="/"
              className="inline-flex items-center text-primary hover:text-primary/80 transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
            <h1 className="font-montserrat font-black text-4xl md:text-5xl mb-4">Our Products</h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              Professional Unity development tools designed to streamline your workflow and enhance productivity.
            </p>
          </div>

          {/* GPT UI Icon Generator */}
          <Card className="mb-12">
            <CardHeader>
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Palette className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <CardTitle className="font-montserrat font-bold text-3xl">GPT UI Icon Generator</CardTitle>
                  <CardDescription className="text-lg">
                    A Unity Editor tool to generate clean UI icons using ChatGPT + DALL-E
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-montserrat font-bold text-xl mb-4">What It Does</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    This tool refines icon prompts using ChatGPT and generates beautiful, white-background UI icons
                    using OpenAI's DALL-E. It also removes backgrounds automatically with rembg, saving you clean Unity
                    Sprites in one click.
                  </p>

                  <h3 className="font-montserrat font-bold text-xl mb-4">Key Features</h3>
                  <ul className="space-y-3 mb-6">
                    {[
                      "Refines icon prompts using ChatGPT for better results",
                      "Generates beautiful, white-background UI icons using OpenAI's DALL-E",
                      "Automatically removes backgrounds with rembg technology",
                      "Saves clean Unity Sprites in one click",
                      "Seamless integration with Unity Editor",
                      "Batch processing capabilities",
                      "Customizable prompt templates",
                    ].map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button asChild size="lg">
                    <Link href="https://assetstore.unity.com/packages/tools/utilities/gpt-ui-icon-generator-123456">
                      Try on Unity Asset Store <ExternalLink className="ml-2 w-5 h-5" />
                    </Link>
                  </Button>
                </div>

                <div className="bg-muted/30 rounded-lg p-6">
                  <h3 className="font-montserrat font-bold text-xl mb-4">How It Works</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                        1
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Refine with ChatGPT</h4>
                        <p className="text-sm text-muted-foreground">
                          Enter your icon concept and let ChatGPT optimize the prompt for better results.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                        2
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Generate via DALL-E</h4>
                        <p className="text-sm text-muted-foreground">
                          The refined prompt is sent to DALL-E to create a high-quality icon image.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                        3
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Save as Sprite</h4>
                        <p className="text-sm text-muted-foreground">
                          Background is automatically removed and the clean icon is saved as a Unity Sprite.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Tripo3D Generator */}
          <Card>
            <CardHeader>
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-16 h-16 bg-secondary/10 rounded-xl flex items-center justify-center">
                  <Box className="w-8 h-8 text-secondary" />
                </div>
                <div>
                  <CardTitle className="font-montserrat font-bold text-3xl">Tripo3D Generator</CardTitle>
                  <CardDescription className="text-lg">
                    Advanced 3D content generation tool for Unity developers
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-montserrat font-bold text-xl mb-4">Coming Soon</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Our next-generation 3D content generation tool is currently in development. This powerful Unity
                    Editor extension will revolutionize how you create 3D assets for your projects.
                  </p>

                  <h3 className="font-montserrat font-bold text-xl mb-4">Planned Features</h3>
                  <ul className="space-y-3 mb-6">
                    {[
                      "AI-powered 3D model generation from text descriptions",
                      "Seamless Unity Editor integration",
                      "High-quality mesh optimization and cleanup",
                      "Automatic texture and material generation",
                      "Batch processing capabilities",
                      "Multiple export formats support",
                      "Real-time preview and editing",
                    ].map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button disabled size="lg" variant="secondary">
                    Coming Soon
                  </Button>
                </div>

                <div className="bg-muted/30 rounded-lg p-6">
                  <h3 className="font-montserrat font-bold text-xl mb-4">Stay Updated</h3>
                  <p className="text-muted-foreground mb-4">
                    Want to be notified when Tripo3D Generator launches? Get in touch with us and we'll keep you
                    informed about the development progress.
                  </p>
                  <Button asChild variant="outline">
                    <Link href="/contact">Get Notified</Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  )
}
