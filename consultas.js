
//2. Crear una función asíncrona para registrar un nuevo estudiante en la base de datos.
const nuevo = async (nombre, rut, curso, nivel, client) => {
    const SQLQuery = {
        name: 'nuevo-estudiante',
        text: "INSERT INTO alumnos (nombre, rut, curso, nivel) VALUES ($1, $2, $3, $4) RETURNING *;",
        values: [nombre, rut, curso, nivel],
    }

    try {
        await client.query('BEGIN TRANSACTION;')
        await client.query(SQLQuery)
        await client.query('COMMIT;')
        console.log(`Estudiante ${nombre} agregado con exito`)
    } catch (error_consulta) {
        console.log(error_consulta.code)
    }
}

// 4. Crear una función asíncrona para obtener por consola todos los estudiantes registrados.
const consulta = async (client) => {
    const SQLQuery = {
        name: 'consultar-todos',
        text: "SELECT * FROM alumnos",
        rowMode: 'array'
    }

    try {
        const res = await client.query(SQLQuery)
        console.log('Registro actual: ', res.rows)
    } catch (error_consulta) {
        console.log(error_consulta.code)
    }
}

// 5. Crear una función asíncrona para actualizar los datos de un estudiante en la base de datos.
const editar = async (nombre, rut, curso, nivel, client) => {
    const SQLQuery = {
        name: 'editar-estudiante',
        text: `UPDATE alumnos SET nombre = $1, curso = $3, nivel = $4 WHERE rut = $2;`,
        values: [nombre, rut, curso, nivel]
    }

    try {
        await client.query('BEGIN TRANSACTION;')
        await client.query(SQLQuery)
        await client.query('COMMIT;')
        console.log(`Estudiante ${nombre} editado con exito`)
    } catch (error_consulta) {
        console.log(error_consulta.code)
    }
}

// 3. Crear una función asíncrona para obtener por consola el registro de un estudiante por medio de su rut.
const rut = async (rut, client) => {
    const SQLQuery = {
        name: 'consulta-rut',
        text: `SELECT * FROM alumnos WHERE rut = $1;`,
        values: [rut],
        rowMode: 'array'
    }

    try {
        await client.query('BEGIN TRANSACTION;')
        const res = await client.query(SQLQuery)
        await client.query('COMMIT;')
        console.log(res.rows)
    } catch (error_consulta) {
        console.log(error_consulta.code)
    }
}

// 6. Crear una función asíncrona para eliminar el registro de un estudiante de la base de datos.
const eliminar = async (rut, client) => {
    const SQLQuery = {
        name: 'consulta-rut',
        text: `DELETE FROM alumnos WHERE rut = $1`,
        values: [rut]
    }
    try {
        await client.query('BEGIN TRANSACTION;')
        await client.query(SQLQuery)
        await client.query('COMMIT;')
        console.log(`Registro de estudiante con rut ${rut} eliminado`)
    } catch (error_consulta) {
        console.log(error_consulta.code)
    }
}

module.exports = {
    nuevo,
    consulta,
    editar,
    rut,
    eliminar
}