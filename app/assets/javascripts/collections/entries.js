RSS.Collections.Entries = Backbone.Collection.extend({
  model: RSS.Models.Entry,
  comparator: function(entry){
    return entry.get('id');
  }
});