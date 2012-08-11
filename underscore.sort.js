// underscore.sort
// (c) 2012 aligo <aligo_x at 163 dot com>
// underscore.sort is freely distributable under the terms of the MIT license.
// GitHub: https://github.com/aligo/underscore.sort

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