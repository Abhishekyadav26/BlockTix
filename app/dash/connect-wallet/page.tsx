"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronLeft, Wallet } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function ConnectWalletPage() {
  const { toast } = useToast()
  const [isConnecting, setIsConnecting] = useState(false)
  const [isConnected, setIsConnected] = useState(false)
  const [walletAddress, setWalletAddress] = useState("")

  const connectMetaMask = async () => {
    setIsConnecting(true)

    // Simulate connection delay
    setTimeout(() => {
      // Generate a random Ethereum address
      const randomAddress =
        "0x" + Array.from({ length: 40 }, () => "0123456789ABCDEF"[Math.floor(Math.random() * 16)]).join("")

      setWalletAddress(randomAddress)
      setIsConnected(true)
      setIsConnecting(false)

      toast({
        title: "Wallet Connected",
        description: "Your wallet has been connected successfully.",
      })
    }, 1500)
  }

  const disconnectWallet = () => {
    setIsConnected(false)
    setWalletAddress("")

    toast({
      title: "Wallet Disconnected",
      description: "Your wallet has been disconnected.",
    })
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/" className="flex items-center text-sm mb-6 hover:underline">
        <ChevronLeft className="h-4 w-4 mr-1" />
        Back to Events
      </Link>

      <div className="max-w-md mx-auto">
        <h1 className="text-3xl font-bold tracking-tight mb-2 text-center">Connect Wallet</h1>
        <p className="text-muted-foreground mb-6 text-center">Connect your wallet to buy tickets or create events</p>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-center">
              <Wallet className="mr-2 h-6 w-6" />
              Wallet Connection
            </CardTitle>
            <CardDescription className="text-center">
              Connect your Web3 wallet to interact with the blockchain
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {!isConnected ? (
              <div className="space-y-4">
                <Button
                  className="w-full flex items-center justify-center gap-2"
                  onClick={connectMetaMask}
                  disabled={isConnecting}
                >
                  <img src="/placeholder.svg?height=24&width=24" alt="MetaMask" className="h-6 w-6" />
                  {isConnecting ? "Connecting..." : "Connect with MetaMask"}
                </Button>

                <Button
                  variant="outline"
                  className="w-full flex items-center justify-center gap-2"
                  disabled={isConnecting}
                >
                  <img src="/placeholder.svg?height=24&width=24" alt="WalletConnect" className="h-6 w-6" />
                  Connect with WalletConnect
                </Button>

                <Button
                  variant="outline"
                  className="w-full flex items-center justify-center gap-2"
                  disabled={isConnecting}
                >
                  <img src="/placeholder.svg?height=24&width=24" alt="Coinbase Wallet" className="h-6 w-6" />
                  Connect with Coinbase Wallet
                </Button>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="p-4 border rounded-lg">
                  <p className="text-sm text-muted-foreground mb-1">Connected Wallet</p>
                  <p className="font-mono text-sm break-all">{walletAddress}</p>
                </div>

                <Button variant="destructive" className="w-full" onClick={disconnectWallet}>
                  Disconnect Wallet
                </Button>
              </div>
            )}
          </CardContent>
          <CardFooter className="flex justify-center">
            <p className="text-xs text-center text-muted-foreground max-w-xs">
              By connecting your wallet, you agree to our Terms of Service and Privacy Policy
            </p>
          </CardFooter>
        </Card>

        {isConnected && (
          <div className="mt-6 flex justify-center">
            <Link href="/">
              <Button variant="outline">Return to Events</Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}
