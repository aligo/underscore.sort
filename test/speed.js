(function() {

  var fields = ['a', 'b', 'c', 'd', 'e'];
  var objects = _.map(_.range(1000), function () {
    var object = {};
    _.each(fields, function(field) {
      object[field] = Math.random() * 1000;
    });
    return object;
  });

  JSLitmus.test('plan A', function() {
    var sorted_objects = _.clone(objects);
    _.each(_.clone(fields).reverse(), function (field) {
      sorted_objects = _.values(sorted_objects).sort(function (a,b) {
        return b[field] - a[field];
      });
    });
    return sorted_objects;
  });

  JSLitmus.test('plan B', function() {
    var sorted_objects = _.clone(objects);
    var sortfunction = function (a,b) {
      return b - a;
    };
    _.each(_.clone(fields).reverse(), function (field) {
      sorted_objects = _.values(sorted_objects).sort(function (a,b) {
        return sortfunction(a[field], b[field])
      });
    });
    return sorted_objects;
  });

})();