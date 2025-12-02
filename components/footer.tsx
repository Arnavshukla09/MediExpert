import Link from "next/link"
import { Mail, Linkedin } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full border-t border-border/40 bg-secondary/30 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
              <span className="text-xl">Ⓜ️</span>
              MediExpert
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              An intelligent medical diagnostic system powered by expert rules and symptom analysis.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Diagnostic Tool
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <a href="#disclaimer" className="text-muted-foreground hover:text-primary transition-colors">
                  Disclaimer
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Connect</h4>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/arnav-shukla-19615128a/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
                <span className="text-xs hidden sm:inline">LinkedIn</span>
              </a>
              <a
                href="mailto:arnavshukla0925@gmail.com"
                className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
                aria-label="Email Contact"
              >
                <Mail className="w-4 h-4" />
                <span className="text-xs hidden sm:inline">Email</span>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border/50 pt-8">
          {/* Disclaimer */}
          <div className="mb-6 p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
            <p className="text-xs text-yellow-900 dark:text-yellow-200">
              <strong>Medical Disclaimer:</strong> This system is for educational purposes only. It is not a substitute
              for professional medical advice, diagnosis, or treatment. Always consult with qualified healthcare
              professionals for medical concerns.
            </p>
          </div>

          {/* Bottom Footer */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
            <div className="text-center sm:text-left">
              <p>&copy; {currentYear} MediExpert. All rights reserved.</p>
              <p>Developed by Arnav Shukla</p>
            </div>
            <div className="flex gap-4">
              <Link href="/license" className="hover:text-primary transition-colors">
                License
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
