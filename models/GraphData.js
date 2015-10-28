var mongoose = require('mongoose');

var GraphDataSchema = new mongoose.Schema({
  Year: String,
  Wins: String,
  Loses: String
}, 
{
  collection: 'graph-data-collection'
});

mongoose.model('GraphData', GraphDataSchema);
