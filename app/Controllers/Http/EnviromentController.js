'use strict'

const Enviroment = use('App/Models/Enviroments')

class EnviromentController {


    async store({ response, request }) {
        console.log("aqui");
        console.log(request);


        try {
            const { name, cuentadante,usability, furnitures, state, equipment, novelty } = request.all()
            const nameEnviroment = await Enviroment.query().where({ 'name': name }).first();

            console.log(nameEnviroment);
            if (nameEnviroment) {
                return response.status(400).json({ message: `El ambiente " ${name} " ya se encuentra resgitrado en el sistema.` });

            } else {
                const enviroment = await Enviroment.create({
                    name,
                    cuentadante,
                    usability, 
                    state,
                    furnitures: JSON.stringify(furnitures),
                    equipment: JSON.stringify(equipment),
                    novelty
                });
                return response.status(200).json({ message: 'Ambiente creado correctamente.' });
            }

        } catch (error) {
            console.log(error);

            return response.status(500).json({ message: 'Error al crear el ambiente por favor verifique los datos' });
        }

    };

    async enviroments({ response }) {
        const Allenviroment = await Enviroment.all();
        return response.json(Allenviroment);
    }

    async buscarAmbiente({ params }) {
        const { id } = params;
        const enviroment = await Enviroment.find(id);

        return enviroment;

    }

    async update({ params, request }) {
        console.log("viene update");
        console.log(request);
        try {
            const { id } = params;
            const enviroment = await Enviroment.find(id);
            request.all().furnitures = JSON.stringify(request.all().furnitures);
            request.all().equipment = JSON.stringify(request.all().equipment);
            enviroment.merge(request.all());
            await enviroment.save();

            return enviroment;
        } catch (error) {
            console.log(error);

        }
    }

    async destroy({ params }) {
        const { id } = params;
        const enviroment = await Enviroment.find(id);

        await enviroment.delete();

        return enviroment;

    }

}



module.exports = EnviromentController