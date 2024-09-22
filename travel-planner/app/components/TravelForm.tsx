import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

type FormData = {
  origin: string
  destination: string
  age: number
  hotel_location: string
  flight_information: string
  trip_duration: string
}

type TravelFormProps = {
  onSubmit: (data: FormData) => void
}

export function TravelForm({ onSubmit }: TravelFormProps) {
  const [formData, setFormData] = useState<FormData>({
    origin: '',
    destination: '',
    age: 0,
    hotel_location: '',
    flight_information: '',
    trip_duration: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: name === 'age' ? parseInt(value) || 0 : value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(formData)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="origin">Origin</Label>
        <Input
          id="origin"
          name="origin"
          value={formData.origin}
          onChange={handleChange}
          placeholder="e.g. New York City, JFK"
          required
        />
      </div>
      <div>
        <Label htmlFor="destination">Destination</Label>
        <Input
          id="destination"
          name="destination"
          value={formData.destination}
          onChange={handleChange}
          placeholder="e.g. Rome, FCO"
          required
        />
      </div>
      <div>
        <Label htmlFor="age">Age</Label>
        <Input
          id="age"
          name="age"
          type="number"
          value={formData.age}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <Label htmlFor="hotel_location">Hotel Location</Label>
        <Input
          id="hotel_location"
          name="hotel_location"
          value={formData.hotel_location}
          onChange={handleChange}
          placeholder="e.g. Rome"
          required
        />
      </div>
      <div>
        <Label htmlFor="flight_information">Flight Information</Label>
        <Input
          id="flight_information"
          name="flight_information"
          value={formData.flight_information}
          onChange={handleChange}
          placeholder="e.g. JFK123, leaving 10:00AM October 10th, 2024 - coming back 10:00PM October 15th, 2024"
          required
        />
      </div>
      <div>
        <Label htmlFor="trip_duration">Trip Duration</Label>
        <Input
          id="trip_duration"
          name="trip_duration"
          value={formData.trip_duration}
          onChange={handleChange}
          placeholder="e.g. 5 days"
          required
        />
      </div>
      <Button type="submit">Plan My Trip</Button>
    </form>
  )
}