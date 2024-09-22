"use client"

import React, { useState } from 'react'
import { TravelForm } from './components/TravelForm'
import { LoadingPage } from './components/LoadingPage'
import { ResultsPage } from './components/ResultsPage'
import Image from 'next/image'

type FormData = {
  origin: string
  destination: string
  age: number
  hotel_location: string
  flight_information: string
  trip_duration: string
}
 
type ItineraryData = {
  days: Array<{
    date: string
    activities: Array<{
      name: string
      description: string
      location: string
      date: string
      cuisine: string
      why_its_suitable: string
      rating: string
      reviews: string
    }>
    restaurants: string[]
    flight: string | null
  }>
  name: string
  hotel: string
}

export default function TravelPlanner() {
  const [stage, setStage] = useState<'form' | 'loading' | 'results'>('form')
  const [formData, setFormData] = useState<FormData | null>(null)
  const [itineraryData, setItineraryData] = useState<ItineraryData | null>(null)
  const [error, setError] = useState<string | null>(null)

  const handleFormSubmit = async (data: FormData) => {
    setFormData(data)
    setStage('loading')
    setError(null)

    try {
      const response = await fetch('http://localhost:3001/plan-trip', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error('Failed to fetch itinerary')
      }

      const itinerary: ItineraryData = await response.json()
      setItineraryData(itinerary)
      setStage('results')
    } catch (error) {
      console.error('Error:', error)
      setError('An error occurred while planning your trip. Please try again.')
      setStage('form')
    }
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white p-4">
        <h1 className="text-2xl font-bold">Travel Planner</h1>
      </header>
      <main className="container mx-auto p-4">
        {stage === 'form' && <TravelForm onSubmit={handleFormSubmit} />}
        {stage === 'loading' && <LoadingPage />}
        {stage === 'results' && itineraryData && <ResultsPage itinerary={itineraryData} />}
      </main>
    </div>
  )
}