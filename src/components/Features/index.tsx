import { Check } from 'lucide-react'

interface FeaturesProps {
  features: string[]
}

export default function Features({ features }: FeaturesProps) {
  return (
    <div className="mx-auto mt-6 max-w-xl">
      <h2 className="text-foreground mb-3 text-lg font-semibold tracking-tight">Features</h2>
      <ul className="space-y-2">
        {features.map((feat, i) => (
          <li key={i} className="text-muted-foreground flex items-start gap-2 text-sm">
            <Check className="text-primary mt-0.5 h-4 w-4" />
            <span>{feat}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
