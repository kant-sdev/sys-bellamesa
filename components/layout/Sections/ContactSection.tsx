"use client"

import type React from "react"

import { useState } from "react"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import Link from "next/link"
import { toast } from "sonner"

export default function ContactSection() {
    const isLogged = true;

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        date: "",
        time: "",
        guests: "",
        message: "",
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (!isLogged) {
            alert("Você precisa estar logado para realizar reservas.")
            return
        }

        // Here you would handle the form submission, e.g., send to an API
        console.log("Form submitted:", formData)
        toast("Reserva enviada com sucesso! Entraremos em contato para confirmar os detalhes", {
            position: 'top-right'
        })
        // Reset form
        setFormData({
            name: "",
            email: "",
            phone: "",
            date: "",
            time: "",
            guests: "",
            message: "",
        })
    }

    return (
        <section id="contact" className="py-20 bg-contact-pattern bg-cover bg-center px-4">
            <div className="container-section">
                <h2 className="section-title text-white">Contato & Reservas</h2>
                <p className="text-center text-white text-xl mb-12">Estamos esperando por você!</p>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Contact Information */}
                    <div className="bg-black/50 backdrop-blur-sm p-8 rounded-lg">
                        <h3 className="text-2xl font-bold text-white mb-6">Informações</h3>

                        <div className="space-y-6">
                            <div className="flex items-start">
                                <MapPin className="w-6 h-6 text-primary mr-4 mt-1" />
                                <div>
                                    <h4 className="text-white font-bold">Endereço</h4>
                                    <p className="text-white/80">Rua Itália, 123 – São Paulo, SP</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <Phone className="w-6 h-6 text-primary mr-4 mt-1" />
                                <div>
                                    <h4 className="text-white font-bold">Telefone</h4>
                                    <p className="text-white/80">(11) 98765-4321</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <Mail className="w-6 h-6 text-primary mr-4 mt-1" />
                                <div>
                                    <h4 className="text-white font-bold">E-mail</h4>
                                    <p className="text-white/80">contato@bellamesa.com</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <Clock className="w-6 h-6 text-primary mr-4 mt-1" />
                                <div>
                                    <h4 className="text-white font-bold">Horário de Funcionamento</h4>
                                    <p className="text-white/80">Seg-Sáb: 18h – 23h | Dom: 12h – 23h</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 flex space-x-4">
                            <Link href="#" className="btn-secondary">
                                Ver Localização
                            </Link>
                        </div>
                    </div>

                    {/* Reservation Form */}
                    <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg">
                        <h3 className="text-2xl font-bold text-white mb-6">Faça sua Reserva</h3>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="name" className="block text-white mb-1">
                                        Nome
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-2 rounded-md bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-primary"
                                        placeholder="Seu nome"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-white mb-1">
                                        E-mail
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-2 rounded-md bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-primary"
                                        placeholder="Seu e-mail"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="phone" className="block text-white mb-1">
                                        Telefone
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-2 rounded-md bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-primary"
                                        placeholder="Seu telefone"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="guests" className="block text-white mb-1">
                                        Número de Pessoas
                                    </label>
                                    <select
                                        id="guests"
                                        name="guests"
                                        value={formData.guests}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-2 rounded-md bg-white/20 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-primary"
                                    >
                                        <option value="" disabled className="bg-gray-800">
                                            Selecione
                                        </option>
                                        <option value="1" className="bg-gray-800">
                                            1 pessoa
                                        </option>
                                        <option value="2" className="bg-gray-800">
                                            2 pessoas
                                        </option>
                                        <option value="3" className="bg-gray-800">
                                            3 pessoas
                                        </option>
                                        <option value="4" className="bg-gray-800">
                                            4 pessoas
                                        </option>
                                        <option value="5" className="bg-gray-800">
                                            5 pessoas
                                        </option>
                                        <option value="6+" className="bg-gray-800">
                                            6+ pessoas
                                        </option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="date" className="block text-white mb-1">
                                        Data
                                    </label>
                                    <input
                                        type="date"
                                        id="date"
                                        name="date"
                                        value={formData.date}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-2 rounded-md bg-white/20 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-primary"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="time" className="block text-white mb-1">
                                        Horário
                                    </label>
                                    <input
                                        type="time"
                                        id="time"
                                        name="time"
                                        value={formData.time}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-2 rounded-md bg-white/20 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-primary"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-white mb-1">
                                    Mensagem (opcional)
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={4}
                                    className="w-full px-4 py-2 rounded-md bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-primary"
                                    placeholder="Alguma solicitação especial?"
                                ></textarea>
                            </div>

                            <button type="submit" className="w-full btn-primary py-3">
                                Fazer Reserva
                            </button>

                            <div>
                                <p className="text-primary text-justify">
                                    Obs: O estabelecimento entrará em contato um dia antes da data agendada para confirmação.
                                    Para acompanhar sua reserva, faça login ou cadastre-se no nosso sistema.
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
