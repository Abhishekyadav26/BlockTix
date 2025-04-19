"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ChevronLeft } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function CreateEventPage() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isWalletConnected, setIsWalletConnected] = useState(false)

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    date: "",
    time: "",
    venue: "",
    location: "",
    ticketPrice: "",
    totalTickets: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const connectWallet = async () => {
    // In a real app, this would connect to MetaMask or another Web3 wallet
    setIsSubmitting(true)

    setTimeout(() => {
      setIsWalletConnected(true)
      setIsSubmitting(false)
      toast({
        title: "Wallet Connected",
        description: "Your wallet has been connected successfully.",
      })
    }, 1500)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // In a real app, this would deploy a smart contract for the event
    setIsSubmitting(true)

    setTimeout(() => {
      setIsSubmitting(false)
      toast({
        title: "Event Created",
        description: "Your event has been created successfully and is now live on the blockchain.",
      })

      // Reset form
      setFormData({
        title: "",
        description: "",
        date: "",
        time: "",
        venue: "",
        location: "",
        ticketPrice: "",
        totalTickets: "",
      })
    }, 2000)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/" className="flex items-center text-sm mb-6 hover:underline">
        <ChevronLeft className="h-4 w-4 mr-1" />
        Back to Events
      </Link>

      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold tracking-tight mb-2">Create Event</h1>
        <p className="text-muted-foreground mb-6">Create a new event and sell tickets directly on the blockchain</p>

        <Card>
          <CardHeader>
            <CardTitle>Event Details</CardTitle>
            <CardDescription>Fill in the information below to create your blockchain event</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <div className="grid gap-2">
                  <Label htmlFor="title">Event Title</Label>
                  <Input
                    id="title"
                    name="title"
                    placeholder="Enter event title"
                    value={formData.title}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="description">Event Description</Label>
                  <Textarea
                    id="description"
                    name="description"
                    placeholder="Describe your event"
                    rows={4}
                    value={formData.description}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="grid gap-2">
                    <Label htmlFor="date">Date</Label>
                    <Input id="date" name="date" type="date" value={formData.date} onChange={handleChange} required />
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="time">Time</Label>
                    <Input id="time" name="time" type="time" value={formData.time} onChange={handleChange} required />
                  </div>
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="venue">Venue</Label>
                  <Input
                    id="venue"
                    name="venue"
                    placeholder="Enter venue name"
                    value={formData.venue}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="location">Location</Label>
                  <Input
                    id="location"
                    name="location"
                    placeholder="City, State"
                    value={formData.location}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="grid gap-2">
                    <Label htmlFor="ticketPrice">Ticket Price (ETH)</Label>
                    <Input
                      id="ticketPrice"
                      name="ticketPrice"
                      type="number"
                      step="0.001"
                      min="0"
                      placeholder="0.05"
                      value={formData.ticketPrice}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="totalTickets">Total Tickets</Label>
                    <Input
                      id="totalTickets"
                      name="totalTickets"
                      type="number"
                      min="1"
                      placeholder="100"
                      value={formData.totalTickets}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
              </div>

              {!isWalletConnected ? (
                <Button type="button" className="w-full" onClick={connectWallet} disabled={isSubmitting}>
                  {isSubmitting ? "Connecting..." : "Connect Wallet to Continue"}
                </Button>
              ) : (
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Creating Event..." : "Create Event"}
                </Button>
              )}
            </form>
          </CardContent>
          <CardFooter className="flex justify-center">
            <p className="text-xs text-center text-muted-foreground max-w-md">
              By creating an event, you are deploying a smart contract to the blockchain. Gas fees will apply for
              contract deployment.
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
