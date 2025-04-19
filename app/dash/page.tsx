"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarDays, MapPin, Ticket, Users } from "lucide-react";

export default function HomePage() {
  // In a real app, these would be fetched from the blockchain
  const events = [
    {
      id: "1",
      title: "Blockchain Conference 2025",
      description: "Join us for the biggest blockchain event of the year",
      date: "May 15, 2025",
      location: "San Francisco, CA",
      price: "0.05 ETH",
      attendees: 120,
      totalTickets: 200,
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: "2",
      title: "Web3 Developer Summit",
      description: "Learn from the best developers in the Web3 space",
      date: "June 22, 2025",
      location: "New York, NY",
      price: "0.03 ETH",
      attendees: 85,
      totalTickets: 150,
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: "3",
      title: "NFT Art Exhibition",
      description: "Explore the intersection of art and blockchain technology",
      date: "July 10, 2025",
      location: "Miami, FL",
      price: "0.02 ETH",
      attendees: 50,
      totalTickets: 100,
      image: "/placeholder.svg?height=400&width=600",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col items-center justify-between gap-4 mb-8 md:flex-row">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Discover Events</h1>
          <p className="text-muted-foreground">Find and purchase tickets for events using cryptocurrency</p>
        </div>
        <div className="flex gap-2">
          <Link href="/connect-wallet">
            <Button variant="outline">Connect Wallet</Button>
          </Link>
          <Link href="/create-event">
            <Button>Create Event</Button>
          </Link>
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {events.map((event) => (
          <Card key={event.id} className="overflow-hidden">
            <img src={event.image || "/placeholder.svg"} alt={event.title} className="h-48 w-full object-cover" />
            <CardHeader>
              <CardTitle>{event.title}</CardTitle>
              <CardDescription>{event.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-sm">
                <div className="flex items-center">
                  <CalendarDays className="mr-2 h-4 w-4 opacity-70" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="mr-2 h-4 w-4 opacity-70" />
                  <span>{event.location}</span>
                </div>
                <div className="flex items-center">
                  <Ticket className="mr-2 h-4 w-4 opacity-70" />
                  <span>{event.price} per ticket</span>
                </div>
                <div className="flex items-center">
                  <Users className="mr-2 h-4 w-4 opacity-70" />
                  <span>
                    {event.attendees}/{event.totalTickets} attendees
                  </span>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Link href={`/events/${event.id}`} className="w-full">
                <Button className="w-full">View Details</Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
