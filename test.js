'use strict'

var tape = require('tape')
var jzon = require('./index.js')

// Should work flawlessly unless I really fucked something up
tape('check valid json works with callbacks', function(t){
  var testObj = {a:1, b:2, c:3}

  var testStr = JSON.stringify(testObj)

  var checkStr, checkObj, retObj
  var retStr = jzon.stringify(testObj, function(err, cbStr){
    t.error(err)
    checkStr = cbStr
    retObj = jzon.parse(cbStr, function(err, cbObj){
      t.error(err)
      checkObj = cbObj
    })
  })

  t.equal(testStr, checkStr, 'should match results of JSON.stringify')
  t.deepEqual(testObj, checkObj, 'callback object should match original object')
  t.deepEqual(testObj, retObj, 'return object should match original object')
  t.end()
})

tape('checki stringify error handling', function(t){
  var testObj = {}
  testObj.self = testObj

  var testStr = jzon.stringify(testObj, function(err){
    t.ok(err instanceof Error, 'Should throw an error')
  })

  t.ok(testStr instanceof Error, 'Should throw an error')

  setImmediate(t.end.bind(t))
})

tape('check parse error handling', function(t){
  var testStr = ',' + JSON.stringify({a:1,b:2,c:3,d:4,e:5}) + ','

  var testObj = jzon.parse(testStr, function(err, ret){
    t.ok(err instanceof Error, 'Should throw an error')
  })

  t.ok(testObj instanceof Error, 'Should throw an error')

  setImmediate(t.end.bind(t))
})
