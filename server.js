import express from 'express';
import mongoose from 'mongoose';
import logger from 'morgan';

// include configs here
import catena4450Schema from './models/catena4450';

const port = process.env.PORT || 3000;

mongoose.connect('mongodb://localhost/ttn', {
  keepAlive: 1
});

mongoose.model('Catena4450', catena4450Schema);

const app = express();
app.use(logger('dev'));

app.listen(port);


console.log('  _______ _______ _   _   __  __                             _ _        _____                          ');
console.log(' |__   __|__   __| \\ | | |  \\/  |                           | | |      / ____|                         ');
console.log('    | |     | |  |  \\| | | \\  / | ___  _ __   __ _  ___   __| | |__   | (___   ___ _ ____   _____ _ __ ');
console.log('    | |     | |  | . ` | | |\\/| |/ _ \\| \'_ \\ / _` |/ _ \\ / _` | \'_ \\   \\___ \\ / _ \\ \'__\\ \\ / / _ \\ \'__|');
console.log('    | |     | |  | |\\  | | |  | | (_) | | | | (_| | (_) | (_| | |_) |  ____) |  __/ |   \ V /  __/ |   ');
console.log('    |_|     |_|  |_| \\_| |_|  |_|\\___/|_| |_|\\__, |\\___/ \\__,_|_.__/  |_____/ \\___|_|    \\_/ \\___|_|   ');
console.log('                                              __/ |                                                    ');
console.log('                                             |___/                                                     ');

console.log('Server started on port ' + port);
