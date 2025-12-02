"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Heart, Brain, Shield, Zap } from "lucide-react"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-secondary/5">
      {/* Hero Section */}
      <section className="px-4 py-16 md:py-24 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block mb-6 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
            <Badge variant="outline" className="bg-transparent border-0">
              About MediExpert
            </Badge>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Intelligent Medical Diagnostics</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            MediExpert is an advanced expert system designed to assist in understanding potential medical conditions
            based on symptom analysis.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-4 py-12 md:py-16 bg-background">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* What is MediExpert */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">What is MediExpert?</h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                MediExpert is a sophisticated medical expert system built using rule-based artificial intelligence. It
                analyzes patterns in symptoms and medical knowledge to provide probabilistic diagnoses and severity
                assessments.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The system uses an extensive database of diseases, symptoms, and treatment protocols to help users
                understand their health conditions better and determine appropriate next steps for medical care.
              </p>
            </div>
            <Card className="p-8 border-border/50 bg-gradient-to-br from-primary/5 to-accent/5">
              <div className="space-y-4">
                <div className="flex gap-3">
                  <Brain className="w-8 h-8 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground">Expert System AI</h3>
                    <p className="text-sm text-muted-foreground">Rule-based diagnosis engine</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Heart className="w-8 h-8 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground">Comprehensive Database</h3>
                    <p className="text-sm text-muted-foreground">20+ diseases and conditions</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Shield className="w-8 h-8 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground">Severity Assessment</h3>
                    <p className="text-sm text-muted-foreground">Critical, Moderate, or Mild</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Zap className="w-8 h-8 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground">Smart Recommendations</h3>
                    <p className="text-sm text-muted-foreground">Urgency-based guidance</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* How It Works */}
          <div>
            <h2 className="text-3xl font-bold mb-8">How It Works</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  step: "1",
                  title: "Symptom Assessment",
                  description: "Answer detailed questions about your symptoms and health status",
                },
                {
                  step: "2",
                  title: "Pattern Analysis",
                  description: "The system analyzes symptom patterns against medical knowledge base",
                },
                {
                  step: "3",
                  title: "Diagnosis & Severity",
                  description: "Receive probable diagnosis with severity level and recommendations",
                },
              ].map((item, idx) => (
                <Card key={idx} className="p-6 border-border/50 hover:border-primary/50 transition-colors">
                  <div className="text-4xl font-bold text-primary mb-4 opacity-20">{item.step}</div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </Card>
              ))}
            </div>
          </div>

          {/* Features */}
          <div>
            <h2 className="text-3xl font-bold mb-8">Key Features</h2>
            <div className="space-y-4">
              <Card className="p-6 border-border/50">
                <h3 className="font-semibold text-foreground mb-2">Disease Database</h3>
                <p className="text-sm text-muted-foreground">
                  Comprehensive information on 20+ diseases including descriptions, symptoms, risk factors, and
                  treatment protocols.
                </p>
              </Card>
              <Card className="p-6 border-border/50">
                <h3 className="font-semibold text-foreground mb-2">Severity Classification</h3>
                <p className="text-sm text-muted-foreground">
                  Conditions are classified as Critical (emergency), Moderate (doctor visit needed), or Mild (home
                  treatment possible).
                </p>
              </Card>
              <Card className="p-6 border-border/50">
                <h3 className="font-semibold text-foreground mb-2">Confidence Scoring</h3>
                <p className="text-sm text-muted-foreground">
                  Each diagnosis includes a confidence score based on symptom matching and medical protocols.
                </p>
              </Card>
              <Card className="p-6 border-border/50">
                <h3 className="font-semibold text-foreground mb-2">Actionable Recommendations</h3>
                <p className="text-sm text-muted-foreground">
                  Clear guidance on next steps: emergency services, doctor visit, or home care options.
                </p>
              </Card>
            </div>
          </div>

          {/* Developer */}
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 border border-border/50 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4">About the Developer</h2>
            <p className="text-muted-foreground mb-4">
              MediExpert was developed by <strong>Arnav Shukla</strong>, a passionate developer focused on creating
              intelligent healthcare solutions.
            </p>
            <div className="flex gap-4 flex-wrap">
              <a
                href="https://www.linkedin.com/in/arnav-shukla-19615128a/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors text-sm font-medium"
              >
                Connect on LinkedIn
              </a>
              <a
                href="mailto:arnavshukla0925@gmail.com"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors text-sm font-medium"
              >
                Send Email
              </a>
            </div>
          </div>

          {/* Important Disclaimer */}
          <Alert className="border-2 border-yellow-200 bg-yellow-50 dark:border-yellow-800 dark:bg-yellow-900/20">
            <AlertDescription className="text-base leading-relaxed">
              <strong className="text-yellow-900 dark:text-yellow-100">Important Medical Disclaimer:</strong>
              <div className="mt-2 text-yellow-900 dark:text-yellow-200">
                MediExpert is an educational tool designed for informational purposes only. It is <strong>NOT</strong> a
                substitute for professional medical advice, diagnosis, or treatment. Always consult with qualified
                healthcare professionals for:
              </div>
              <ul className="list-disc list-inside mt-3 space-y-1 text-yellow-900 dark:text-yellow-200 text-sm">
                <li>Medical diagnosis and treatment decisions</li>
                <li>Emergency medical situations</li>
                <li>Prescription medications</li>
                <li>Any health concerns or symptoms</li>
              </ul>
              <p className="mt-3 text-yellow-900 dark:text-yellow-200 text-sm">
                If you experience symptoms requiring immediate medical attention, call emergency services immediately.
              </p>
            </AlertDescription>
          </Alert>
        </div>
      </section>
    </main>
  )
}
