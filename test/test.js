(function() {
  var objs = _.map(_.range(1000), function (i) {
    return {
      'i' : i,
      'a' : Math.floor(i / 100),
      'b' : Math.floor((i % 100) / 10),
      'c' : ((i % 100) % 10)
    };
  });
  test('shuffled_objs should not equal objs', function () {
    var shuffled_objs = _.shuffle(objs);
    notStrictEqual(_.pluck(shuffled_objs, 'i'), _.pluck(objs, 'i'));
  });

  test('sort([\'a\', \'b\', \'c\']) by descending', function() {
    var shuffled_objs = _.shuffle(objs);
    var sorted_objs = _.sort(shuffled_objs, ['a', 'b', 'c'], function (a, b) {
      return b - a;
    });
    equal(_.pluck(sorted_objs, 'i').join(','), _.pluck(objs, 'i').reverse().join(','));
  });

  test('sort([\'a\', \'b\', \'c\']) by ascending', function() {
    var shuffled_objs = _.shuffle(objs);
    var sorted_objs = _.sort(shuffled_objs, ['a', 'b', 'c'], function (a, b) {
      return a - b;
    });
    equal(_.pluck(sorted_objs, 'i').join(','), _.pluck(objs, 'i').join(','));
  });
})();