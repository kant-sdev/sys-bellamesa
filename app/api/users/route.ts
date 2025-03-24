import { NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid"; // Importando UUID
import bcrypt from "bcryptjs"; // Importando bcryptjs

// Simulação de um banco de dados em memória
const users = [
    { id: uuidv4(), name: "Icarus", email: "icarus@gmail.com", phone: "11987654321", password: bcrypt.hashSync("123", 10), role: "cliente" },
    { id: uuidv4(), name: "Carlos", email: "carlos.gerente@restaurante.com", phone: "11912345678", password: bcrypt.hashSync("123", 10), role: "gerente" },
];

export async function GET() {
    return NextResponse.json(users);
}

export async function POST(req: Request) {
    const { name, email, phone, password } = await req.json();

    // Se não houver 'name', é um login
    if (!name) {
        const user = users.find(u => u.email === email || u.phone === phone);
        
        if (!user || !bcrypt.compareSync(password, user.password)) { // Verifica a senha criptografada
            return NextResponse.json({ error: "Credenciais inválidas" }, { status: 401 });
        }

        return NextResponse.json(user);
    }

    // Definir a role automaticamente
    let role = "cliente";
    if (email && email.includes("@restaurante.com")) {
        if (email.includes("garcom")) role = "garcom";
        if (email.includes("cozinha")) role = "cozinha";
        if (email.includes("gerente")) role = "gerente";
    }

    // Verifica se o e-mail ou telefone já existem
    if (users.some(u => u.email === email) || users.some(u => u.phone === phone)) {
        return NextResponse.json({ error: "E-mail ou telefone já cadastrado" }, { status: 409 });
    }

    // Criptografa a senha antes de salvar
    const hashedPassword = bcrypt.hashSync(password, 10);

    // Criar usuário com UUID e senha criptografada
    const newUser = {
        id: uuidv4(),
        name,
        email: email, // Permite cadastro sem e-mail
        phone: phone, // Permite cadastro sem telefone
        password: hashedPassword,
        role,
    };

    users.push(newUser);
    return NextResponse.json(newUser, { status: 201 });
}
