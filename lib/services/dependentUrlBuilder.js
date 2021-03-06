function dependentUrlBuilder(options) {
  var { fkAttr } = options;
  return {
    /**
     * Generate resource URL
     * @param { object } object Object being operated upon
     * @return {string} resource API endpoint url
     */
      _getResourceUrl(object) {
        return `${this.basePath}/${object[fkAttr]}/${this.endpoint}`;
      },

    /**
     * Generate single resource URL
     * @param  {number} id ID of resource
     * @return {string} resource API url
     */
      _getObjectUrl(id) {
        return `${this.basePath}/${this.endpoint}/${id}`;
      }
  };
}

module.exports = dependentUrlBuilder;
