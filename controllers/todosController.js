const Todos = require('../models/todosModels');

module.exports = {
    getAllTodos: async (req, res) => {
        const todos = await Todos.findAll();

        res.json({
            message: "Success get all todos",
            data: todos,
        });
    },

    getTodoById: async (req, res) => {
        const id = req.params.id;
        const todo = await Todos.findOne({
            where: {
                id,
            },
        });

        res.json({
            message: "Success get todo by id",
            data: todo,
        });
    },

    createTodo: async (req, res) => {
        const {
            title,
            description,
            status,
            priority,
            due_date
        } = req.body;

        const todo = await Todos.create({
            title,
            description,
            status,
            priority,
            due_date
        });

        res.json({
            message: "Success create todo",
            data: todo,
        });
    },

    updateTodo: async (req, res) => {
        const id = req.params.id;
        const {
            title,
            description,
            status,
            priority,
            due_date
        } = req.body;
    
        const todo = await Todos.update(
            {
                title,
                description,
                status,
                priority,
                due_date
            },
            {
                where: {
                    id,
                },
            }
        );
    
        res.json({
            message: "Success update todo",
            data: todo,
        });
    },
    

    deleteTodo: async (req, res) => {
        const id = req.params.id;
        const todo = await Todos.destroy({
            where: {
                id,
            },
        });

        res.json({
            message: "Success delete todo",
            data: todo,
        });
    }
};
