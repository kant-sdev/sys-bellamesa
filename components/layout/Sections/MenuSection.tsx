import Image from "next/image"
import Link from "next/link"

export default function MenuSection() {
    const featuredDishes = [
        {
            id: 1,
            name: "Fettuccine com Filé e Molho Cremoso",
            description: "Massa artesanal ao molho cremoso, filé mignon, cogumelos, tomate confit e espinafre.",
            image: "/images/massa.jpg",
            category: "Massas Artesanais",
        },
        {
            id: 2,
            name: "Pizza Margherita",
            description: "Molho de tomate San Marzano, mozzarella de búfala, manjericão fresco e azeite extra virgem.",
            image:  "/images/pizza.jpg",
            category: "Autêntica Pizza Napolitana",
        },
        {
            id: 3,
            name: "Millefoglie com Chantilly e Morangos",
            description: "Camadas de massa folhada crocante, chantilly e morangos frescos, finalizado com calda de frutas vermelhas.",
            image:  "/images/sobremesa.jpg",
            category: "Sobremesas",
        },
    ];
    
    return (
        <section id="menu" className="bg-gray-50 dark:bg-gray-900 py-20 px-4">
            <div className="container-section">
                <h2 className="section-title">Cardápio em Destaque</h2>
                <p className="text-center text-lg mb-12 max-w-3xl mx-auto">
                    Descubra nosso menu cuidadosamente elaborado para proporcionar uma experiência inesquecível.
                </p>

                <div className="grid md:grid-cols-3 gap-8">
                    {featuredDishes.map((dish) => (
                        <div
                            key={dish.id}
                            className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105"
                        >
                            <div className="relative h-64">
                                <Image src={dish.image || "/placeholder.svg"} alt={dish.name} fill className="object-cover" />
                            </div>
                            <div className="p-6">
                                <div className="flex items-center mb-3">
                                    <p className="text-lg font-bold text-primary">{dish.category}</p>
                                </div>
                                <h3 className="text-xl font-bold mb-2">{dish.name}</h3>
                                <p className="text-gray-600 dark:text-gray-300 mb-4">{dish.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <h3 className="text-2xl font-bold mb-8">Nossas Especialidades</h3>
                    <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                        <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
                            <h4 className="text-xl font-bold mb-2">Massas Artesanais</h4>
                            <p>Feitas à mão diariamente.</p>
                        </div>
                        <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
                            <h4 className="text-xl font-bold mb-2">Autêntica Pizza Margherita</h4>
                            <p>Assada no forno a lenha.</p>
                        </div>
                        <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
                            <h4 className="text-xl font-bold mb-2">Carta de Vinhos Exclusiva</h4>
                            <p>Os melhores rótulos italianos.</p>
                        </div>
                    </div>

                    <Link href="/menu" className="btn-primary mt-12 inline-block">
                        Ver Cardápio Completo
                    </Link>
                </div>
            </div>
        </section>
    )
}
