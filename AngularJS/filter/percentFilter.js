// by jeffjohnson9046 @github
// https://gist.github.com/jeffjohnson9046/9470800
app.filter('percent', ['$filter', function ($filter) {
  return function (input, decimals) {
    return $filter('number')(input * 100, decimals) + '%';
  };
}]);