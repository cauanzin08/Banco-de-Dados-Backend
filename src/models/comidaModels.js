// src/controllers/userController.js

import prisma from "../models/prismaClient.js";

// Criar novo usuário
export const createUser = async (req, res) => {
    const { email, name } = req.body;
    
    try {
        const user = await prisma.user.create({
            data: { email, name }
        });
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Buscar todos os usuários
export const getAllUsers = async (req, res) => {
    try {
        const users = await prisma.user.findMany();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};