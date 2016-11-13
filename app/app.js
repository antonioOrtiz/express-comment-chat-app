 var express = require('express'),
    app = express(),
    dataFile = require('./data/data.json'),
    reload = require('reload');


app.set('port', process.env.PORT || 3000);
// app.set('appData', dataFile);
app.set('view engine', 'ejs');
app.set('views', 'app/views');


app.locals.siteTitle = 'Roux Meetups :)';
app.locals.allSpeakers = dataFile.speakers;


app.use(express.static('app/public'));
app.use(require('./routes/index')(dataFile));
app.use(require('./routes/speakers')(dataFile));
app.use(require('./routes/feedback'));
app.use(require('./routes/api'));



var server = app.listen(app.get('port'), function() {
    console.log('Listening on port ' + app.get('port'));
});


reload(server, app);



