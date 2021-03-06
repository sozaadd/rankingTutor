(function() {
    angular
        .module('funfun')
        .controller('dashboardIndexCtrl', [
            'dataService', '$location', '$http', '$scope', 'localStorageService',
            dashboardIndexCtrl
        ]);

    function dashboardIndexCtrl(dataService, $location, $http, $scope, localStorageService) {
        $scope.isLoading = true
        $scope.selected = [];
        $scope.dataArray = [{
                src: 'https://www.travelexcellence.com/images/movil/La_Paz_Waterfall.jpg'
            },
            {
                src: 'http://www.parasholidays.in/blog/wp-content/uploads/2014/05/holiday-tour-packages-for-usa.jpg'
            },
            {
                src: 'http://clickker.in/wp-content/uploads/2016/03/new-zealand-fy-8-1-Copy.jpg'
            },
            {
                src: 'http://images.kuoni.co.uk/73/indonesia-34834203-1451484722-ImageGalleryLightbox.jpg'
            },
            {
                src: 'http://www.holidaysaga.com/wp-content/uploads/2014/09/Day08-SIN-day-Free-City-View.jpg'
            },
            {
                src: 'http://images.kuoni.co.uk/73/malaysia-21747826-1446726337-ImageGalleryLightbox.jpg'
            },
            {
                src: 'http://www.kimcambodiadriver.com/uploads/images/tours/kim-cambodia-driver-angkor-wat.jpg'
            },
            {
                src: 'https://www.travcoa.com/sites/default/files/styles/flexslider_full/public/tours/images/imperialvietnam-halong-bay-14214576.jpg?itok=O-q1yr5_'
            }
        ];
        var self = this;
        $scope.shools = []
        dataService
            .loadAllSchools()
            .then(function(schools) {
                $scope.schools = schools;
                $scope.isLoading = false
            })

        $scope.goToSchoolPage = function(id) {
            localStorageService.set("schoolSelectId", id);
            $location.path("/info-school");
        }
    }
})();