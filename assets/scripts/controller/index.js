/**
 * Binds element with click event listener
 * @method
 * @param {string} id - element id
 * @param {string} name - name of the script to invoke
 * @param {function} callback - script spawn handler
 */
const attachScript = (id, args, callback) => {
  let argEle = []
  const ele = document.getElementById(id)
  console.log(ele)
  if (args && args.constructor === [].constructor) {
    argEle = Object.assign([], args)
  }
  if (ele) {
    ele.addEventListener('click', () => {
      callback(getArgs(argEle))
    })
  }
}

function getArgs (argEle) {
  const result = []
  argEle.forEach(x => {
    const ele = document.getElementById(x)
    if (ele) {
      result.push(ele.value)
    }
  })
  return result
}

module.exports = {
  attachScript
}
