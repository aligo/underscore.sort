(function() {

  var root = this;

  root._ = root._ || {};

  root._.sort = function (objs, fields, sortfunction) {
    var sorted_objs = root._.clone(objs);
    sorted_objs.sort(function (a, b) {
      var i = 0;
      var diff = 0;
      while (diff == 0) {
        var field = fields[i];
        i = i + 1;
        diff = sortfunction(a[field], b[field])
      }
      return diff;
    });
    return sorted_objs;
  };

}).call(this);