"use client"

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { useState } from "react"

interface SymptomQuestionProps {
  label: string
  value: string
  onChange: (value: string) => void
}

export default function SymptomQuestion({ label, value, onChange }: SymptomQuestionProps) {
  const [hoveredOption, setHoveredOption] = useState<string | null>(null)

  return (
    <div className="space-y-3 p-4 rounded-lg border border-transparent hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 cursor-pointer">
      <Label className="text-base font-medium text-foreground block">{label}</Label>
      <RadioGroup value={value} onValueChange={onChange}>
        <div
          className="flex items-center space-x-3 p-2 rounded-md transition-colors hover:bg-secondary/50"
          onMouseEnter={() => setHoveredOption("yes")}
          onMouseLeave={() => setHoveredOption(null)}
        >
          <RadioGroupItem value="yes" id={`${label}-yes`} />
          <Label
            htmlFor={`${label}-yes`}
            className={`font-normal cursor-pointer transition-all ${
              hoveredOption === "yes" ? "text-primary font-semibold" : ""
            }`}
          >
            Yes
          </Label>
          {value === "yes" && <span className="ml-auto text-primary text-sm font-semibold animate-pulse">✓</span>}
        </div>
        <div
          className="flex items-center space-x-3 p-2 rounded-md transition-colors hover:bg-secondary/50"
          onMouseEnter={() => setHoveredOption("no")}
          onMouseLeave={() => setHoveredOption(null)}
        >
          <RadioGroupItem value="no" id={`${label}-no`} />
          <Label
            htmlFor={`${label}-no`}
            className={`font-normal cursor-pointer transition-all ${
              hoveredOption === "no" ? "text-primary font-semibold" : ""
            }`}
          >
            No
          </Label>
          {value === "no" && (
            <span className="ml-auto text-muted-foreground text-sm font-semibold animate-pulse">–</span>
          )}
        </div>
      </RadioGroup>
    </div>
  )
}
