const config = require('./../config');
const colors = require('colors');

module.exports = () => {
    const env = process.env.NODE_ENV;
    const envConfig = config.env;
    const msgConfig = config.messaging;

    if (!envConfig[env].port) {
        console.log(colors.yellow(`\n${msgConfig.noPort} %s\n`), envConfig[env].port);
    }

    return {
        testEnv: env === 'development',
        env,
        domain: envConfig[env].domain,
        publicPath: envConfig[env].clientAppDir,
        port: envConfig[env].port || envConfig.defaultPort,
        protocol: envConfig[env].protocol
    };
};
