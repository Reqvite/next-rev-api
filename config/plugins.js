module.exports = ({ env }) => ({
  seo: {
    enabled: true,
  },
  "import-export-entries": {
    enabled: true,
    config: {
      serverPublicHostname: "",
    },
  },
  "fuzzy-search": {
    enabled: true,
    config: {
      contentTypes: [
        {
          uid: "api::business.business",
          modelName: "businesses",
          transliterate: true,
          fuzzysortOptions: {
            characterLimit: 300,
            threshold: -600,
            limit: 10,
            keys: [
              {
                name: "title",
                weight: 100,
              },
              // {
              //   name: "location",
              //   weight: -100,
              // },
            ],
          },
        },
      ],
    },
  },
});
