RSS.Views.FeedEntriesView = Backbone.View.extend({
  template: JST['feeds/entry'],
  tagName: "ul",
  className: "entry-list",

  initialize: function() {
    var that = this;

    var renderCallback = that.render.bind(that);
    //Listens to changes in the collection, etc a new entry is added
    that.listenTo(that.collection, "change", renderCallback);
    that.listenTo(that.collection, "remove", renderCallback);
  },

  render: function() {
    var that = this;
    console.log(that.collection)
    var renderedContent = that.template({
      entries: that.collection
    });
    that.$el.html(renderedContent);
    return that;
  }

});

