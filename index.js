module.exports = jzon
jzon.parse = jzon('parse')
jzon.stringify = jzon('stringify')

function jzon(type){
  return function(input, cb){
    try{
      var retval = JSON[type](input)
    } catch(e){
      var err = e
    }
    if(cb) cb(err, retval)
    return err || retval
  }
}
