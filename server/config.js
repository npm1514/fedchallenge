module.exports = {
    env: {
        development: {
            port: '3000',
            protocol: 'http',
            domain: 'localHost',
            clientAppDir: '../public'
        },
        production: {
            port: '8080',
            protocol: 'http',
            domain: '0.0.0.0',
            clientAppDir: '../public'
        },
        defaultPort: 8080
    },
    messaging: {
        cookie: {
            error: {
                name: 'NAME OF COOKIE NEEDS TO BE A STRING.',
                response: 'THE RESPONSE FOR THE COOKIE SEEMS TO HAVE AN ERROR.',
                value: 'VALUE OF COOKIE NEEDS TO BE IN A STRING FORMAT.'
            }
        },
        database: {
            error: {
                noAccess: 'You currently do not have access. Please contact the app administrator.'
            }
        },
        login: {
            error: {
                noAccess: 'Username or password are incorrect. Please try again.'
            }
        },
        noPort: 'WARNING: NO PORT WAS GIVEN. DEFAULTING TO'
    }
};
