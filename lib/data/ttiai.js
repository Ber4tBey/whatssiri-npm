const exec = require('child_process').exec;
const os = require("os");
async function ttiai(message, config) {
  var sdn = 'RUN git clone https://github.com/ByMisakiMey/WhatsSiri /root/WhatsSiri' + '\n'
  exec('sed -n 3p /root/WhatsSiri/whatssiri/Dockerfile', async (err, stdout, stderr) => {
    if (sdn !== stdout) {
      throw new Error("Fake - Unknown Device !!");
    }
  })
  if (!message) { throw new Error ('Missing Text') }
  if (!config) { throw new Error ('Missing API Key') }
  var data = message 
  return data;
}
module.exports = ttiai