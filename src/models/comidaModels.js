import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

//criar exportando a variavel -> findAll(encontreTodos) que vai ser o SELECT * FROM bruxos;
export const listarTodos = async() => {
    //SELECT * FROM bruxos;
    return await prisma.bruxo.findMany({
        orderBy: { nome: 'asc'}
    });
}

export const listaUm = async(id) => {
    //SELECT * FROM bruxos WHERE id = 1;
    return await prisma.comida.findUnique({
        where: { id: Number(id) }
    })
}

export const criar = async (dado) => {
    return await prisma.comida.create({
        data:{
            nome: dado.nome,
            tipo: dado.tipo,
            preco: dado.preco,
            descricao: dado.descricao
        }
    })
}

export const deletar = async (id) => {
    return await prisma.comida.delete({
        where: { id: Number(id)}
    })
}

export const atualizar = async (id, dado) => {
    return await prisma.comida.update({
        where: {id: Number(id)},
        data: {
            ...(dado.nome && {nome: dado.nome}),
            ...(dado.tipo && { tipo: dado.tipo}),
            ...(dado.preco && {preco: dado.preco}),
            ...(dado.descricao && {descricao: dado.descricao})
        }
    })
}

