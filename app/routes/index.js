var express = require('express'),


    router = function indexHndlr(dataFile) {
        // body... 
        var indexRouter = express.Router(),
        pagePhotos = [],
        pageSpeakers = dataFile.speakers;

        dataFile.speakers.forEach( function(item) {
            // statements
            pagePhotos = pagePhotos.concat(item.artwork);
        });

        indexRouter.get('/', function(req, res) {

            res.render('index', {
                pageTitle: 'Home',
                artwork: pagePhotos,
                speakers : pageSpeakers,
                pageID: 'home'
            });

        });
        return indexRouter;
    };




module.exports = router;
