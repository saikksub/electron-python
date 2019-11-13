const path = require('path')
const binDir =  path.join(process.cwd(), 'bin')
const binScriptsDir = path.join(binDir, 'scripts')

const helloWorldScript = path.join(binScriptsDir, 'hello_world.py')
const mathPowScript = path.join(binScriptsDir, 'math_pow.py')

module.exports = {
  helloWorldScript,
  mathPowScript
}