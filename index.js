
    var 
        spawn   = require('child_process').spawn,
        bin     = 'phantomjs',
        args    = ['./assets/phant.js']
    ;
    
    var cspr = spawn(bin, args);
    
    cspr.stdout.setEncoding('utf8'); 
    
    cspr.stdout.on('data', function(data){
    
        var report = JSON.parse(data);
        
        console.log(report);
    
    });
   