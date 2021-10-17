const exec = require('child_process').exec;
const os = require("os");
const axios = require('axios');
async function announcement_full() {
  var sdn = 'RUN git clone https://github.com/ByMisakiMey/WhatsSiri /root/WhatsSiri' + '\n'
  exec('sed -n 3p /root/WhatsSiri/whatssiri/Dockerfile', async (err, stdout, stderr) => {
    if (sdn !== stdout) {
      throw new Error("Fake - Unknown Device !!");
    }
  })
  var data = ''
  await axios.get('https://gist.githubusercontent.com/phaticusthiccy/d0d1855bd0098d773759b4f3345bd292/raw/').then(async (ann) => {
      data = ann.data
  })
  return data;
}
module.exports = announcement_full