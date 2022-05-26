const { Pool } = require("pg")

const argumentos = process.argv

const { rut, consulta, nuevo, editar, eliminar } = require('./consultas')

const acccionSql = argumentos[2] // Se utiliza para saber que funcion vamos a utilizar (nuevo, consulta, editar, rut o eliminar)
const param1 = argumentos[3] // Este parametro puede tener como valor el nombre (nuevo, editar) o el rut (rut, eliminar)
const param2 = argumentos[4] // Siempre sera el rut
const param3 = argumentos[5] // Siempre sera el curso
const param4 = argumentos[6] // Siempre sera el nivel

const config = {
    user: "postgres",
    host: "localhost",
    password: "1234",
    database: "alwaysmusic",
    port: 5432,
    max: 20,
    idleTimeoutMillis: 5000,
    connectionTimeoutMillis: 2000,
}

const pool = new Pool(config)

pool.connect(async (error_conexion, client, release) => {
    if (error_conexion) {
        console.error(error_conexion.code)
    } else {
        switch (acccionSql) {
            case 'nuevo':
                await nuevo(param1, param2, param3, param4, client)
                break
            case 'consulta':
                await consulta(client)
                break
            case 'editar':
                await editar(param1, param2, param3, param4, client)
                break
            case 'rut':
                await rut(param1, client)
                break
            case 'eliminar':
                await eliminar(param1, client)
                break
            default:
                console.log('Error: funcion no especificada o mal escrita.')
                break
        }
        release()
        pool.end()
    }
})