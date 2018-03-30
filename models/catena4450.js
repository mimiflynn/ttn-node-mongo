/* 
    Fields from device to extract
    {
        "boot": 5,
        "error": "none",
        "lux": 774,
        "p": 991.24,
        "powerSourcedCount": 0,
        "powerSourcedPerHour": 0,
        "powerUsedCount": 0,
        "powerUsedPerHour": 0,
        "rh": 37.890625,
        "tempC": 25.23046875,
        "vBat": 4.24755859375
    }
*/

import { Schema } from "mongoose";

const catena4450Schema = new Schema(
    {
        "boot": {
            type: Number,
            default: '',
            trim: true
        },
        "error": {
            type: String,
            default: '',
            trim: true
        },
        "lux": {
            type: Number,
            default: '',
            trim: true
        },
        "p": {
            type: Number,
            default: '',
            trim: true
        },
        "powerSourcedCount": {
            type: Number,
            default: '',
            trim: true
        },
        "powerSourcedPerHour": {
            type: Number,
            default: '',
            trim: true
        },
        "powerUsedCount": {
            type: Number,
            default: '',
            trim: true
        },
        "powerUsedPerHour": {
            type: Number,
            default: '',
            trim: true
        },
        "rh": {
            type: Number,
            default: '',
            trim: true
        },
        "tempC": {
            type: Number,
            default: '',
            trim: true
        },
        "vBat": {
            type: Number,
            default: '',
            trim: true
        },
        "date": {
            type: Date,
            default: Date.now
        }
      }
);

export default catena4450Schema;
