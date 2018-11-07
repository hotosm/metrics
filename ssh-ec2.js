var SSH = require('simple-ssh')
var fs = require('fs')
var ssh = new SSH({
  host: '3.16.125.150',
  user: 'ubuntu',
  key: fs.readFileSync('metricsec2.pem')
})
ssh.exec('mkdir datadir', {
  out: function (stdout) {
    console.log(stdout)
  }
}).start()
ssh.exec('curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.32.0/install.sh | bash', {
  out: function (stdout) {
    console.log(stdout)
  }
}).start()
ssh.exec('nvm install 6', {
  out: function (stdout) {
    console.log(stdout)
  }
}).start()
