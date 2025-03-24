import Link from "next/link"

export default function HeroSection() {
    return (
        <section
            id="hero"
            className={`relative min-h-screen flex items-center justify-center bg-hero-pattern bg-cover bg-center px-4`}
        >
            <div className="container mx-auto px-4 text-center relative z-10">
                <div className="max-w-3xl mx-auto">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                        <span className="text-primary">Bella Mesa</span> - A Essência da Itália na Sua Mesa
                    </h1>
                    <p className="text-xl md:text-2xl text-white/90 mb-10">
                        Sabores autênticos, ingredientes frescos e a tradição da culinária italiana em cada prato.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link href="/menu" className="btn-primary">
                            Ver Cardápio
                        </Link>
                        <Link href="#contact" className="btn-secondary">
                            Fazer Reserva
                        </Link>
                    </div>
                </div>
            </div>

            {/* Decorative element */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
                <div className="w-6 h-10 border-2 border-white/70 rounded-full flex justify-center">
                    <span className="animate-bounce mt-1 w-1 h-3 bg-white/70 rounded-full"></span>
                </div>
            </div>
        </section>
    )
}
