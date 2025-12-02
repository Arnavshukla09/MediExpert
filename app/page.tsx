"use client"

import { useState } from "react"
import SymptomSelector from "@/components/symptom-selector"
import DiagnosisResult from "@/components/diagnosis-result"
import HeroSection from "@/components/hero-section"
import { Button } from "@/components/ui/button"

export default function Home() {
  const [showDiagnosis, setShowDiagnosis] = useState(false)
  const [selectedSymptoms, setSelectedSymptoms] = useState<Record<string, string>>({})

  const handleReset = () => {
    setShowDiagnosis(false)
    setSelectedSymptoms({})
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-secondary/5">
      {!showDiagnosis ? (
        <>
          <HeroSection />
          <SymptomSelector
            onDiagnose={(symptoms) => {
              setSelectedSymptoms(symptoms)
              setShowDiagnosis(true)
            }}
          />
        </>
      ) : (
        <div className="min-h-screen flex flex-col">
          <DiagnosisResult symptoms={selectedSymptoms} />
          <div className="flex justify-center py-8">
            <Button onClick={handleReset} size="lg" className="bg-primary hover:bg-primary/90">
              Check Other Symptoms
            </Button>
          </div>
        </div>
      )}
    </main>
  )
}
