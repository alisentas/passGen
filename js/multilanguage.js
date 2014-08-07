if(navigator.language = "tr-TR"){
	$(".panel-heading h1").html("Şifre Oluşturucu");
	$(".panel-body").html($(".panel-body").html()
	.replace("Password Length", "Şifre Uzunluğu")
	.replace("A length between 12-20 is recommended.", "12-20 arasında bir uzunluk önerilir.")
	.replace("Has Letters?", "Harf içersin mi?")
	.replace("Should your password need letters, like a, b, d, g", "Şifrenizde a, b, d, g gibi harfler olsun mu?")
	.replace("Has UpperCase Letters?", "Büyük Harf İçersin mi?")
	.replace("If you have letter option enabled, it's recommended to use uppercase letters in your password", "Eğer harf seçeneğini işaretlediyseniz, şifrenizde büyük harflerin kullanılması da önerilir.")
	.replace("Has Numbers?", "Sayı içersin mi?")
	.replace("It's recommended to use every number in your password including irrational ones like pi and e", "Pi ve e gibi irrasyonel sayılar da dahil olmak üzere şifrenizde sayı kullanmanız önerilir.")
	.replace("Has Punctuation?", "Noktalama içersin mi?")
	.replace("Generally recommended yo use punctuation and special characters like !,.+^#", "Şifrelerin noktalama ya da özel karakter içermesi genelde önerilir.")
	.replace("Is readable?", "Okunabilir olsun mu?")
	.replace("Generally not recommended, if you want to have passwords that you can read, check this option, then you'll have passwords like: \"abase\" or \"kottumi\".", "Genelde önerilmez, eğer \"abase\" ya da \"kottumi\" gibi şifrelere sahip olmak istiyorsanız bu seçeneği işaretleyin.")
	.replace("Generate</button>", "Oluştur</button>")	
	);
	$(".panel-footer p").html('Şifre oluşturucu <a href="https://github.com/alisentas">Ali Şentaş</a> tarafından yapılmıştır, dilerseniz <a href="https://github.com/alisentas/passGen">Github Projesi</a> üzerinden watch/star/fork yapabilirsiniz.');
}