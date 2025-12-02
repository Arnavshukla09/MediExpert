"use client"

import { useEffect, useState } from "react"
import { Card } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { diseaseData, type Severity } from "@/lib/disease-data"
import { findMostProbableDisease } from "@/lib/diagnosis-engine"

interface DiagnosisResultProps {
  symptoms: Record<string, string>
}

const severityConfig: Record<Severity, { color: string; bgColor: string; label: string; icon: string }> = {
  critical: {
    color: "text-destructive",
    bgColor: "bg-red-100 dark:bg-red-900/30",
    label: "🚨 CRITICAL - EMERGENCY",
    icon: "⚠️",
  },
  moderate: {
    color: "text-yellow-700 dark:text-yellow-300",
    bgColor: "bg-yellow-100 dark:bg-yellow-900/30",
    label: "⚠️ MODERATE",
    icon: "📋",
  },
  mild: {
    color: "text-green-700 dark:text-green-300",
    bgColor: "bg-green-100 dark:bg-green-900/30",
    label: "✓ MILD",
    icon: "✨",
  },
}

export default function DiagnosisResult({ symptoms }: DiagnosisResultProps) {
  const [disease, setDisease] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)
  const [displayedDisease, setDisplayedDisease] = useState("")
  const [diagnosisInfo, setDiagnosisInfo] = useState<{
    disease: string
    confidence: number
    severity: Severity
    urgency: string
  } | null>(null)

  useEffect(() => {
    const info = findMostProbableDisease(symptoms)
    setDiagnosisInfo(info)
    setDisease(info.disease)

    let index = 0
    const interval = setInterval(() => {
      if (index <= info.disease.length) {
        setDisplayedDisease(info.disease.substring(0, index))
        index++
      } else {
        clearInterval(interval)
        setLoading(false)
      }
    }, 50)

    return () => clearInterval(interval)
  }, [symptoms])

  const data = disease ? diseaseData[disease as keyof typeof diseaseData] : null
  const matchingSymptoms = Object.values(symptoms).filter((v) => v === "yes").length
  const severity = diagnosisInfo?.severity || "moderate"
  const config = severityConfig[severity]

  return (
    <section className="px-4 py-12 md:py-16 bg-background">
      <div className="max-w-4xl mx-auto">
        <Alert
          className={`mb-8 border-2 animate-slide-up ${
            severity === "critical"
              ? "border-destructive bg-destructive/5"
              : severity === "moderate"
                ? "border-yellow-200 bg-yellow-50 dark:border-yellow-800 dark:bg-yellow-900/20"
                : "border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-900/20"
          }`}
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <AlertTitle className={severity === "critical" ? "text-destructive font-bold text-lg" : ""}>
            {severity === "critical" ? "⚠️ CRITICAL CONDITION DETECTED" : "Analysis Complete"}
          </AlertTitle>
          <AlertDescription>
            Based on your {matchingSymptoms} symptom(s), here's what our expert system found.
            {severity === "critical" && " Please seek immediate medical attention."}
          </AlertDescription>
        </Alert>

        <Card className="p-8 border-border/50 mb-8 animate-fade-in-scale">
          <div className="text-center mb-12">
            <div className={`inline-block mb-6 p-5 rounded-full animate-pulse-glow ${config.bgColor}`}>
              <span className="text-3xl">{config.icon}</span>
            </div>

            <Badge className={`mb-4 text-sm font-bold ${config.color} ${config.bgColor} border-2`}>
              {config.label}
            </Badge>

            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-2 min-h-12">
              {displayedDisease || "Unknown Condition"}
              {loading && <span className="animate-pulse">|</span>}
            </h2>
            <p className="text-lg text-muted-foreground">Most probable diagnosis based on your symptoms</p>
          </div>

          <div className="mb-8 p-5 bg-primary/10 border-l-4 border-primary rounded-lg">
            <p className="font-semibold text-foreground mb-1">Recommended Action:</p>
            <p
              className={`text-sm font-medium ${severity === "critical" ? "text-destructive font-bold" : "text-primary"}`}
            >
              {diagnosisInfo?.urgency || "Consult a healthcare professional"}
            </p>
          </div>

          <div className="mb-8 p-4 bg-secondary/30 rounded-lg border border-border/50">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-foreground">Diagnostic Confidence</span>
              <span className="text-sm font-semibold text-primary">{diagnosisInfo?.confidence || 0}%</span>
            </div>
            <Progress value={diagnosisInfo?.confidence || 0} className="h-2" />
          </div>

          {data && (
            <Tabs defaultValue="description" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="description">Description</TabsTrigger>
                <TabsTrigger value="details">Details</TabsTrigger>
                <TabsTrigger value="treatments">Treatments</TabsTrigger>
              </TabsList>

              <TabsContent value="description" className="space-y-4 mt-6 animate-fade-in-scale">
                <div className="prose prose-sm dark:prose-invert max-w-none">
                  <p className="text-foreground whitespace-pre-wrap leading-relaxed">{data.description}</p>
                </div>
              </TabsContent>

              <TabsContent value="details" className="space-y-4 mt-6 animate-fade-in-scale">
                <div className="bg-secondary/30 p-6 rounded-lg border border-border/50">
                  <h3 className="font-semibold text-foreground mb-6 text-lg">Your Symptoms</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {Object.entries(symptoms).map(([key, value]) => (
                      <div
                        key={key}
                        className={`flex items-center gap-3 p-3 rounded-lg transition-all ${
                          value === "yes"
                            ? "bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800"
                            : "bg-muted/50 border border-border/50"
                        }`}
                      >
                        <div
                          className={`w-3 h-3 rounded-full flex-shrink-0 ${
                            value === "yes" ? "bg-green-500 shadow-md" : "bg-gray-400"
                          }`}
                        />
                        <span
                          className={`text-sm capitalize font-medium transition-colors ${
                            value === "yes" ? "text-green-700 dark:text-green-100" : "text-muted-foreground"
                          }`}
                        >
                          {key.replace(/_/g, " ")}
                        </span>
                        <span
                          className={`ml-auto text-xs font-bold ${
                            value === "yes" ? "text-green-600 dark:text-green-300" : "text-gray-500"
                          }`}
                        >
                          {value.toUpperCase()}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="treatments" className="space-y-4 mt-6 animate-fade-in-scale">
                <div className="prose prose-sm dark:prose-invert max-w-none">
                  <p className="text-foreground whitespace-pre-wrap leading-relaxed font-semibold mb-4">
                    Common Medications and Procedures:
                  </p>
                  <p className="text-foreground whitespace-pre-wrap leading-relaxed">{data.treatments}</p>
                </div>
              </TabsContent>
            </Tabs>
          )}
        </Card>

        <Alert
          className={`border-2 animate-slide-up ${
            severity === "critical"
              ? "border-destructive bg-destructive/5"
              : "border-yellow-200 bg-yellow-50 dark:border-yellow-800 dark:bg-yellow-900/20"
          }`}
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <AlertTitle className={severity === "critical" ? "text-destructive font-bold" : ""}>
            {severity === "critical" ? "🚨 EMERGENCY NOTICE" : "Important Notice"}
          </AlertTitle>
          <AlertDescription>
            {severity === "critical"
              ? "This diagnosis suggests a critical condition requiring immediate emergency medical attention. Call emergency services or go to the nearest emergency room immediately. Do not delay seeking professional medical care."
              : severity === "moderate"
                ? "This diagnosis suggests a condition requiring professional medical evaluation. Please consult with a healthcare provider as soon as possible for proper diagnosis and treatment."
                : "This diagnosis is based on an expert system analysis and should not replace professional medical consultation. While your symptoms suggest a mild condition, please consult with a qualified healthcare provider if symptoms persist or worsen."}
          </AlertDescription>
        </Alert>
      </div>
    </section>
  )
}
