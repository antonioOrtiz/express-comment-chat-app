var express = require('express'),


    router = function speakHndlr(dataFile) {
        // body... 
        var speakerRoute = express.Router(),
            pagePhotos = [],
            pageSpeakers = dataFile.speakers;

        dataFile.speakers.forEach(function(item) {
            // statements
            pagePhotos = pagePhotos.concat(item.artwork);
        });

        speakerRoute.get('/speakers', function(req, res) {

            res.render('speakers', {
                pageTitle: 'Speakers',
                artwork: pagePhotos,
                speakers: pageSpeakers,
                pageID: 'speakers'
            });

        });

        speakerRoute.get('/speakers/:speakerid', function(req, res) {
            var pagePhotos = [],
                pageSpeakers = [],
                data = dataFile;

            data.speakers.forEach(function(item) {
                if (item.shortname == req.params.speakerid) {
                    pageSpeakers.push(item);
                    pagePhotos = pagePhotos.concat(item.artwork);
                }
            });

            res.render('speakers', {
                pageTitle: 'Speaker Info',
                artwork: pagePhotos,
                speakers: pageSpeakers,
                pageID: 'speakerDetail'
            });
        });
        return speakerRoute;
    };

module.exports = router;
