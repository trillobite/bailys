/**
 * Created by patterncoder on 6/3/2015.
 */

var banquetsService = require('../../services/banquetsService');






var getData = function (req, res) {

    var viewBag = {};
    viewBag.title = "Banquet Beverage Service";
    banquetsService.getFutureBookings()
        .then(function(banquets){
            viewBag.banquets = banquets;
            res.render('banquets/beveragepackages', {  viewBag: viewBag })
        });


};



exports.getView = getData;