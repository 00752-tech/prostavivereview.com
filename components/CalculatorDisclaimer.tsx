import React from 'react'
import { AlertTriangle } from 'lucide-react'

export function CalculatorDisclaimer() {
  return (
    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-8">
      <div className="flex">
        <div className="flex-shrink-0">
          <AlertTriangle className="h-5 w-5 text-yellow-400" aria-hidden="true" />
        </div>
        <div className="ml-3">
          <p className="text-sm text-yellow-700">
            <strong className="font-medium text-yellow-800">Disclaimer:</strong> These calculators are for informational purposes only and should not be considered medical advice. The results are based on general statistics and may not apply to everyone. Always consult with a qualified healthcare provider for personalized medical advice, diagnosis, or treatment. ProstaVive and its affiliates are not responsible for any actions taken based on the calculator results.
          </p>
        </div>
      </div>
    </div>
  )
}

