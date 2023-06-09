import jwt from 'jsonwebtoken';

export const jwtToken = {
    jwtEncoded: (id: string): string => {
        return jwt.sign({id}, process.env.JWT_SECRET_KEY as string, {expiresIn: '180d'});
    },

    jwtDecoded: (token: string): string => {
        return JSON.stringify(jwt.verify(token, process.env.JWT_SECRET_KEY as string))
    }
}
