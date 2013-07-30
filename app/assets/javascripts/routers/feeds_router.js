RSS.Routers.FeedsRouter = Backbone.Router.extend({
  initialize: function($rootEl, feeds) {
    this.feeds = feeds;
    this.$rootEl = $rootEl;

    this.$rootEl.append("<div class='sidebar'></div>")
    this.$rootEl.append("<div class='content'></div>")
  },
  routes: {
    "" : "feedIndex",
    "feeds/:id": "feedEntries"
  },
  feedIndex: function() {
    var that = this;
    var feedIndexView = new RSS.Views.FeedIndexView({
      collection: that.feeds
    });

    $(".sidebar").html(feedIndexView.render().$el);
  },

  feedEntries: function(id){
    var that = this;
    that.feedIndex();
    var feed = that.feeds.get(id);
    var rawEntries = feed.get('entries');
    //console.log(rawEntries)
    //make a collection
    var entries = new RSS.Collections.Entries(rawEntries)

    var feedEntriesView = new RSS.Views.FeedEntriesView({
      collection: entries
    });

    $(".content").html(feedEntriesView.render().$el);
  }
});
