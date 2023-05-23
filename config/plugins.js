module.exports = ({ env }) => ({
  "vercel-deploy": {
    enabled: true,
    config: {
      deployHook: "https://api.vercel.com/v1/integrations/deploy/prj_<deploy-hook>",
      apiToken: "p43PINnME1r18fTgPc9Qc8U1",
      appFilter: "strapi",
      roles: ["strapi-super-admin", "strapi-editor", "strapi-author"],
    },
  },
});