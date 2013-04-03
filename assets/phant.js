var 
    rules   = require('../rules'),
    targets = require('../targets'),
    async   = require('async')
;

async.each(targets, function(target, next){
    
    var 
        page = require('webpage').create()
    ;
    
    page.open(target.url, function (status) {
    
        console.log(target.url);
        
        if (status !== 'success') { console.log('Unable to access network'); next(); } else {
        
            var len = target.rules.length, tbe;
            
            while(len--){
                tbe = rules[target.rules[len]];
                console.log(target.rules[len], " => ", 
                    page.evaluate(
                        tbe
                    )
                );
            }
        }
        
        next();
    
    });

}, function(err){
    
    phantom.exit();
    
});