// This module handles phantomjs process

var 
    commonRules     = require('../rules'),
    async           = require('async'),
    phantom         = require('phantom'),
    Q               = require('q'),
    report          = {}
;

module.exports = function phantomHandler(targets, conf){ // conf ignored for now

    var deferred = Q.defer();
    
    async.each(targets, function(target, next){
    
        phantom.create('--load-images=no', function(ph){
        
            ph.createPage(function(page){
                
                page.open(target.url, function (status) {
                    
                    report[target.url] = {};
                    
                    if (status !== 'success') {
                        
                        report[target.url] = 'Unable to access network';
                        ph.exit(); next();
                        
                    } else {
                    
                        async.each(target.rules, function(rule, next){
                            
                            // select rule that has to be tested
                            var commonRule = commonRules[rule];
                            
                            // get action type (mainly browser or pageObject)
                            var context = commonRule.context;
                        
                            // select action
                            var action = commonRule.action;
                            
                            // add result to the report
                            
                            if(context == 'browser'){
                                page.evaluate(action, function(result){
                                    report[target.url][rule] = result;
                                    next();
                                });
                            } else {
                                // to be defined, accessing context could be nice ...
                                report[target.url][rule] = 'void';
                                next();
                            }
                            
                        }, function(err){ ph.exit(); next(); });
                        
                    }
                
                });
            
            });
               
        });
        
    }, function(err){
        if (err) { deferred.reject(err); } else { deferred.resolve(report); }
    });
    
    return deferred.promise;

};
