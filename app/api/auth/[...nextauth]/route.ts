import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
    pages: {
        signIn: '/forms/signin',
        signOut: '/'
    },
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: { label: "Email", type: "email"},
                password: { label: "Senha", type: "password" }
            },
            async authorize(credentials) {
                if (!credentials) return null;

                // Buscar usuário no banco via API local
                const res = await fetch("http://localhost:3000/api/users", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ email: credentials.email, password: credentials.password })
                });

                const user = await res.json();

                console.log(user)

                if (user && user.id) {
                    return {
                        id: user.id,
                        name: user.name,
                        email: user.email,
                        role: user.role, 
                    };
                }

                return null;
            }
        })
    ],
    callbacks: {
        async jwt({ token, user }) {
            if (user ) {
                token.id = user.id;
                token.role = user.role;
            }
            return token;
        },
        async session({ session, token }) {
            if (session.user) {
                session.user.id = token.id as string;
                session.user.role = token.role as string;
            }
            return session;
        }
        
    }
});

export { handler as GET, handler as POST };
