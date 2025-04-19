"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { CalendarDays, ChevronLeft, MapPin, Ticket, Users } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function EventPage({ params }: { params: { id: string } }) {
  const { toast } = useToast();
  const [quantity, setQuantity] = useState(1);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isWalletConnected, setIsWalletConnected] = useState(false);

  const event = {
    id: params.id,
    title:
      params.id === "1"
        ? "Blockchain Conference 2025"
        : params.id === "2"
        ? "Web3 Developer Summit"
        : "NFT Art Exhibition",
    description:
      "Join us for this exciting blockchain event where industry leaders will share insights on the future of decentralized technologies. Network with professionals, attend workshops, and participate in interactive sessions designed to deepen your understanding of blockchain applications.",
    date:
      params.id === "1"
        ? "May 15, 2025"
        : params.id === "2"
        ? "June 22, 2025"
        : "July 10, 2025",
    time: "10:00 AM - 6:00 PM",
    location:
      params.id === "1"
        ? "San Francisco, CA"
        : params.id === "2"
        ? "New York, NY"
        : "Miami, FL",
    venue:
      params.id === "1"
        ? "Moscone Center"
        : params.id === "2"
        ? "Javits Center"
        : "Miami Convention Center",
    organizer: "Web3 Events DAO",
    price: params.id === "1" ? "0.05" : params.id === "2" ? "0.03" : "0.02",
    attendees: params.id === "1" ? 120 : params.id === "2" ? 85 : 50,
    totalTickets: params.id === "1" ? 200 : params.id === "2" ? 150 : 100,
    image: "/placeholder.svg?height=600&width=1200",
  };

  const connectWallet = async () => {
    // In a real app, this would connect to MetaMask or another Web3 wallet
    setIsProcessing(true);

    setTimeout(() => {
      setIsWalletConnected(true);
      setIsProcessing(false);
      toast({
        title: "Wallet Connected",
        description: "Your wallet has been connected successfully.",
      });
    }, 1500);
  };

  const purchaseTickets = async () => {
    // In a real app, this would call a smart contract function
    setIsProcessing(true);

    setTimeout(() => {
      setIsProcessing(false);
      toast({
        title: "Purchase Successful",
        description: `You have purchased ${quantity} ticket(s) for ${event.title}.`,
      });
    }, 2000);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/" className="flex items-center text-sm mb-6 hover:underline">
        <ChevronLeft className="h-4 w-4 mr-1" />
        Back to Events
      </Link>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2">
          <img
            src={event.image || "/placeholder.svg"}
            alt={event.title}
            className="w-full h-64 md:h-96 object-cover rounded-lg mb-6"
          />

          <h1 className="text-3xl font-bold tracking-tight mb-2">
            {event.title}
          </h1>
          <p className="text-muted-foreground mb-6">{event.description}</p>

          <div className="grid gap-6 sm:grid-cols-2 mb-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Event Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center">
                  <CalendarDays className="mr-2 h-5 w-5 opacity-70" />
                  <div>
                    <p className="font-medium">{event.date}</p>
                    <p className="text-sm text-muted-foreground">
                      {event.time}
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <MapPin className="mr-2 h-5 w-5 opacity-70" />
                  <div>
                    <p className="font-medium">{event.venue}</p>
                    <p className="text-sm text-muted-foreground">
                      {event.location}
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Users className="mr-2 h-5 w-5 opacity-70" />
                  <div>
                    <p className="font-medium">
                      {event.attendees}/{event.totalTickets} Attendees
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Organized by {event.organizer}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Ticket Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Ticket className="mr-2 h-5 w-5 opacity-70" />
                    <span>Price per ticket</span>
                  </div>
                  <span className="font-medium">{event.price} ETH</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Available tickets</span>
                  <span className="font-medium">
                    {event.totalTickets - event.attendees}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Sale ends on</span>
                  <span className="font-medium">{event.date}</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div>
          <Card>
            <CardHeader>
              <CardTitle>Purchase Tickets</CardTitle>
              <CardDescription>
                Secure your spot with cryptocurrency
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="quantity">Number of Tickets</Label>
                <Input
                  id="quantity"
                  type="number"
                  min="1"
                  max={event.totalTickets - event.attendees}
                  value={quantity}
                  onChange={(e) => setQuantity(Number.parseInt(e.target.value))}
                />
              </div>

              <Separator />

              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Price per ticket</span>
                  <span>{event.price} ETH</span>
                </div>
                <div className="flex justify-between">
                  <span>Quantity</span>
                  <span>x {quantity}</span>
                </div>
                <Separator />
                <div className="flex justify-between font-bold">
                  <span>Total</span>
                  <span>
                    {(Number.parseFloat(event.price) * quantity).toFixed(4)} ETH
                  </span>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col space-y-2">
              {!isWalletConnected ? (
                <Button
                  className="w-full"
                  onClick={connectWallet}
                  disabled={isProcessing}
                >
                  {isProcessing ? "Connecting..." : "Connect Wallet"}
                </Button>
              ) : (
                <Button
                  className="w-full"
                  onClick={purchaseTickets}
                  disabled={isProcessing}
                >
                  {isProcessing ? "Processing..." : "Purchase Tickets"}
                </Button>
              )}
              <p className="text-xs text-center text-muted-foreground">
                Tickets will be sent as NFTs to your connected wallet
              </p>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
