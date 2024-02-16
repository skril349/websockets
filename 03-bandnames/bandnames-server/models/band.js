const {v4: uuidv4} = require('uuid')

class Band{
    constructor( name ){
        this.name = name;
        this.votes = 0;
        this.id = uuidv4();
    }
}

module.exports = Band;