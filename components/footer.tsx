import Link from "next/link"
import { Heart, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="font-montserrat font-bold text-lg mb-4">TAU Developer Tools</h3>
            <p className="text-muted-foreground mb-4">
              Professional Unity development tools built with passion for the developer community.
            </p>
            <div className="flex items-center text-sm text-muted-foreground">
              <span>© 2025 TAU DevTools. Built with</span>
              <Heart className="w-4 h-4 mx-1 text-red-500" />
              <span>for Unity developers.</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-montserrat font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-muted-foreground hover:text-primary transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-montserrat font-bold text-lg mb-4">Get in Touch</h3>
            <div className="flex items-center space-x-2 text-muted-foreground">
              <Mail className="w-4 h-4" />
              <Link href="mailto:taudevtools@gmail.com" className="hover:text-primary transition-colors">
                taudevtools@gmail.com
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
