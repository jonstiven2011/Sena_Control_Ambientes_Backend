'use strict'
const Prestamo = use('App/Models/Prestamo')

class PrestamoController {

    //creacion de prestamo
    async store({ response, request }) {
        console.log("aqui prestamo");
        console.log(request);


        try {
            const { name, cuentadante, hora_start, hora_end, state, novedad } = request.all()
            const hora_startPrestamo = await Prestamo.query().where({ 'name': name }).first();

            console.log(hora_startPrestamo);
            if (hora_startPrestamo) {
                return response.status(400).json({ message: `Este ambiente " ${name} " ya se encuentra resgitrado en el sistema.` });

            } else {
                const prestamo = await Prestamo.create({
                    name,
                    cuentadante,
                    hora_start,
                    hora_end,
                    state,
                    novedad
                });
                return response.status(200).json({ message: 'El prestamo de ambiente fue creado correctamente.' });
            }

        } catch (error) {
            console.log(error);

            return response.status(500).json({ message: 'Error al crear el prestamo de ambiente, por favor verifique los datos' });
        }

    };

    //Traer todos los datos
    async prestamos({ response }) {
        const allprestamos = await Prestamo.all();
        return response.json(allprestamos);
    }
   
    //Buscar prestamo unico
    async buscarPrestamo({ params }) {
        const { id } = params;
        const prestamo = await Prestamo.find(id);

        return prestamo;
    }

    //Modificar Prestamo
    async update({ params, request }) {
        console.log("viene update prestamo");
        console.log(request);
        try {
            const { id } = params;
            const prestamo = await Prestamo.find(id);
            prestamo.merge(request.all());
            await prestamo.save();

            return prestamo;
        } catch (error) {
            console.log(error);

        }
    }

    //Eliminar Prestamo
    async destroy({ params }) {
        const { id } = params;
        const prestamo = await Prestamo.find(id);

        await prestamo.delete();

        return prestamo;

    }
}

module.exports = PrestamoController
