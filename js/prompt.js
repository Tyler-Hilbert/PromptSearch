function search() {
	var inPrompt = $('#prompt-in').val().toLowerCase();
	var firstWord = inPrompt.replace(/ .*/,''); // FIXME search for more than 1 word
	var outPrompt = "We apologize, but our database is still new and growing and we do not seem to have any related prompts. <a href='https://stablediffusionweb.com'>Click here to generate the prompt using stable diffuion</a>"
	var hasCache = false
	var id = -1
	var score = -1
	model = ""
	for (const prompt of data) { 
		if (prompt.prompt.toLowerCase().includes(firstWord) || (typeof prompt.name !== 'undefined' && prompt.name.toLowerCase().includes(firstWord))) {
			console.log(prompt.prompt)
			if (
				(!hasCache) || prompt.consistency_score > score 
			) {
				outPrompt = prompt.prompt
				hasCache = prompt.cached
				score = prompt.consistency_score
				id = prompt.id
				model = prompt.model
			}
		}
	}
	$('#prompt-out').html(outPrompt);
	$('#model').html(model);
	$('#cache-1').attr("src","Logo.png");
	$('#cache-2').attr("src","Logo.png");
	$('#cache-3').attr("src","Logo.png");
	$('#cache-4').attr("src","Logo.png");
	if (hasCache == true) {
		var c1 = "cached_images/" + id + "-1.jpg"
		var c2 = "cached_images/" + id + "-2.jpg"
		var c3 = "cached_images/" + id + "-3.jpg"
		var c4 = "cached_images/" + id + "-4.jpg"
		$('#cache-1').attr("src",c1);
		$('#cache-2').attr("src",c2);
		$('#cache-3').attr("src",c3);
		$('#cache-4').attr("src",c4);
		$('#cache-4').attr("src",c4);
	}
}
