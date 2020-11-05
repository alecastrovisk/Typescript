/* 
serviço para criar: name, email, password

Sempre que precisar definir o formato de um objeto, criar uma interface 
*/
interface TechObject {
    title: string;
    experience: number;
}

interface CreateUserData {
    name?: string;
    email: string;
    password: string;
    tech: Array<string | TechObject>
}

export default function createUser({ name, email , password  }: CreateUserData) {
    const user = {
        name,
        email,
        password, 
    }

    return user;
}