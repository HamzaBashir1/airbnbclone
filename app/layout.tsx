export const dynamic = "force-dynamic"
import { Nunito } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar/Navbar"
import ClientOnly from "@/components/ClientOnly"
import RegisterModal from "@/components/modals/RegisterModal"
import ToasterProvider from "@/app/providers/ToasterProvider"
import LoginModal from "@/components/modals/LoginModal"
import getCurrentUser from "@/app/actions/getCurrentUser"
import RentModal from "@/components/modals/RentModal"
import SearchModal from "@/components/modals/SearchModal"
import Footer from "./Footer/Footer"
import { SpeedInsights } from '@vercel/speed-insights/next';

export const metadata = {
  title: "Putko",
  description: "Hotel & Apartment Booking Web App",
  
}

const font = Nunito({
  subsets: ["latin"],
})

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const currentUser = await getCurrentUser()

  return (
    <html lang="en">
      <body className={font.className}>
      <SpeedInsights />
        <ClientOnly>
          <ToasterProvider />
          <SearchModal />
          <RentModal />
          <LoginModal />
          <RegisterModal />
          <Navbar currentUser={currentUser} />          
        </ClientOnly>
        <div className="pb-20 pt-28">
          {children}
          </div>
          <Footer />
      </body>
      
    </html>
  )
}
