import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Palette, Box, Zap, Settings, Download } from "lucide-react"
import Link from "next/link"

export function ProductShowcase() {
  const products = [
    {
      id: "gpt-ui-icon-generator",
      title: "GPT UI Icon Generator",
      description: "A Unity Editor tool to generate clean UI icons using ChatGPT + DALL-E",
      icon: Palette,
      features: [
        "Refines icon prompts using ChatGPT",
        "Generates beautiful, white-background UI icons using OpenAI's DALL-E",
        "Removes backgrounds automatically with rembg",
        "Saves clean Unity Sprites in one click",
        "Seamless Unity Asset Store integration",
      ],
      link: "https://assetstore.unity.com/packages/2d/gui/icons/gpt-ui-icon-generator-323049",
      linkText: "Try on Unity Asset Store",
      secondaryLink: "https://www.tauicongenerator.com/index.html",
      secondaryLinkText: "Explore Advanced Standalone App",
    },
    {
      id: "tripo3d-generator",
      title: "Tripo3D Generator",
      description: "Unity integration for AI-powered 3D model generation from text prompts and images",
      icon: Box,
      features: [
        "Text-to-3D model generation with customizable prompts",
        "Image-to-3D conversion (single image or 4-view multiview)",
        "Direct Unity Editor integration with GLB import",
        "Runtime model spawning with glTFast support",
        "Real-time progress tracking with Server-Sent Events",
        "Configurable mesh complexity and texture resolution",
        "Automatic asset management and prefab creation",
      ],
      additionalFeatures: [
        {
          title: "Generation Modes",
          icon: Zap,
          items: [
            "Text → Model: Describe your 3D object in natural language",
            "Image → Model: Convert single images to 3D models",
            "Multiview → Model: Use 4 images (front, left, back, right) for precise reconstruction",
          ],
        },
        {
          title: "Unity Integration",
          icon: Settings,
          items: [
            "GameObject menu shortcut for quick setup",
            "Custom Inspector with intuitive controls",
            "Automatic GLB import to Assets folder",
            "Spawn parent configuration for scene organization",
            "UnityEvents for custom workflow integration",
          ],
        },
        {
          title: "Advanced Features",
          icon: Download,
          items: [
            "Server-Sent Events for real-time updates",
            "Fallback polling for reliable progress tracking",
            "Task timeout and cancellation support",
            "Comprehensive scripting API for automation",
            "Detailed error handling and diagnostics",
          ],
        },
      ],
      requirements: ["Unity 2020.2 or newer", "Valid Tripo3D API key", "glTFast package (for runtime spawning)"],
      link: "#",
      linkText: "Available Soon",
    },
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl lg:text-5xl mb-4 text-foreground">
            Our Products
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional tools designed to enhance your Unity development workflow
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {products.map((product) => {
            const IconComponent = product.icon
            return (
              <Card key={product.id} className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="font-montserrat font-bold text-2xl">{product.title}</CardTitle>
                  <CardDescription className="text-lg">{product.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Core Features */}
                  <div>
                    <h4 className="font-semibold text-lg mb-3 text-foreground">Key Features</h4>
                    <ul className="space-y-2">
                      {product.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                          <span className="text-muted-foreground text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {product.additionalFeatures && (
                    <div className="space-y-4">
                      {product.additionalFeatures.map((section, sectionIndex) => {
                        const SectionIcon = section.icon
                        return (
                          <div key={sectionIndex} className="border-t pt-4">
                            <div className="flex items-center gap-2 mb-2">
                              <SectionIcon className="w-4 h-4 text-primary" />
                              <h5 className="font-medium text-foreground">{section.title}</h5>
                            </div>
                            <ul className="space-y-1">
                              {section.items.map((item, itemIndex) => (
                                <li key={itemIndex} className="flex items-start">
                                  <div className="w-1.5 h-1.5 bg-primary/60 rounded-full mt-2 mr-2 flex-shrink-0" />
                                  <span className="text-muted-foreground text-sm">{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )
                      })}
                    </div>
                  )}

                  {/* Requirements */}
                  {product.requirements && (
                    <div className="border-t pt-4">
                      <h5 className="font-medium text-foreground mb-2">Requirements</h5>
                      <ul className="space-y-1">
                        {product.requirements.map((req, index) => (
                          <li key={index} className="flex items-start">
                            <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 mr-2 flex-shrink-0" />
                            <span className="text-muted-foreground text-sm">{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="flex flex-col gap-3">
                    <Button asChild className="w-full">
                      <Link href={product.link}>
                        {product.linkText}
                        {product.link !== "#" && <ExternalLink className="ml-2 w-4 h-4" />}
                      </Link>
                    </Button>

                    {"secondaryLink" in product && product.secondaryLink && (
                      <Button asChild className="w-full" variant="secondary">
                        <Link href={product.secondaryLink}>
                          {product.secondaryLinkText}
                          <ExternalLink className="ml-2 w-4 h-4" />
                        </Link>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
