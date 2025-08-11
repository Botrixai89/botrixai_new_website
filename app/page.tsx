import Header from "@/components/header"
import Hero from "@/components/hero"
import Features from "@/components/features"
import IntegrationShowcase from "@/components/integration-showcase"
import ProductDemo from "@/components/product-demo"
import TechnologyStack from "@/components/technology-stack"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="w-full overflow-x-hidden">
      <Header />
      <main className="relative">
        <Hero />
        <Features />
        <IntegrationShowcase />
        <ProductDemo />
        <TechnologyStack />
      </main>
      <Footer />
    </div>
  )
}
