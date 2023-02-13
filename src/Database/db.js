import { Sequelize } from "sequelize";

const db = new Sequelize('hidrocompras', 'root', '',{
    host: 'localhost',
    dialect: 'mysql'
})

export default db