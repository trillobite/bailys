const express = require("express");
const router = express.Router();
const request = require("request");
//const bodyParser = require("body-parser");
//const mailer = require("../utils/mailer");



//const jsonParser = bodyParser.json();

router.get("/", (req, res) => {
    res.send("We will contact you soon!");
});

//POST for the inquiry form on banquets.
router.post("/", async (req, res) => {

    console.log(req.body);

    // try {
    //     let tmp = req.body;
    //     let message = `
    //     Customer Name: ${tmp.name}
    //     Customer Email: ${tmp.email}
    //     Customer Number: ${tmp.phone}
    //     Inquiry Date: ${tmp.date}
    //     Inquiry Time: ${tmp.time}
    
    //     message: ${tmp.details}`;
    //     let response = await mailer(message);
    //     console.log(response);
    
    //     res.send(`
    //     <html>
    //         <p> We will be contacting you soon! </p>
    //     </html>
        
    //     `);
    // } catch (e) {
    //     console.log(e);
    //     res.send(`
    //     <html>
    //         <p> Sorry, we could not process your request, maybe contact us by phone? </p>
    //     </html>
        
    //     `);
    // }

    try {
        console.log("sending request...");
        let msg = {
            name: req.body.name,
            email: req.body.email,
            phoneNumber: req.body.phone,
            message: `
                Inquiry Date: ${req.body.date}
                Inquiry Time: ${req.body.time}
                Message: ${req.body.details}
            `,
        }
        request.post("http://67.205.162.241:1984/inquiry", { json: msg }, (err, response, body) => {
            //console.log(response);
            //send the response from the url above back.
            res.send(response.statusCode);
        });

    } catch (e) {
        res.send(e);
    }
});

module.exports = router;