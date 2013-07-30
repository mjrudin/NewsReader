window.RSS = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function($rootEl, feeds) {
    //We need to convert the feeds array into a feeds collection
    var feeds = new RSS.Collections.Feeds(feeds);
    new RSS.Routers.FeedsRouter($rootEl, feeds);
    Backbone.history.start();
  }
};
