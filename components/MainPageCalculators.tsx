'use client'

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Input } from '@/components/ui/input'
import Link from 'next/link'
import { ArrowRight, Activity, Heart, Droplet, AlertTriangle, Ruler } from 'lucide-react'
import { ShareButtons } from '@/components/ShareButtons'
import { CalculatorDisclaimer } from '@/components/CalculatorDisclaimer'

// Update the type to include the new calculator
type CalculatorType = 'lifestyle' | 'symptoms' | 'psa' | 'risk' | 'volume' | null;

const MainPageCalculators = () => {
  const [activeCalculator, setActiveCalculator] = useState<CalculatorType>(null)
  const [lifestyleScore, setLifestyleScore] = useState(0)
  const [symptomScore, setSymptomScore] = useState(0)
  const [psaLevel, setPsaLevel] = useState(0)
  const [riskScore, setRiskScore] = useState(0)
  const [prostateVolume, setProstateVolume] = useState(0)
  const [showResults, setShowResults] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>, type: CalculatorType) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    
    if (type === 'lifestyle') {
      const exercise = parseInt(formData.get('exercise') as string) || 0
      const diet = parseInt(formData.get('diet') as string) || 0
      const sleep = parseInt(formData.get('sleep') as string) || 0
      const score = exercise + diet + sleep
      setLifestyleScore(score)
    } else if (type === 'symptoms') {
      const urgency = parseInt(formData.get('urgency') as string) || 0
      const frequency = parseInt(formData.get('frequency') as string) || 0
      const nocturia = parseInt(formData.get('nocturia') as string) || 0
      const score = urgency + frequency + nocturia
      setSymptomScore(score)
    } else if (type === 'psa') {
      const psa = parseFloat(formData.get('psa') as string) || 0
      setPsaLevel(psa)
    } else if (type === 'risk') {
      const age = parseInt(formData.get('age') as string) || 0
      const familyHistory = parseInt(formData.get('familyHistory') as string) || 0
      const race = formData.get('race')
      const raceScore = race === 'black' ? 1 : 0
      const score = age + familyHistory + raceScore
      setRiskScore(score)
    } else if (type === 'volume') {
      const age = parseInt(formData.get('age') as string) || 0
      const psa = parseFloat(formData.get('psa') as string) || 0
      // Simplified prostate volume calculation based on age and PSA
      // This is a basic estimation - actual volume calculations may vary
      const estimatedVolume = Math.round((age * 0.4 + psa * 3) * 10) / 10
      setProstateVolume(estimatedVolume)
    }
    setShowResults(true)
  }

  const calculators = [
    {
      id: 'lifestyle',
      title: 'Prostate Health Lifestyle Score',
      icon: <Heart className="h-6 w-6 text-red-500" />,
      description: 'Evaluate how your lifestyle choices impact your prostate health'
    },
    {
      id: 'symptoms',
      title: 'Urinary Symptom Score',
      icon: <Activity className="h-6 w-6 text-blue-500" />,
      description: 'Assess your urinary symptoms and get personalized recommendations'
    },
    {
      id: 'psa',
      title: 'PSA Level Interpreter',
      icon: <Droplet className="h-6 w-6 text-cyan-500" />,
      description: 'Understand your PSA (Prostate-Specific Antigen) test results'
    },
    {
      id: 'risk',
      title: 'Prostate Cancer Risk Calculator',
      icon: <AlertTriangle className="h-6 w-6 text-yellow-500" />,
      description: 'Estimate your risk of developing prostate cancer based on key factors'
    },
    {
      id: 'volume',
      title: 'Prostate Volume Calculator',
      icon: <Ruler className="h-6 w-6 text-purple-500" />,
      description: 'Estimate your prostate volume based on age and PSA levels'
    }
  ]

  const renderCalculator = () => {
    if (!activeCalculator) {
      return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {calculators.map((calc) => (
            <Card 
              key={calc.id}
              className="cursor-pointer hover:shadow-lg transition-shadow"
              onClick={() => setActiveCalculator(calc.id as CalculatorType)}
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  {calc.icon}
                  {calc.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{calc.description}</p>
                <Button variant="ghost" className="mt-4 w-full group">
                  Start Calculator
                  <ArrowRight className="ml-2 h-4 w-4 text-blue-500 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      )
    }

    return (
      <Card>
        <CardHeader>
          <CardTitle className="text-blue-600">
            {calculators.find(calc => calc.id === activeCalculator)?.title}
          </CardTitle>
          <Button 
            variant="ghost" 
            onClick={() => {
              setActiveCalculator(null)
              setShowResults(false)
            }}
            className="mt-2 text-blue-600 hover:text-blue-700"
          >
            ← Back to Calculators
          </Button>
        </CardHeader>
        <CardContent>
          <form onSubmit={(e) => handleSubmit(e, activeCalculator)} className="space-y-6">
            {activeCalculator === 'lifestyle' && (
              <>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="exercise">How often do you exercise?</Label>
                    <RadioGroup defaultValue="0" name="exercise" className="mt-2">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="0" id="exercise-0" />
                        <Label htmlFor="exercise-0">Rarely</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="1" id="exercise-1" />
                        <Label htmlFor="exercise-1">1-2 times a week</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="2" id="exercise-2" />
                        <Label htmlFor="exercise-2">3-4 times a week</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="3" id="exercise-3" />
                        <Label htmlFor="exercise-3">5+ times a week</Label>
                      </div>
                    </RadioGroup>
                  </div>
                  <div>
                    <Label htmlFor="diet">How would you rate your diet?</Label>
                    <RadioGroup defaultValue="0" name="diet" className="mt-2">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="0" id="diet-0" />
                        <Label htmlFor="diet-0">Poor</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="1" id="diet-1" />
                        <Label htmlFor="diet-1">Fair</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="2" id="diet-2" />
                        <Label htmlFor="diet-2">Good</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="3" id="diet-3" />
                        <Label htmlFor="diet-3">Excellent</Label>
                      </div>
                    </RadioGroup>
                  </div>
                  <div>
                    <Label htmlFor="sleep">How many hours of sleep do you get?</Label>
                    <RadioGroup defaultValue="0" name="sleep" className="mt-2">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="0" id="sleep-0" />
                        <Label htmlFor="sleep-0">Less than 6 hours</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="1" id="sleep-1" />
                        <Label htmlFor="sleep-1">6-7 hours</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="2" id="sleep-2" />
                        <Label htmlFor="sleep-2">7-8 hours</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="3" id="sleep-3" />
                        <Label htmlFor="sleep-3">8+ hours</Label>
                      </div>
                    </RadioGroup>
                  </div>
                </div>
                <Button type="submit" className="w-full">Calculate Lifestyle Score</Button>
              </>
            )}
            {activeCalculator === 'symptoms' && (
              <>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="urgency">How often do you experience sudden urges to urinate?</Label>
                    <RadioGroup defaultValue="0" name="urgency" className="mt-2">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="0" id="urgency-0" />
                        <Label htmlFor="urgency-0">Never</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="1" id="urgency-1" />
                        <Label htmlFor="urgency-1">Rarely</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="2" id="urgency-2" />
                        <Label htmlFor="urgency-2">Sometimes</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="3" id="urgency-3" />
                        <Label htmlFor="urgency-3">Often</Label>
                      </div>
                    </RadioGroup>
                  </div>
                  <div>
                    <Label htmlFor="frequency">How often do you urinate during the day?</Label>
                    <RadioGroup defaultValue="0" name="frequency" className="mt-2">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="0" id="frequency-0" />
                        <Label htmlFor="frequency-0">1-6 times</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="1" id="frequency-1" />
                        <Label htmlFor="frequency-1">7-8 times</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="2" id="frequency-2" />
                        <Label htmlFor="frequency-2">9-10 times</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="3" id="frequency-3" />
                        <Label htmlFor="frequency-3">11+ times</Label>
                      </div>
                    </RadioGroup>
                  </div>
                  <div>
                    <Label htmlFor="nocturia">How many times do you wake up to urinate at night?</Label>
                    <RadioGroup defaultValue="0" name="nocturia" className="mt-2">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="0" id="nocturia-0" />
                        <Label htmlFor="nocturia-0">0 times</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="1" id="nocturia-1" />
                        <Label htmlFor="nocturia-1">1 time</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="2" id="nocturia-2" />
                        <Label htmlFor="nocturia-2">2 times</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="3" id="nocturia-3" />
                        <Label htmlFor="nocturia-3">3+ times</Label>
                      </div>
                    </RadioGroup>
                  </div>
                </div>
                <Button type="submit" className="w-full">Calculate Symptom Score</Button>
              </>
            )}
            {activeCalculator === 'psa' && (
              <>
                <div>
                  <Label htmlFor="psa">Enter your PSA level (ng/mL)</Label>
                  <Input
                    type="number"
                    id="psa"
                    name="psa"
                    step="0.1"
                    min="0"
                    required
                    className="mt-2"
                  />
                </div>
                <Button type="submit" className="w-full mt-4">Interpret PSA Level</Button>
              </>
            )}
            {activeCalculator === 'risk' && (
              <>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="age">What is your age?</Label>
                    <Input
                      type="number"
                      id="age"
                      name="age"
                      min="0"
                      required
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="familyHistory">Do you have a family history of prostate cancer?</Label>
                    <RadioGroup defaultValue="0" name="familyHistory" className="mt-2">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="0" id="familyHistory-0" />
                        <Label htmlFor="familyHistory-0">No</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="1" id="familyHistory-1" />
                        <Label htmlFor="familyHistory-1">Yes</Label>
                      </div>
                    </RadioGroup>
                  </div>
                  <div>
                    <Label htmlFor="race">What is your race?</Label>
                    <RadioGroup defaultValue="0" name="race" className="mt-2">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="white" id="race-0" />
                        <Label htmlFor="race-0">White</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="black" id="race-1" />
                        <Label htmlFor="race-1">Black</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="asian" id="race-2" />
                        <Label htmlFor="race-2">Asian</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="other" id="race-3" />
                        <Label htmlFor="race-3">Other</Label>
                      </div>
                    </RadioGroup>
                  </div>
                </div>
                <Button type="submit" className="w-full">Calculate Risk Score</Button>
              </>
            )}
            {activeCalculator === 'volume' && (
              <>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="age">What is your age?</Label>
                    <Input
                      type="number"
                      id="age"
                      name="age"
                      min="0"
                      required
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="psa">What is your PSA level (ng/mL)?</Label>
                    <Input
                      type="number"
                      id="psa"
                      name="psa"
                      step="0.1"
                      min="0"
                      required
                      className="mt-2"
                    />
                  </div>
                </div>
                <Button type="submit" className="w-full">Calculate Prostate Volume</Button>
              </>
            )}
          </form>

          {showResults && (
            <div className="mt-6 p-6 bg-blue-50 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Your Result</h3>
              {activeCalculator === 'lifestyle' && (
                <>
                  <p className="text-lg mb-4">Your Lifestyle Score is {lifestyleScore} out of 9</p>
                  <div className="mb-6">
                    <h4 className="font-semibold mb-2">What Your Score Means:</h4>
                    {lifestyleScore <= 3 ? (
                      <>
                        <p className="mb-4">Your lifestyle could benefit from some important improvements to better support your prostate health. Here's what we recommend:</p>
                        <ul className="list-disc pl-5 mb-4 space-y-2">
                          <li>Consider incorporating more regular exercise into your routine</li>
                          <li>Focus on improving your diet with prostate-healthy foods</li>
                          <li>Work on establishing better sleep habits</li>
                          <li>Watch our educational video to learn more about natural prostate support</li>
                        </ul>
                      </>
                    ) : lifestyleScore <= 6 ? (
                      <>
                        <p className="mb-4">You're making good progress with your lifestyle choices, but there's room for optimization:</p>
                        <ul className="list-disc pl-5 mb-4 space-y-2">
                          <li>Keep building on your current healthy habits</li>
                          <li>Consider areas where you scored lower for improvement</li>
                          <li>Learn about additional ways to support your prostate health</li>
                          <li>Discover how ProstaVive can complement your healthy lifestyle</li>
                        </ul>
                      </>
                    ) : (
                      <>
                        <p className="mb-4">Excellent job maintaining healthy lifestyle habits! To maintain and enhance your prostate health:</p>
                        <ul className="list-disc pl-5 mb-4 space-y-2">
                          <li>Keep up your great lifestyle choices</li>
                          <li>Learn about additional prostate health optimization</li>
                          <li>Consider natural supplements to support your healthy routine</li>
                          <li>Stay informed about the latest in prostate health</li>
                        </ul>
                      </>
                    )}
                  </div>
                </>
              )}
              {activeCalculator === 'symptoms' && (
                <>
                  <p className="text-lg mb-4">Your Symptom Score is {symptomScore} out of 9</p>
                  <div className="mb-6">
                    <h4 className="font-semibold mb-2">Understanding Your Symptoms:</h4>
                    {symptomScore <= 3 ? (
                      <>
                        <p className="mb-4">While your symptoms are mild, it's important to be proactive about your prostate health:</p>
                        <ul className="list-disc pl-5 mb-4 space-y-2">
                          <li>Continue monitoring your symptoms</li>
                          <li>Learn about preventive measures</li>
                          <li>Consider natural prostate support options</li>
                          <li>Watch our video to understand how to maintain good prostate health</li>
                        </ul>
                      </>
                    ) : symptomScore <= 6 ? (
                      <>
                        <p className="mb-4">Your moderate symptoms suggest it's time to take action:</p>
                        <ul className="list-disc pl-5 mb-4 space-y-2">
                          <li>Consider consulting with a healthcare professional</li>
                          <li>Learn about natural ways to support prostate health</li>
                          <li>Understand how lifestyle changes can help</li>
                          <li>Discover how ProstaVive has helped others with similar symptoms</li>
                        </ul>
                      </>
                    ) : (
                      <>
                        <p className="mb-4">Your symptoms indicate the need for immediate attention:</p>
                        <ul className="list-disc pl-5 mb-4 space-y-2">
                          <li>We strongly recommend consulting with a healthcare professional</li>
                          <li>Learn about comprehensive prostate support options</li>
                          <li>Understand how natural supplements can complement medical care</li>
                          <li>Watch our educational video about managing prostate health</li>
                        </ul>
                      </>
                    )}
                  </div>
                </>
              )}
              {activeCalculator === 'psa' && (
                <>
                  <p className="text-lg mb-4">Your PSA level is {psaLevel} ng/mL</p>
                  <div className="mb-6">
                    <h4 className="font-semibold mb-2">Understanding Your PSA Level:</h4>
                    {psaLevel < 4 ? (
                      <>
                        <p className="mb-4">Your PSA level is within the generally accepted normal range:</p>
                        <ul className="list-disc pl-5 mb-4 space-y-2">
                          <li>Continue regular check-ups with your healthcare provider</li>
                          <li>Maintain a healthy lifestyle to support prostate health</li>
                          <li>Learn about preventive measures and natural prostate support</li>
                          <li>Watch our video to understand more about prostate health maintenance</li>
                        </ul>
                      </>
                    ) : psaLevel < 10 ? (
                      <>
                        <p className="mb-4">Your PSA level is slightly elevated and may warrant further investigation:</p>
                        <ul className="list-disc pl-5 mb-4 space-y-2">
                          <li>Consult with your healthcare provider for a thorough evaluation</li>
                          <li>Discuss potential causes of PSA elevation, which can include non-cancerous conditions</li>
                          <li>Learn about natural ways to support prostate health</li>
                          <li>Consider watching our video about comprehensive prostate care</li>
                        </ul>
                      </>
                    ) : (
                      <>
                        <p className="mb-4">Your PSA level is significantly elevated and requires immediate attention:</p>
                        <ul className="list-disc pl-5 mb-4 space-y-2">
                          <li>Schedule an appointment with your healthcare provider as soon as possible</li>
                          <li>Discuss the need for further testing and evaluation</li>
                          <li>Learn about all available options for prostate health support</li>
                          <li>Watch our educational video about managing prostate health concerns</li>
                        </ul>
                      </>
                    )}
                  </div>
                </>
              )}
              {activeCalculator === 'risk' && (
                <>
                  <p className="text-lg mb-4">Your Prostate Cancer Risk Score is {riskScore} out of 5</p>
                  <div className="mb-6">
                    <h4 className="font-semibold mb-2">Understanding Your Risk:</h4>
                    {riskScore <= 1 ? (
                      <>
                        <p className="mb-4">Your risk factors suggest a lower risk for prostate cancer:</p>
                        <ul className="list-disc pl-5 mb-4 space-y-2">
                          <li>Continue maintaining a healthy lifestyle</li>
                          <li>Stay informed about prostate health</li>
                          <li>Consider natural supplements for prostate support</li>
                          <li>Discuss appropriate screening schedules with your healthcare provider</li>
                        </ul>
                      </>
                    ) : riskScore <= 3 ? (
                      <>
                        <p className="mb-4">Your risk factors suggest a moderate risk for prostate cancer:</p>
                        <ul className="list-disc pl-5 mb-4 space-y-2">
                          <li>Consult with your healthcare provider about appropriate screening</li>
                          <li>Learn about lifestyle changes that can support prostate health</li>
                          <li>Consider natural supplements like ProstaVive for additional support</li>
                          <li>Stay vigilant about any changes in urinary or sexual function</li>
                        </ul>
                      </>
                    ) : (
                      <>
                        <p className="mb-4">Your risk factors suggest a higher risk for prostate cancer:</p>
                        <ul className="list-disc pl-5 mb-4 space-y-2">
                          <li>Schedule a comprehensive check-up with your healthcare provider</li>
                          <li>Discuss a proactive screening and monitoring plan</li>
                          <li>Learn about all available options for prostate health support</li>
                          <li>Consider lifestyle changes and natural supplements to support overall prostate health</li>
                        </ul>
                      </>
                    )}
                  </div>
                </>
              )}
              {activeCalculator === 'volume' && (
                <>
                  <p className="text-lg mb-4">Your Estimated Prostate Volume is {prostateVolume} cc (cubic centimeters)</p>
                  <div className="mb-6">
                    <h4 className="font-semibold mb-2">Understanding Your Prostate Volume:</h4>
                    {prostateVolume <= 30 ? (
                      <>
                        <p className="mb-4">Your estimated prostate volume appears to be within the normal range:</p>
                        <ul className="list-disc pl-5 mb-4 space-y-2">
                          <li>A normal prostate volume is typically between 20-30cc</li>
                          <li>Continue maintaining good prostate health habits</li>
                          <li>Consider regular check-ups to monitor any changes</li>
                          <li>Learn about natural ways to maintain prostate health</li>
                        </ul>
                      </>
                    ) : prostateVolume <= 60 ? (
                      <>
                        <p className="mb-4">Your estimated prostate volume suggests mild to moderate enlargement:</p>
                        <ul className="list-disc pl-5 mb-4 space-y-2">
                          <li>Mild prostate enlargement is common with age</li>
                          <li>Consider discussing your results with a healthcare provider</li>
                          <li>Learn about natural supplements that support prostate health</li>
                          <li>Monitor any changes in urinary symptoms</li>
                        </ul>
                      </>
                    ) : (
                      <>
                        <p className="mb-4">Your estimated prostate volume suggests significant enlargement:</p>
                        <ul className="list-disc pl-5 mb-4 space-y-2">
                          <li>Schedule an appointment with your healthcare provider</li>
                          <li>Discuss treatment options and lifestyle changes</li>
                          <li>Consider comprehensive prostate support supplements</li>
                          <li>Monitor symptoms closely and seek medical attention if they worsen</li>
                        </ul>
                      </>
                    )}
                  </div>
                </>
              )}

              <div className="bg-blue-100 p-4 rounded-lg mb-6">
                <p className="text-blue-800 font-medium">
                  Want to learn more about maintaining optimal prostate health? Watch our educational video presentation to discover how thousands of men are finding relief with ProstaVive.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild className="flex-1 bg-blue-600 text-white hover:bg-blue-700">
                  <Link href="https://prostavivereview.com/api/vsl">
                    Watch Video Presentation
                  </Link>
                </Button>
                <Button asChild className="flex-1 bg-green-600 text-white hover:bg-green-700">
                  <Link href="https://prostavivereview.com/api/sale">
                    Learn About ProstaVive
                  </Link>
                </Button>
              </div>
              <div className="mt-4 flex justify-center">
                <ShareButtons />
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    )
  }

  return (
    <section className="bg-blue-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Prostate Health Calculators</h2>
        {renderCalculator()}
        <CalculatorDisclaimer />
      </div>
    </section>
  )
}

export default MainPageCalculators

