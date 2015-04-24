var myApp = angular.module('myApp',[]);

myApp.controller('MyController', function($scope, $http){
    
    $scope.selectedwords = [];  // Defining our array for the selected words from the original list
    $scope.overflag= false;     // Flag for our error message to be hidden
    
    /*
        Obtaining the words from the file
    */
    $http.get('js/words.json').success(function(response){
        $scope.words = response.words;
    });
	
	/*
        Adding words to our list
    */
    $scope.addtoselected = function (element) {
		if ($scope.selectedwords.length < 10)     // 10 is our limit size
		{
			$scope.selectedwords.push(element);
            $scope.overflag=false;                
		}
		else{
            $scope.overflag=true;               // Show the error message
		}
	};
	
    /*
        Removing words from our list
    */
	$scope.removeselected = function (element) {
		$scope.selectedwords.splice($scope.selectedwords.indexOf(element),1);
        $scope.overflag=false;
	};
});  // end of controller

/*
    Moving selected word to our list
*/
myApp.filter('selected', function() {
	return function (words, selectedwords) {
		var result =[]
		for (var i = 0; i< words.length; i++) {
			if (selectedwords.indexOf(words[i]) !=-1)
			{}
			else
			{
				result.push(words[i]);
			}
		}
		return result;
	}
	
}); // end of filter
