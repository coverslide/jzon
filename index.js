module.exports = jzon
jzon.parse = jzon('parse')
jzon.stringify = jzon('stringify')

function jzon(type, input, cb){
  if(type != 'parse' && type != 'stringify')
    throw new Error('Type argument must be parse or stringify')
  if(typeof input != 'undefined')
    return process(input, cb)
  return process
  function process(input, cb){
    try{
      var retval = JSON[type](input)
    } catch(e){
      var err = e
    }
    if(cb) cb(err, retval)
    return err || retval
  }
}
