"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { useToast } from "@/hooks/use-toast"
import SymptomQuestion from "@/components/symptom-question"

const SYMPTOMS = [
  { key: "headache", label: "Headache" },
  { key: "back_pain", label: "Back Pain" },
  { key: "chest_pain", label: "Chest Pain" },
  { key: "cough", label: "Cough" },
  { key: "fainting", label: "Fainting" },
  { key: "sore_throat", label: "Sore Throat" },
  { key: "fatigue", label: "Fatigue" },
  { key: "restlessness", label: "Restlessness" },
  { key: "low_body_temp", label: "Low Body Temperature" },
  { key: "fever", label: "Fever" },
  { key: "sunken_eyes", label: "Sunken Eyes" },
  { key: "nausea", label: "Nausea" },
  { key: "blurred_vision", label: "Blurred Vision" },
]

interface SymptomSelectorProps {
  onDiagnose: (symptoms: Record<string, string>) => void
}

export default function SymptomSelector({ onDiagnose }: SymptomSelectorProps) {
  const [symptoms, setSymptoms] = useState<Record<string, string>>({})
  const [answered, setAnswered] = useState(0)
  const { toast } = useToast()

  const handleSymptomChange = (key: string, value: string) => {
    setSymptoms((prev) => {
      const newSymptoms = { ...prev, [key]: value }
      const answerCount = Object.values(newSymptoms).filter((v) => v !== "").length
      setAnswered(answerCount)
      return newSymptoms
    })
  }

  const handleDiagnose = () => {
    const answeredAll = SYMPTOMS.every((s) => symptoms[s.key] !== undefined && symptoms[s.key] !== "")

    if (!answeredAll) {
      toast({
        title: "Incomplete",
        description: "Please answer all symptom questions to get a diagnosis.",
        variant: "destructive",
      })
      return
    }

    onDiagnose(symptoms)
  }

  const progressPercent = (answered / SYMPTOMS.length) * 100
  const isComplete = answered === SYMPTOMS.length

  return (
    <section className="px-4 py-12 md:py-16 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 animate-slide-up">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-3xl font-bold text-foreground">Symptom Assessment</h2>
            <div
              className={`text-sm font-medium transition-all ${
                isComplete ? "text-green-600 dark:text-green-400" : "text-muted-foreground"
              }`}
            >
              {answered} / {SYMPTOMS.length} answered
            </div>
          </div>
          <div className="space-y-2">
            <div className="w-full bg-secondary rounded-full h-3 overflow-hidden">
              <div
                className={`h-3 rounded-full transition-all duration-500 ease-out ${
                  isComplete ? "bg-green-500" : "bg-primary"
                }`}
                style={{ width: `${progressPercent}%` }}
              />
            </div>
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>Start</span>
              <span>Getting closer...</span>
              <span className={isComplete ? "text-green-600 dark:text-green-400 font-semibold" : ""}>
                {isComplete ? "Ready!" : "Almost there"}
              </span>
            </div>
          </div>
        </div>

        <Card className="p-8 border-border/50 animate-fade-in-scale">
          <div className="grid gap-4 md:grid-cols-2">
            {SYMPTOMS.map((symptom, index) => (
              <div
                key={symptom.key}
                style={{
                  animation: `slide-up 0.5s ease-out ${index * 0.05}s both`,
                }}
              >
                <SymptomQuestion
                  label={symptom.label}
                  value={symptoms[symptom.key] || ""}
                  onChange={(value) => handleSymptomChange(symptom.key, value)}
                />
              </div>
            ))}
          </div>

          <div className="mt-8 flex gap-4 justify-center flex-wrap">
            <Button
              onClick={handleDiagnose}
              size="lg"
              className={`bg-primary hover:bg-primary/90 text-primary-foreground font-semibold transition-all transform ${
                isComplete ? "scale-105 shadow-lg" : ""
              }`}
              disabled={answered < SYMPTOMS.length}
            >
              {isComplete ? "Get Diagnosis" : "Complete All Symptoms"}
            </Button>
          </div>
        </Card>

        <Alert className="mt-8 bg-secondary/30 border border-border/50 hover:border-primary/30 transition-colors">
          <AlertDescription className="text-sm text-muted-foreground text-center">
            💡 <strong>Disclaimer:</strong> This medical expert system is for educational purposes only. It provides
            general information based on your symptoms and should not be used for self-diagnosis. Always consult with a
            qualified healthcare professional for proper medical advice and treatment.
          </AlertDescription>
        </Alert>
      </div>
    </section>
  )
}
