import Image from "next/image"

export default function AboutSection() {
    return (
        <section id="about" className="bg-white dark:bg-black py-20 px-4">
            <div className="container-section">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden">
                        <Image
                            src="/images/plates.jpg"
                            alt="Chef do Bella Mesa preparando um prato"
                            fill
                            className="object-cover"
                        />
                    </div>

                    <div>
                        <h2 className="section-title text-left">Sobre Nós</h2>
                        <p className="text-lg mb-6">
                            No coração do Bella Mesa, há paixão por sabores autênticos e receitas que atravessam gerações. Nosso
                            objetivo é trazer a verdadeira experiência da Itália para você, com pratos preparados com ingredientes
                            selecionados e muito carinho.
                        </p>

                        <div className="space-y-4 mt-8">
                            <div className="flex items-start">
                                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                                    <span className="text-primary-foreground font-bold">✓</span>
                                </div>
                                <div className="ml-4">
                                    <h3 className="text-xl font-semibold mb-1">Ingredientes importados da Itália</h3>
                                    <p>
                                        Selecionamos os melhores ingredientes diretamente da Itália para garantir a autenticidade dos
                                        sabores.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                                    <span className="text-primary-foreground font-bold">✓</span>
                                </div>
                                <div className="ml-4">
                                    <h3 className="text-xl font-semibold mb-1">Ambiente aconchegante e sofisticado</h3>
                                    <p>
                                        Criamos um espaço que combina elegância e conforto para proporcionar uma experiência gastronômica
                                        completa.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                                    <span className="text-primary-foreground font-bold">✓</span>
                                </div>
                                <div className="ml-4">
                                    <h3 className="text-xl font-semibold mb-1">Receitas tradicionais e autorais</h3>
                                    <p>
                                        Nosso chef combina técnicas tradicionais com toques contemporâneos para criar pratos únicos e
                                        memoráveis.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
