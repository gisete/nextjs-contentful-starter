const contentful = require('contentful');

const defaultConfig = {
  CTF_SPACE_ID: process.env.CTF_SPACE_ID,
  CTF_CPA_TOKEN: process.env.CTF_CPA_TOKEN
};

module.exports = {
  createClient (config = defaultConfig) {
    const options = {
      space: config.CTF_SPACE_ID,
      accessToken: config.CTF_CPA_TOKEN,
      environment: 'master'
    };    

    // if(process.env.NODE_ENV === 'production' && !process.env.STAGING) {
    //   options.host = 'cdn.contentful.com';
    //   options.accessToken = config.CTF_CDA_TOKEN;
    // }

    return contentful.createClient(options);
  }
};