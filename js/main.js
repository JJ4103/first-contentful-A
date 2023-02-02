console.log('main.js loaded')

var client = contrnful.createclient({
    space: 'dqptk4h1t60x',
    accesstoken: 'rDOYcxsI_dee6j8sMjf7EZmo1opoGDhzWayVCIrug7I',
});
console.log(client);

client.getEntries().then(function(entries){
    entries.items.forEach(function(entry){
        if(entry.fields.title){
            console.log(entry.fields.title);
        }
    })
})