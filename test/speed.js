// underscore.sort
// (c) 2012 aligo <aligo_x at 163 dot com>
// underscore.sort is freely distributable under the terms of the MIT license.
// GitHub: https://github.com/aligo/underscore.sort

(function() {

  var fields = ['a', 'b', 'c', 'd', 'e'];
  var objects = _.map(_.range(1000), function () {
    var object = {};
    _.each(fields, function(field) {
      object[field] = Math.random() * 1000;
    });
    return object;
  });

  JSLitmus.test('plan A', function () {
    var sorted_objects = _.clone(objects);
    _.each(_.clone(fields).reverse(), function (field) {
      sorted_objects = _.values(sorted_objects).sort(function (a, b) {
        return b[field] - a[field];
      });
    });
    return sorted_objects;
  });

  JSLitmus.test('plan B', function () {
    var sorted_objects = _.clone(objects);
    var sortfunction = function (a, b) {
      return b - a;
    };
    _.each(_.clone(fields).reverse(), function (field) {
      sorted_objects = _.values(sorted_objects).sort(function (a, b) {
        return sortfunction(a[field], b[field]);
      });
    });
    return sorted_objects;
  });

  JSLitmus.test('plan C', function () {
    var sorted_objects = _.clone(objects);
    var sortfunction = function (a, b) {
      return b - a;
    };
    sorted_objects.sort(function (a, b) {
      var i = 0;
      var diff = 0;
      while (diff == 0) {
        var field = fields[i];
        i = i + 1;
        diff = sortfunction(a[field], b[field]);
      }
      return diff;
    });
    return sorted_objects;
  });

  JSLitmus.test('_.sort (plan C)', function () {
    var sorted_objects = _.clone(objects);
    _.sort(sorted_objects, fields, function (a, b) {
      return b - a;
    });
    return sorted_objects;
  });

})();