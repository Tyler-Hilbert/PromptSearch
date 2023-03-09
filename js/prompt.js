function search() {
	var data = [
		{
			"id": 1,
			"name": "Red & Blue tribal man",
			"prompt": "portrait photo of a asia old warrior chief, tribal panther make up, blue on red, side profile, looking away, serious eyes, 50mm portrait photography, hard rim lighting photography–beta –ar 2:3 –beta –upbeta –upbeta",
			"model": "Stable Diffusion",
			"consistency_score": 10,
			"cached": true
		},
		{
			"id": 2,
			"name": "Keanu Reeves",
			"prompt": "Keanu Reeves portrait photo of a asia old warrior chief, tribal panther make up, blue on red, side profile, looking away, serious eyes, 50mm portrait photography, hard rim lighting photography–beta –ar 2:3 –beta –upbeta –beta –upbeta –beta –upbeta",
			"model": "Stable Diffusion",
			"consistency_score": 6,
			"cached": false
		},
		{
			"id": 3,
			"name": "African Warrior with Gold",
			"prompt": "portrait photo of a african old warrior chief, tribal panther make up, gold on white, side profile, looking away, serious eyes, 50mm portrait photography, hard rim lighting photography–beta –ar 2:3 –beta",
			"model": "Stable Diffusion",
			"consistency_score": 7,
			"cached": false
		},
		{
			"id": 4,
			"name": "Priest in Blue Robes",
			"prompt": "priest, blue robes, 68 year old man, national geographic, portrait, photo, photography –s 625 –q 2 –iw 3",
			"model": "Stable Diffusion",
			"consistency_score": 7,
			"cached": false
		},
		{
			"id": 5,
			"name": "Native American Women, Black & White",
			"prompt": "ultrarealistic, (native american old woman ) portrait, cinematic lighting, award winning photo, no color, 80mm lense –beta –upbeta –upbeta",
			"model": "Stable Diffusion",
			"consistency_score": 10,
			"cached": true
		},
		{
			"id": 6,
			"name": "Elegant Lady",
			"prompt": "portrait photo headshot by mucha, sharp focus, elegant, render, octane, detailed, award winning photography, masterpiece, rim lit",
			"model": "Stable Diffusion",
			"consistency_score": 8,
			"cached": true
		},
		{
			"id": 7,
			"name": "Goth Lady",
			"prompt": "a vibrant professional studio portrait photography of a young, pale, goth, attractive, friendly, casual, delightful, intricate, gorgeous, female, piercing green eyes, wears a gold ankh necklace, femme fatale, nouveau, curated collection, annie leibovitz, nikon, award winning, breathtaking, groundbreaking, superb, outstanding, lensculture portrait awards, photoshopped, dramatic lighting, 8 k, hi res –testp –ar 3:4 –upbeta",
			"model": "Stable Diffusion",
			"consistency_score": 6,
			"cached": false
		},
		{
			"id": 8,
			"name": "Tribal Mist Battle",
			"prompt": "ancient indonesia, indonesian villagers, punakawan warriors and priests, cinematic, detailed, atmospheric, epic, concept art, wimmelbilder, matte painting, background mountains, shafts of lighting, mist,, photo – realistic, concept art,, volumetric light, cinematic epic + rule of thirds | 3 5 mm, 8 k, corona render, movie concept art, octane render, cinematic, trending on artstation, movie concept art, cinematic composition, ultra – detailed, realistic, hyper – realistic, volumetric lighting, 8 k",
			"model": "Stable Diffusion",
			"consistency_score": 10,
			"cached": true
		},
		{
			"id": 9,
			"name": "Ancient Ruins",
			"prompt": "temple in ruines, forest, stairs, columns, cinematic, detailed, atmospheric, epic, concept art, Matte painting, background, mist, photo-realistic, concept art, volumetric light, cinematic epic + rule of thirds octane render, 8k, corona render, movie concept art, octane render, cinematic, trending on artstation, movie concept art, cinematic composition , ultra-detailed, realistic , hyper-realistic , volumetric lighting, 8k –ar 2:3 –test –uplight",
			"model": "Stable Diffusion",
			"consistency_score": 10,
			"cached": false
		},
		{
			"id": 10,
			"name": "Japan Snow Horse",
			"prompt": "Japanese ink art, black and white, panoramic view, Samurai riding a horse in a snowy forest Cinematic lighting, Unreal Engine 5, Cinematic, Color Grading, Editorial Photography, Photography, Photoshoot, Shot on 70mm lense, Depth of Field, DOF, Tilt Blur, Shutter Speed 1/1000, F/22, White Balance, 32k, Super-Resolution, Megapixel, ProPhoto RGB, VR, tall, epic, artgerm, alex ross, Halfrear Lighting, Backlight, Natural Lighting, Incandescent, Optical Fiber, Moody Lighting, Cinematic Lighting, Studio Lighting, Soft Lighting, Volumetric, Contre-Jour, dark Lighting, Accent Lighting, Global Illumination, Screen Space Global Illumination, Ray Tracing Global Illumination, Red Rim light, cool color grading 45%, Optics, Scattering, Glowing, Shadows, Rough, Shimmering, Ray Tracing Reflections, Lumen Reflections, Screen Space Reflections, Diffraction Grading, Chromatic Aberration, GB Displacement, Scan Lines, Ray Traced, Ray Tracing Ambient Occlusion, Anti-Aliasing, FKAA, TXAA, RTX, SSAO, Shaders, OpenGL-Shaders, GLSL-Shaders, Post Processing, Post-Production, Cel Shading, Tone Mapping, CGI, VFX, SFX, insanely detailed and intricate, hypermaximalist, elegant, hyper realistic, super detailed, dynamic pose, centered, photography",
			"model": "Stable Diffusion",
			"consistency_score": 8,
			"cached": true
		},
		{
			"id": 11,
			"name": "Turtle",
			"prompt": "award winning high resolution photo of a turtle",
			"model": "Stable Diffusion",
			"consistency_score": 9,
			"cached": true
		},
		{
			"id": 12,
			"name": "Haunted Woods",
			"prompt": "A hauntingly beautiful oil painting of a misty forest, in the style of Caspar David Friedrich. The intricate and cinematic lighting adds depth and mystery to the serene landscape, while the sweeping brushstrokes evoke a sense of awe and wonder. By Caspar David Friedrich",
			"model": "Stable Diffusion",
			"consistency_score": 10,
			"cached": true
		},
		{
			"id": 13,
			"name": "People Sitting Sketch",
			"prompt": "group of people in therapy, view from behind, pencil sketch",
			"model": "Dalle 2",
			"consistency_score": 9,
			"cached": true
		},
		{
			"id": 14,
			"name": "Valley of roses",
			"prompt": "Garden+factory,Tall factory,Many red rose,A few roses,clouds, ultra wide shot, atmospheric, hyper realistic, 8k, epic composition, cinematic, octane render, artstation landscape vista photography by Carr Clifton & Galen Rowell, 16K resolution, Landscape veduta photo by Dustin Lefevre & tdraw, 8k resolution, detailed landscape painting by Ivan Shishkin, DeviantArt, Flickr, rendered in Enscape, Miyazaki, Nausicaa Ghibli, Breath of The Wild, 4k detailed post processing, artstation, rendering by octane, unreal –hd –ar 9:16",
			"model": "Stable Diffusion",
			"consistency_score": 10,
			"cached": true
		},
		{
			"id": 15,
			"name": "Rocketship Launch",
			"prompt": "Rocket lunch, rocket on the launch pad, concept art, low angle, high detail, warm lighting, volumetric, godrays, vivid, beautiful, trending on artstation, by Jordan grimmer, art greg rutkowski",
			"model": "Stable Diffusion",
			"consistency_score": 10,
			"cached": true
		},
	]

	var inPrompt = $('#prompt-in').val().toLowerCase();
	var firstWord = inPrompt.replace(/ .*/,''); // FIXME search for more than 1 word
	var outPrompt = "We apologize, but our database is still new and growing and we do not seem to have any related prompts. <a href='https://stablediffusionweb.com'>Click here to generate the prompt using stable diffuion</a>"
	var hasCache = false
	var id = -1
	model = ""
	for (const prompt of data) { 
		if (prompt.prompt.toLowerCase().includes(firstWord) || prompt.name.toLowerCase().includes(firstWord)) {
			outPrompt = prompt.prompt
			hasCache = prompt.cached
			id = prompt.id
			model = prompt.model
		}
	}
	$('#prompt-out').html(outPrompt);
	$('#model').html(model);
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
	} else {
		$('#cache-1').attr("src","");
		$('#cache-2').attr("src","");
		$('#cache-3').attr("src","");
		$('#cache-4').attr("src","");
	}
}
