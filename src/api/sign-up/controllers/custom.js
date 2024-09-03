module.exports = {
    async signup(ctx) {
      const { fullName, email, password, socialSecurityNumber, projectSelection } = ctx.request.body;
      
      
      let contractorLicense = null;
      if (ctx.request.files && ctx.request.files.contractorLicense) {
        const file = await strapi.plugins['upload'].services.upload.upload({
          data: {},
          files: ctx.request.files.contractorLicense
        });
        contractorLicense = file[0].id;
      }
  
      
      const newUser = await strapi.plugins['users-permissions'].services.user.add({
        username: email,
        email,
        password,
        fullName,
        socialSecurityNumber,
        projectSelection,
        contractorLicense
      });
  
      ctx.send({ user: newUser });
    },
  };