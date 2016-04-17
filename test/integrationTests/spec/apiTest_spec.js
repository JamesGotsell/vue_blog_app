// need to work out how to test the api call. 
//  function call that  fires the ajax call --> apiData()

var request = require('supertest'),
  sinon   = require('sinon'),
  chai   = require("chai"),
  vue    = require("vue");
  
var expect = chai.expect;
var url = 'http://localhost:2001/'
// var apiData = require("../../app.js" )
    // var vueInstance = require("../../../app.js" ) 
// chai.should();


describe("Api", function (){
  describe("apiData",  function(){
     beforeEach(function(){
        sinon.spy($, 'ajax');
     });
     afterEach(function(){
       $.ajax.restore()
     })
  it('should make an ajax call', function(done) {
      // expect($.ajax.calledOnce).to.be.false;
      // done();
      expect($.ajax.mostRecentCall[url]).toEqual("/");
    });
  });
});