  var Pinboard = require('node-pinboard');
    var api_token = 'user:NNNNNN';

    var pinboard = new Pinboard(api_token);

    var options = {
        url: 'https://github.com/mikeal/request',
        description: ' mikeal / request',
        tags: 'git,node-pinboard,test',
        toread: 'yes'
   };

   /*  example adding of pinboard bookmark:
    pinboard.add(options, function(err, res) {
        console.log(res);
        //{ result_code: 'done' }
    });
*/

