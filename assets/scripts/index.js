document.addEventListener('DOMContentLoaded', () => {
  init()
})

const formatter = (type) => {
  return `<p class="log ${type}"> <!--LOG --> </p>`
}

function init () {
  const clearButton = document.getElementById('id-clear-console')
  const AppConsole = document.getElementById('id-logger')
  const AppConsoleState = Boolean(AppConsole)

  clearConsole = () => {
    if (AppConsole) {
      AppConsole.innerHTML = "Please run any script to get started ..."
    }
  }

  logger = (log, type) => {
    if (AppConsoleState) {
      AppConsole.innerHTML += formatter(type).replace(
        '<!--LOG -->',
        `<b>[${new Date().toLocaleString()}]</b> ${log}`
      )
      AppConsole.scrollTop = AppConsole.scrollHeight;
    }
  }

  clearButton.addEventListener('click', () => {
    clearConsole()
  })

  clearConsole()

  attachScript(
    'script-hello_world', // button id
    [], // args
    (args) => { // callback
      logger('Starting script HELLO_WORLD', 'info')
      invoke(helloWorldScript, logger, args)
    }
  )

  attachScript(
    'script-math_pow', // button id
    [
      'id-arg-input-math-pow-a',
      'id-arg-input-math-pow-b'
    ], // args
    (args) => {
      logger(`Starting script HELLO_WORLD ${args.length > 0 ? `with args: ${args.join(',')}` : ''}`, 'info')
      invoke(mathPowScript, logger, args)
    }
  )
}
