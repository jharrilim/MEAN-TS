import { AppConfig } from '../app-config';

module.exports = <AppConfig>{
    db: 'mongodb://localhost/express-ts',
    sessionSecret: 'developmentSessionSecret'
};
