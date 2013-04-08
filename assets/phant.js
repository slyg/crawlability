var 
    commonRules     = require('../rules'),
    targets         = require('../targets'),
    async           = require('async'),
    report          = {}
;

async.each(targets, function(target, next){
    
    var 
        page = require('webpage').create()
    ;
    
    page.open(target.url, function (status) {
    
        var ctx = this;
        
        report[target.url] = {};
        
        if (status !== 'success') {
            
            report[target.url] = 'Unable to access network';
            next();
            
        } else {
        
            async.each(target.rules, function(rule, next){
                
                // select rule that has to be tested
                var commonRule = commonRules[rule];
                
                // get action type (mainly browser or pageObject)
                var context = commonRule.context;
            
                // select action
                var action = commonRule.action;
                
                // add result to the report (should be sync)
                report[target.url][rule] = (context == 'browser' ? page.evaluate(action) : action.call(ctx, status));
                
                next();
                
            }, function(err){ next(); });
            
        }
    
    });
    
    
}, function(err){

    console.log(JSON.stringify( err ? {error : err} : {report : report} ));
    
    phantom.exit();
    
});