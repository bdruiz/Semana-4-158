var jwt = require('jsonwebtoken');
const config = require('../secret/config.js');
const models = require('../models');

const checkToken = async (token) => {
    let localID = null;
    try {
        const { id } = token.decode(token);
        localID = id;
    } catch (error) {
        return error;
    }
    const user = await models.Usuario.findOne({
        where: {
            id: id,
            estado: 1
        }
    });
    if (user) {
        const token = encode(user);
        return {
            token,
            rol: user.rol
        }
    } else {
        return false;
    }
}


module.exports = {

    //generar el token
    encode: async (id, rol) => {

        const token = jwt.sign({
            id: id, rol: rol
            
        }, config.secret, {
            expiresIn: 86400 //expires in 24 hours
        });
        return token;
    },

    //permite decodificar el token
    decode: async (token) => {
        try {
            const { id } = await jwt.verify(token, config.secret);
            const user = await models.Usuario.findOne({
                where: {
                    id: id
                //Se podría añadir para validar los usuarios activos (estado = 1)    
               //     estado: 1
                }
            });
            if (user) {
                return user;
            }
            else {
                return false;
            }

        } catch (e) {
            const newToken = await checkToken(token);
            return newToken;
        }
    }
}