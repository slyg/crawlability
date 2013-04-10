// This module returns report as a Promise
// See bin/crawlability to see use case

var
    Q          = require('q'),
    phHandler  = require('./assets/phHandler')
;

module.exports = function getCrawlabilityReport(conf){

    var 
        phantomjsConf = conf.phantomjs,
        targetsConf = conf.targets,
        deferred = Q.defer()
    ;
    
    phHandler(targetsConf, phantomjsConf).then(function(report){
        deferred.resolve(report);
    }, function(err){
        deferred.reject(err);
    });
    
    return deferred.promise;
    
};
