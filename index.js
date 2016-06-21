/* jshint node: true */
'use strict';

module.exports = {
  name: 'delete-button',
  included: function(app) {
    this._super.included(app);

    app.import(app.bowerDirectory + '/bootstrap-sass/assets/javascripts/bootstrap/tooltip.js');
    app.import(app.bowerDirectory + '/bootstrap-sass/assets/javascripts/bootstrap/popover.js');
    
  }
};
