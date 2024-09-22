import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

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

type ResultsPageProps = {
  itinerary: ItineraryData
}

export function ResultsPage({ itinerary }: ResultsPageProps) {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold">{itinerary.name}</h2>
      <p className="text-xl">Hotel: {itinerary.hotel}</p>
      {itinerary.days.map((day, index) => (
        <Card key={index}>
          <CardHeader>
            <CardTitle>Day {index + 1}: {new Date(day.date).toLocaleDateString()}</CardTitle>
            {day.flight && <CardDescription>{day.flight}</CardDescription>}
          </CardHeader>
          <CardContent>
            <h3 className="text-lg font-semibold mb-2">Activities:</h3>
            {day.activities.map((activity, actIndex) => (
              <div key={actIndex} className="mb-4 p-4 bg-gray-100 rounded-lg">
                <h4 className="font-semibold">{activity.name}</h4>
                <p>{activity.description}</p>
                <p>Location: {activity.location}</p>
                <p>Cuisine: {activity.cuisine}</p>
                <p>Why it's suitable: {activity.why_its_suitable}</p>
                <p>Rating: {activity.rating} ({activity.reviews})</p>
              </div>
            ))}
            {day.restaurants.length > 0 && (
              <>
                <h3 className="text-lg font-semibold mt-4 mb-2">Restaurants:</h3>
                <ul>
                  {day.restaurants.map((restaurant, resIndex) => (
                    <li key={resIndex}>{restaurant}</li>
                  ))}
                </ul>
              </>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  )
}