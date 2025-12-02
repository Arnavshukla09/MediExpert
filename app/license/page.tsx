"use client"

import { Card } from "@/components/ui/card"

export default function LicensePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-secondary/5">
      <section className="px-4 py-16 md:py-24 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">License</h1>
          <p className="text-lg text-muted-foreground">MediExpert Project License Agreement</p>
        </div>
      </section>

      <section className="px-4 py-12 md:py-16 bg-background">
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 border-border/50 space-y-6 prose prose-sm dark:prose-invert max-w-none">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">MIT License</h2>
              <p className="text-muted-foreground mb-4">Copyright (c) 2025 Arnav Shukla</p>
              <p className="text-muted-foreground mb-4">
                Permission is hereby granted, free of charge, to any person obtaining a copy of this software and
                associated documentation files (the "Software"), to deal in the Software without restriction, including
                without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the
                following conditions:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
                <li>
                  The above copyright notice and this permission notice shall be included in all copies or substantial
                  portions of the Software.
                </li>
              </ul>
              <p className="text-muted-foreground mb-4">
                THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT
                LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
                NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
                WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
                SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
              </p>
            </div>

            <div className="border-t border-border/50 pt-6">
              <h3 className="text-lg font-bold text-foreground mb-3">Medical Disclaimer</h3>
              <p className="text-muted-foreground mb-3">
                This software is provided for educational and informational purposes only. It is not intended to serve
                as medical advice or a substitute for professional medical consultation. The author makes no claims
                about the accuracy, completeness, or reliability of any medical information provided through this
                software.
              </p>
              <p className="text-muted-foreground">
                Users acknowledge that any medical decisions made based on this software are at their own risk and
                responsibility. Always consult with qualified healthcare professionals for medical advice, diagnosis, or
                treatment.
              </p>
            </div>

            <div className="border-t border-border/50 pt-6">
              <h3 className="text-lg font-bold text-foreground mb-3">Third-Party Licenses</h3>
              <p className="text-muted-foreground mb-3">This project uses the following open-source libraries:</p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground text-sm">
                <li>React - MIT License</li>
                <li>Next.js - MIT License</li>
                <li>Tailwind CSS - MIT License</li>
                <li>shadcn/ui - MIT License</li>
                <li>Lucide Icons - ISC License</li>
              </ul>
            </div>
          </Card>
        </div>
      </section>
    </main>
  )
}
