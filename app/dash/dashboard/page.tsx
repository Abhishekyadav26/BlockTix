"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CalendarDays, ChevronLeft, ExternalLink, MapPin, QrCode, Ticket } from "lucide-react"

export default function DashboardPage() {
  const [isWalletConnected, setIsWalletConnected] = useState(true)

  // In a real app, these would be fetched from the blockchain based on the connected wallet
  const purchasedTickets = [
    {
      id: "ticket-1",
      eventId: "1",
      eventTitle: "Blockchain Conference 2025",
      date: "May 15, 2025",
      location: "San Francisco, CA",
      ticketType: "General Admission",
      price: "0.05 ETH",
      purchaseDate: "April 10, 2025",
      tokenId: "12345",
      qrCode: "/placeholder.svg?height=200&width=200",
    },
    {
      id: "ticket-2",
      eventId: "3",
      eventTitle: "NFT Art Exhibition",
      date: "July 10, 2025",
      location: "Miami, FL",
      ticketType: "VIP Access",
      price: "0.08 ETH",
      purchaseDate: "April 15, 2025",
      tokenId: "67890",
      qrCode: "/placeholder.svg?height=200&width=200",
    },
  ]

  const createdEvents = [
    {
      id: "event-1",
      title: "Web3 Workshop",
      date: "August 5, 2025",
      location: "Austin, TX",
      ticketsSold: 45,
      totalTickets: 100,
      revenue: "2.25 ETH",
      contractAddress: "0x1234...5678",
    },
  ]

  if (!isWalletConnected) {
    return (
      <div className="container mx-auto px-4 py-8 flex flex-col items-center justify-center min-h-[60vh]">
        <h1 className="text-3xl font-bold tracking-tight mb-4 text-center">Connect Your Wallet</h1>
        <p className="text-muted-foreground mb-6 text-center max-w-md">
          Please connect your wallet to view your tickets and events
        </p>
        <Link href="/dash/connect-wallet">
          <Button size="lg">Connect Wallet</Button>
        </Link>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/" className="flex items-center text-sm mb-6 hover:underline">
        <ChevronLeft className="h-4 w-4 mr-1" />
        Back to Events
      </Link>

      <div className="flex flex-col items-start justify-between gap-4 mb-8 md:flex-row md:items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">My Dashboard</h1>
          <p className="text-muted-foreground">Manage your tickets and events</p>
        </div>
        <Link href="/dash/create-event">
          <Button>Create New Event</Button>
        </Link>
      </div>

      <Tabs defaultValue="tickets" className="w-full">
        <TabsList className="grid w-full max-w-md grid-cols-2">
          <TabsTrigger value="tickets">My Tickets</TabsTrigger>
          <TabsTrigger value="events">My Events</TabsTrigger>
        </TabsList>

        <TabsContent value="tickets" className="mt-6">
          {purchasedTickets.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {purchasedTickets.map((ticket) => (
                <Card key={ticket.id}>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span>{ticket.eventTitle}</span>
                      <Ticket className="h-5 w-5" />
                    </CardTitle>
                    <CardDescription>
                      {ticket.ticketType} - Token ID: {ticket.tokenId}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-center">
                      <img src={ticket.qrCode || "/placeholder.svg"} alt="Ticket QR Code" className="h-32 w-32" />
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center">
                        <CalendarDays className="mr-2 h-4 w-4 opacity-70" />
                        <span>{ticket.date}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="mr-2 h-4 w-4 opacity-70" />
                        <span>{ticket.location}</span>
                      </div>
                      <div className="flex items-center">
                        <QrCode className="mr-2 h-4 w-4 opacity-70" />
                        <span>Purchased on {ticket.purchaseDate}</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Link href={`/events/${ticket.eventId}`}>
                      <Button variant="outline" size="sm">
                        View Event
                      </Button>
                    </Link>
                    <Button variant="outline" size="sm">
                      Transfer Ticket
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-lg font-medium mb-2">No tickets found</h3>
              <p className="text-muted-foreground mb-6">You haven't purchased any tickets yet</p>
              <Link href="/">
                <Button>Browse Events</Button>
              </Link>
            </div>
          )}
        </TabsContent>

        <TabsContent value="events" className="mt-6">
          {createdEvents.length > 0 ? (
            <div className="grid gap-6">
              {createdEvents.map((event) => (
                <Card key={event.id}>
                  <CardHeader>
                    <CardTitle>{event.title}</CardTitle>
                    <CardDescription>
                      {event.date} - {event.location}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <p className="text-sm text-muted-foreground">Tickets Sold</p>
                        <p className="text-lg font-medium">
                          {event.ticketsSold}/{event.totalTickets}
                        </p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm text-muted-foreground">Revenue</p>
                        <p className="text-lg font-medium">{event.revenue}</p>
                      </div>
                      <div className="col-span-2 space-y-1">
                        <p className="text-sm text-muted-foreground">Contract Address</p>
                        <p className="text-sm font-mono break-all">{event.contractAddress}</p>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline" size="sm">
                      Manage Event
                    </Button>
                    <Button variant="outline" size="sm">
                      View on Explorer
                      <ExternalLink className="ml-1 h-3 w-3" />
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-lg font-medium mb-2">No events found</h3>
              <p className="text-muted-foreground mb-6">You haven't created any events yet</p>
              <Link href="/create-event">
                <Button>Create Event</Button>
              </Link>
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  )
}
