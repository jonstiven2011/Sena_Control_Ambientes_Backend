'use strict'

const User = use('App/Models/User')

class UserController {

    async login({ response, request, auth }) {
        try {
            const { email, password } = request.all();

            const user = await User.query().where({ 'email': email }).first();

            console.log(user);
            if (user) {
                const token = await auth.attempt(email, password);
                return response.status(200).json({
                    'token': token,
                    'id': user.id,
                    'user_rol': user.user_rol,
                    'name': user.name
                });

            }
            return response.status(400).json({ message: 'Credenciales inválidas.' });
        } catch (error) {
            return response.status(400).json({ message: "Contraseña incorrecta" });
        }
    }


    async store({ response, request }) {
        try {
            const { name, documentType, document, email, password, user_rol } = request.all()
            const user = await User.query().where({ 'email': email }).first();
            const docu = await User.query().where({ 'document': document }).first();

            console.log(user);
            if (docu) {
                return response.status(400).json({ message: 'El docmuento ya se encuentra registrado, por favor verifique los datos' });
            } else if (user) {
                return response.status(400).json({ message: 'El correo electronico ya se encuentra registrado, por favor verifique los datos' });

            } else {
                const user = await User.create({
                    name,
                    documentType,
                    document,
                    email,
                    password,
                    user_rol,
                });
                return response.status(200).json({ message: 'Usuario creado correctamenta.' });
            }

        } catch (error) {
            return response.status(500).json({ message: "Error al crear el usuario por favor verifique los datos" });
        }

    };

    async users({ response }) {
        const Allusers = await User.all();
        return response.json(Allusers);
    }


    async buscarUser({ params }) {
        const { id } = params;
        const user = await User.find(id);
        return user;

    }


    async update({ params, request }) {
        const { id } = params;
        const user = await User.find(id);
        user.merge(request.all());
        await user.save();

        return user;
    }

    async destroy({ params }) {
        const { id } = params;
        const user = await User.find(id);

        await user.delete();

        return user;

    }
}

module.exports = UserController