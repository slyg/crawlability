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
        
        report[target.url] = {};
        
        if (status !== 'success') {
            
            report[target.url] = 'Unable to access network';
            
        } else {
        
            var len = target.rules.length, tbe, result;
            
            while(len--){
            
                // choose the rule to be tested
                tbe = commonRules[target.rules[len]];
                
                // add result to the report
                report[target.url][target.rules[len]] = page.evaluate(tbe)
            }
        }
        
        next();
    
    });
    
}, function(err){

    if(err) { 
        console.log(JSON.stringify({error : err})); 
    } else {
       console.log(JSON.stringify(report)); 
    }
    
    phantom.exit();
    
});