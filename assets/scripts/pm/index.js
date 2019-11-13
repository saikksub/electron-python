const fs = require('fs')
const spawn = require('child_process').spawn

// const subprocess = spawn('python', [helloWorldScript])

function getType (code) {
  if (code === 0) {
    return 'success'
  } else if (code < 0 || code > 0) {
    return 'error'
  } else if (code === undefined) {
    return 'message'
  }
}

const invoke = function (path, callback, args) {
  if (!fs.existsSync(path)) {
    callback(new Error(`Unable to find script at ${path}`), 'error')
    return
  }
  let subprocess = null

  if (args && args.constructor === [].constructor) {
    subprocess = spawn('python', [path, ...args])
  } else {
    subprocess = spawn('python', [path])
  }

  subprocess.stdout.on('data', (data) => {
    callback(data.toString('utf8'), getType())
  })

  subprocess.stderr.on('data', (data) => {
    callback(data.toString('utf8'), getType(-1))
  })

  subprocess.on('exit', (code) => {
    callback(
      `exit code ${code}`, getType(code)
    )
    console.log('exit code', code)
  })
}

module.exports = {
  invoke
}