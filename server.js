import express from 'express';
import mongoose from 'mongoose';
import logger from 'morgan';

// include configs here
import catena4450Schema from './models/catena4450';

const port = process.env.PORT || 3000;

mongoose.connect('mongodb://localhost/ttn', {
    server: {
        socketOptions: {
            keepAlive: 1 
        } 
    } 
});

mongoose.model('Catena4450', catena4450Schema);

const app = express();
app.use(logger('dev'));

app.listen(port);
console.log('Server started on port' + port);
