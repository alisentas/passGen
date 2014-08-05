$('document').ready(function(){	
	var calculateProgress = function(){
		var $length = parseInt($('#length').prop('value'),10);
		var $isReadable = $('#isReadable').prop('checked');
		var $hasLetter = $('#hasLetter').prop('checked');
		var $hasNumber = $('#hasNumber').prop('checked');
		var $hasUpperCase = $('#hasUpperCase').prop('checked');
		var $hasPunctuation = $('#hasPunctuation').prop('checked');
		var progressLevel = 0;
		if($isReadable){
			progressLevel += 30;
			if($hasUpperCase){
				progressLevel += 5;
			}
			if($length > 5){
				progressLevel += 10;
			}
			if($length > 10){
				progressLevel += 15;
			}
			if($length > 15){
				progressLevel += 15;
			}
		}else if(!$isReadable){
			if($hasPunctuation){
				progressLevel += 30;
			}
			if($hasLetter){
				progressLevel += 20;
			}
			if($hasNumber){
				progressLevel += 15;
			}
			if($hasUpperCase){
				progressLevel += 5;
			}
			if($length > 5){
				progressLevel += 10;
			}
			if($length > 10){
				progressLevel += 15;
			}
			if($length > 15){
				progressLevel += 15;
			}
		}
		return progressLevel;
	};
	$('#generate').click(function(){
		var $length = parseInt($('#length').prop('value'),10);
		var $isReadable = $('#isReadable').prop('checked');
		var $hasLetter = $('#hasLetter').prop('checked');
		var $hasNumber = $('#hasNumber').prop('checked');
		var $hasUpperCase = $('#hasUpperCase').prop('checked');
		var $hasPunctuation = $('#hasPunctuation').prop('checked');
		var pass = passGen($length,$isReadable,$hasLetter,$hasNumber,$hasUpperCase,$hasPunctuation) + "";
		$('#password').html(pass);
	});
	$('#generate, input, label').click(function(){
		var x = '<progress max="100" value="' + calculateProgress() + '" />';
		$('#progressbarContainer').html(x);
	});
});