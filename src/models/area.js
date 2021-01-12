const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://admin:Datn123@cluster0.0g1dc.mongodb.net/NODE_DB', {useNewUrlParser: true});

const Schema = mongoose.Schema;

const areas = new Schema({
    fullAddress: String,
    type: Number,
    provinceCode: String,
    districtCode: String,
    villageCode: String,
    createdAt: Date,
    updatedAt: Date,
    __v: Number
},{
    collection: 'areas'
});

const areasModel = mongoose.model('areas', areas);

module.exports = areasModel
