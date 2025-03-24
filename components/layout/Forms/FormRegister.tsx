"use client";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "sonner";
import Link from "next/link";

const formSchema = z.object({
    name: z.string().min(3, 'Informe um nome'),
    phone: z.string().min(11, 'Informe um numero válido'),
    email: z.string().email(),
    password: z.string().min(3).max(20),
});

export function FormRegister() {
    const router = useRouter();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            phone: "",
            email: "",
            password: "",
        },
    });

    async function onSubmit(values: z.infer<typeof formSchema>) {
        const response = await fetch("/api/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(values),
        });

        if (response.ok) {
            toast.success("Usuário registrado com sucesso! Redirecionando...");
            setTimeout(() => router.push("/forms/signin"), 2000);
        } else {
            const errorData = await response.json();
            toast.error(errorData.error || "Erro ao registrar");
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="border p-4 rounded-md shadow-lg min-w-sm flex flex-col gap-4">
                <div className="mb-6 text-center">
                    <h1 className="text-2xl font-bold text-gray-800">Crie sua conta</h1>
                    <p className="text-gray-600">Preencha os dados abaixo para se cadastrar</p>
                </div>
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Nome de Usuário</FormLabel>
                            <FormControl>
                                <Input {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Contato</FormLabel>
                            <FormControl>
                                <Input {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl> 
                                <Input {...field} type="email" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Senha</FormLabel>
                            <FormControl>
                                <Input {...field} type="password" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit">Registrar</Button>
                <div className="text-center text-sm font-semibold">
                    <p>Já tem conta? <Link href={'/forms/signin'} className="text-blue-500">Entrar</Link></p>
                </div>
            </form>
        </Form>
    );
}
