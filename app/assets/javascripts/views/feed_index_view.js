RSS.Views.FeedIndexView = Backbone.View.extend({
  template: JST['feeds/index'],
  tagName: "ul",
  className: "feed-list",

  initialize: function() {
    var that = this;

    var renderCallback = that.render.bind(that);
    that.listenTo(that.collection, "change", renderCallback);
    that.listenTo(that.collection, "request", renderCallback);
  },
  events: {
    "click a":"updateEntries"
  },
  render: function() {
    var that = this;
    var renderedContent = that.template({
      feeds: that.collection
    });
    that.$el.html(renderedContent);
    return that;
  },
  updateEntries: function() {
    var that = this;
    that.collection.fetch();
  }
});






