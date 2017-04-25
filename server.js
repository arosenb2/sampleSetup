
var koa = require('koa');
var request = require('koa-request');
var router = require('koa-router')();
var serve = require('koa-static');
var views = require('koa-views');

var app = module.exports = new koa();

//put static files in /public
app.use(serve(__dirname + '/public'));

// rest endpoints
// router.get('/games', function *(){
//     //this.body = data;
// });

app.use(views(__dirname + '/views', {
    map: {
        html: 'lodash'
    }
}));


app.use(function* index(){
    // not x-domain yet
    var options = {
        url: 'http://localhost:8082/ticket-service/v2/game/activeGamesInfo',
        headers: {
            'User-Agent': 'request',
            'X-Exp-Api-Key': "insert api key here"
        }
    };

    var response = yield request(options);
    var data = JSON.parse(response.body);

    //console.log(data);

    yield this.render("index", {games: data});
});

app.use(router.routes());

app.listen(3000);

console.log('listening on port 3000');
