var Datasource = require('./components/Datasource.react');
var DependentDatasource = require('./components/DependentDatasource.react');
var FilteredDatasource = require('./components/FilteredDatasource.react');
var Collection = require('./components/Collection.react');
var ObjectTest = require('./components/Object.react');
var DSManager = require('./services/DataStoreManager');
// Exports components
module.exports = {
  FilteredDatasource,
  Datasource,
  DependentDatasource,
  Collection,
  ObjectTest,
  DSManager
};
