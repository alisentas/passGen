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
	$('#generate').click(function(e){
		e.preventDefault();
		var $length = parseInt($('#length').prop('value'),10);
		var $isReadable = $('#isReadable').prop('checked');
		var $hasLetter = $('#hasLetter').prop('checked');
		var $hasNumber = $('#hasNumber').prop('checked');
		var $hasUpperCase = $('#hasUpperCase').prop('checked');
		var $hasPunctuation = $('#hasPunctuation').prop('checked');
		var pass = passGen($length,$isReadable,$hasLetter,$hasNumber,$hasUpperCase,$hasPunctuation) + "";
		$('#password').val(pass);
	});
	$('input').click(function(){
		var progress = calculateProgress();
		if(progress < 45){
			$("#progress").html('<div class="progress-bar progress-bar-danger progress-bar-striped active"  role="progressbar" aria-valuenow="' + progress + '" aria-valuemin="0" aria-valuemax="100" style="width: ' + progress + '%"><span class="sr-only">' + progress + '%</span></div>');
		}else if(progress < 60){
			$("#progress").html('<div class="progress-bar progress-bar-warning progress-bar-striped active"  role="progressbar" aria-valuenow="' + progress + '" aria-valuemin="0" aria-valuemax="100" style="width: ' + progress + '%"><span class="sr-only">' + progress + '%</span></div>');
		}else if(progress < 80){
			$("#progress").html('<div class="progress-bar progress-bar-info progress-bar-striped active"  role="progressbar" aria-valuenow="' + progress + '" aria-valuemin="0" aria-valuemax="100" style="width: ' + progress + '%"><span class="sr-only">' + progress + '%</span></div>');
		}else{
			$("#progress").html('<div class="progress-bar progress-bar-success progress-bar-striped active"  role="progressbar" aria-valuenow="' + progress + '" aria-valuemin="0" aria-valuemax="100" style="width: ' + progress + '%"><span class="sr-only">' + progress + '%</span></div>');
		}
	});