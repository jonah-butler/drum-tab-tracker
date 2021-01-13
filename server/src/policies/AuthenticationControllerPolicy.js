const Joi = require('joi');

module.exports = {
    register(req, res, next) {
        const schema = Joi.object({
            email: Joi.string().email(),
            password: Joi.string().regex(
                new RegExp('^[a-zA-Z0-9]{8,32}$')
            )
        })
        const {error} = schema.validate(req.body);
        if (error) {
            switch (error.details[0].context.key) {
                case 'email':
                    res.send({
                        error: 'You must provide a valid email address',
                    });
                    break
                case 'password':
                    res.send({
                        error: 'The provided password does not meeting the qualifications',
                    });
                    break;
                default:
                    res.send({
                        error: 'Invalid registration',
                    });
            }
        } else {
            next();
        }
    }
}