$(function() {

	Parse.$ = jQuery;
	//Initialize
	Parse.initialize("ERpwUioqa1tqTeSmeIGZi6TF3I04cu72EMATwQMh", "E9vn2Xy1kgAERYZvgtdLW9s6I28Sp5GGUVrBLjiG");

	$('.form-signin').on('submit', function(e) {
	 
	    // Prevent Default Submit Event
	    e.preventDefault();
	 
	    // Get data from the form and put them into variables
	    var data = $(this).serializeArray(),
	        username = data[0].value,
	        password = data[1].value;
	 
	    // Call Parse Login function with those variables
	    Parse.User.logIn(username, password, {
	        // If the username and password matches
	        success: function(user) {
	            alert('Welcome!');
	        },
	        // If there is an error
	        error: function(user, error) {
	            console.log(error);
	        }
	    });
	 
	});
});