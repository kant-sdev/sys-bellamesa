import Link from "next/link"
import { Instagram, Facebook, Twitter } from "lucide-react"

export default function Footer() {
    return (
        <footer className="bg-black text-white py-12 px-4">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:place-items-center">
                    <div>
                        <Link href="/" className="text-white font-playfair text-2xl font-bold">
                            <span className="text-primary">Bella</span> Mesa
                        </Link>
                        <p className="mt-4 text-gray-400">
                            A verdadeira experiência da culinária italiana em um ambiente sofisticado e acolhedor.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold mb-4">Links Rápidos</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="#about" className="text-gray-400 hover:text-primary transition-colors">
                                    Sobre Nós
                                </Link>
                            </li>
                            <li>
                                <Link href="#menu" className="text-gray-400 hover:text-primary transition-colors">
                                    Cardápio
                                </Link>
                            </li>
                            <li>
                                <Link href="#contact" className="text-gray-400 hover:text-primary transition-colors">
                                    Contato
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-gray-400 hover:text-primary transition-colors">
                                    Política de Privacidade
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold mb-4">Horário de Funcionamento</h3>
                        <ul className="space-y-2 text-gray-400">
                            <li className="flex justify-between">
                                <span>Segunda-Sexta:</span>
                                <span>18h - 23h</span>
                            </li>
                            <li className="flex justify-between">
                                <span>Sábado:</span>
                                <span>18h - 23h</span>
                            </li>
                            <li className="flex justify-between">
                                <span>Domingo:</span>
                                <span>12h - 23h</span>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold mb-4">Siga-nos</h3>
                        <div className="flex space-x-4">
                            <Link href="#" className="text-gray-400 hover:text-primary transition-colors">
                                <Instagram className="w-6 h-6" />
                                <span className="sr-only">Instagram</span>
                            </Link>
                            <Link href="#" className="text-gray-400 hover:text-primary transition-colors">
                                <Facebook className="w-6 h-6" />
                                <span className="sr-only">Facebook</span>
                            </Link>
                            <Link href="#" className="text-gray-400 hover:text-primary transition-colors">
                                <Twitter className="w-6 h-6" />
                                <span className="sr-only">Twitter</span>
                            </Link>
                        </div>
                        <div className="mt-4">
                            <p className="text-gray-400">
                                <span className="block">Rua Itália, 123</span>
                                <span className="block">São Paulo, SP</span>
                                <span className="block">(11) 98765-4321</span>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500">
                    <p>&copy; {new Date().getFullYear()} Bella Mesa. Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    )
}
