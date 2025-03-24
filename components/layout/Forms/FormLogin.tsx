"use client"

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter, useSearchParams } from "next/navigation"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { toast } from "sonner"
import { getSession, signIn } from "next-auth/react"
import Link from "next/link"

const formSchema = z.object({
    email: z.string().email(),
    password: z.string().min(3).max(20),
})

export function FormLogin() {

    const searchParams = useSearchParams()
    const error = searchParams.get('error')

    const router = useRouter()

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        signIn('credentials', {
            ...values,
            redirect: false,
        }).then(async (response) => {
            if (response?.error) {
                toast("Credenciais inválidas", { duration: 2000 });
                return;
            }

            const session = await getSession();

            const userRole = session?.user?.role;
            console.log(userRole);

            if (userRole === "garcom") router.push("/dashboard/garcom");
            else if (userRole === "cozinha") router.push("/dashboard/cozinha");
            else if (userRole === "gerente") router.push("/dashboard/gerente");
            else router.push("/dashboard/cliente");
        });
    }

    return (
        <Form {...form} >
            <form onSubmit={form.handleSubmit(onSubmit)} className="border p-4 rounded-md shadow-lg min-w-sm flex flex-col gap-4">
                <div className="mb-6 text-center">
                    <h1 className="text-2xl font-bold text-gray-800">Bem-vindo de volta</h1>
                    <p className="text-gray-600">Faça login para acessar sua conta</p>
                </div>
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input {...field} type='email'/>
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
                                <Input {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit">Entrar</Button>
                <div className="text-center text-sm font-semibold">
                    <p>Não tem conta? <Link href={'/forms/register'} className="text-blue-500">Cadastrar-me</Link></p>
                </div>
            </form>
        </Form>
    )
}