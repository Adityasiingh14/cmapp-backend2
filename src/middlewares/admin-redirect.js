module.exports = (_config, { strapi }) => {
    const redirects = ['/dash'].map((path) => ({
        method: 'GET',
        path,
        handler: (ctx) => ctx.redirect('/admin'),
        config: { auth: false },
    }));

    strapi.server.routes(redirects);
};