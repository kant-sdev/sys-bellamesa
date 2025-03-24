import { Star } from "lucide-react"

export default function TestimonialsSection() {
    const testimonials = [
        {
            id: 1,
            name: "João S.",
            text: "Melhor Carbonara que já comi fora da Itália!",
            rating: 5,
        },
        {
            id: 2,
            name: "Maria F.",
            text: "A experiência foi incrível! Atendimento impecável e pratos maravilhosos.",
            rating: 5,
        },
        {
            id: 3,
            name: "Carlos M.",
            text: "O ambiente é sofisticado e aconchegante. Os vinhos são excelentes e combinam perfeitamente com os pratos.",
            rating: 5,
        },
    ]

    return (
        <section id="testimonials" className="py-20 bg-testimonials-pattern bg-fixed bg-cover bg-center px-4">
            <div className="container-section">
                <h2 className="section-title text-white">Depoimentos</h2>
                <p className="text-center text-white text-xl mb-12">Quem já provou, recomenda!</p>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial) => (
                        <div key={testimonial.id} className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/20">
                            <div className="flex mb-4">
                                {[...Array(testimonial.rating)].map((start, index) => (
                                    <Star key={index} className="w-5 h-5 fill-primary text-primary" />
                                ))}
                            </div>
                            <p className="text-white text-lg italic mb-6">&quot;{testimonial.text}&quot;</p>
                            <p className="text-primary font-semibold">– {testimonial.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
