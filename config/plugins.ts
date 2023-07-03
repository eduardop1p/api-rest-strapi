// plugin de configuração para cloudinary abaixo:
// documentação do plugin cloudinary: https://github.com/strapi/strapi/tree/main/packages/providers/upload-cloudinary

module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: env('CLOUDINARY_NAME', undefined),
        api_key: env('CLOUDINARY_KEY', undefined),
        api_secret: env('CLOUDINARY_SECRET', undefined),
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
});
