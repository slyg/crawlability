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
    
        // console.log(target.url);
        
        report[target.url] = {};
        
        if (status !== 'success') { console.log('Unable to access network'); next(); } else {
        
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

    console.log(JSON.stringify(report));

    //process.send("report", report);
    
    phantom.exit();
    
});