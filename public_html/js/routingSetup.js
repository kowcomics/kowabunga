var primaryApp = angular.module('primaryApp');
primaryApp.controller('NavBarController', function ($scope, $log) {

  $scope.status = {
    isopen: false
  };

  $scope.toggled = function (open) {
    $log.log('Dropdown is now: ', open);
  };

  $scope.toggleDropdown = function ($event) {
    $event.preventDefault();
    $event.stopPropagation();
    $scope.status.isopen = !$scope.status.isopen;
  };
});
primaryApp.constant('navBarLinks', {
  items: [{
      link: '',
      name: 'Home'
    }, {
      name: 'Comics',
      pages: [{
          link: 'newcomics',
          name: 'New Comics'
        },
        {
          link: 'bookOfMonth',
          name: 'Book of the Month'
        },
        {
          link: 'subscriber',
          name: 'Pull List/Subscription'
        },
        {
          link: 'buying',
          name: 'Sell Your Comics'
        }
      ]
    }, {
      name: 'Graphic Novels',
      pages: [{
          link: 'ogn',
          name: 'Original Graphic Novels'
        },
        {
          link: 'trades',
          name: 'Trade Hard/Paperbacks'
        }
      ]
    }, {
      name: 'Graphic Novels',
      pages: [{
          link: 'ogn',
          name: 'Original Graphic Novels'
        },
        {
          link: 'trades',
          name: 'Trade Hard/Paperbacks'
        }
      ]
    }, {
      link: 'videogames',
      name: 'Video Games'
    }, {
      link: 'calendar',
      name: 'Calendar'
    }
  ]
});

// configure our routes
primaryApp.config(function ($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'pages/mainContent.html'
  }).when('/about', {
    templateUrl: 'pages/about.html'
  }).when('/board', {
    templateUrl: 'pages/board.html'
  }).when('/newcomics', {
    templateUrl: 'pages/newcomics.html'
  }).when('/bookOfMonth', {
    templateUrl: 'pages/bomc.html'
  }).when('/subscriber', {
    templateUrl: 'pages/subscriber.html'
  }).when('/buying', {
    templateUrl: 'pages/buying.html'
  }).when('/ogn', {
    templateUrl: 'pages/ogn.html'
  }).when('/trades', {
    templateUrl: 'pages/trades.html'
  }).when('/ogn', {
    templateUrl: 'pages/ogn.html'
  }).when('/trades', {
    templateUrl: 'pages/trades.html'
  }).when('/videogames', {
    templateUrl: 'pages/videogames.html'
  }).when('/calendar', {
    templateUrl: 'pages/calendar.html'
  });
});