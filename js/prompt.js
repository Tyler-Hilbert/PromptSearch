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
		{
			"id": 16,
			"prompt": "Prompt: portrait photo of a asia old warrior chief, tribal panther make up, blue on red, side profile, looking away, serious eyes, 50mm portrait photography, hard rim lighting photography\u2013beta \u2013ar 2:3 \u2013beta \u2013upbeta \u2013upbeta",
			"model": "Stable Diffusion",
			"cached": false
		},
		{
			"id": 17,
			"prompt": "Prompt: Keanu Reeves portrait photo of a asia old warrior chief, tribal panther make up, blue on red, side profile, looking away, serious eyes, 50mm portrait photography, hard rim lighting photography\u2013beta \u2013ar 2:3 \u2013beta \u2013upbeta \u2013beta \u2013upbeta \u2013beta \u2013upbeta",
			"model": "Stable Diffusion",
			"cached": false
		},
		{
			"id": 18,
			"prompt": "portrait photo of a african old warrior chief, tribal panther make up, gold on white, side profile, looking away, serious eyes, 50mm portrait photography, hard rim lighting photography\u2013beta \u2013ar 2:3 \u2013beta",
			"model": "Stable Diffusion",
			"cached": false
		},
		{
			"id": 19,
			"prompt": "priest, blue robes, 68 year old man, national geographic, portrait, photo, photography \u2013s 625 \u2013q 2 \u2013iw 3",
			"model": "Stable Diffusion",
			"cached": false
		},
		{
			"id": 20,
			"prompt": "ultrarealistic, (native american old woman ) portrait, cinematic lighting, award winning photo, no color, 80mm lense \u2013beta \u2013upbeta \u2013upbeta",
			"model": "Stable Diffusion",
			"cached": false
		},
		{
			"id": 21,
			"prompt": "portrait photo headshot by mucha, sharp focus, elegant, render, octane, detailed, award winning photography, masterpiece, rim lit",
			"model": "Stable Diffusion",
			"cached": false
		},
		{
			"id": 22,
			"prompt": "a vibrant professional studio portrait photography of a young, pale, goth, attractive, friendly, casual, delightful, intricate, gorgeous, female, piercing green eyes, wears a gold ankh necklace, femme fatale, nouveau, curated collection, annie leibovitz, nikon, award winning, breathtaking, groundbreaking, superb, outstanding, lensculture portrait awards, photoshopped, dramatic lighting, 8 k, hi res \u2013testp \u2013ar 3:4 \u2013upbeta",
			"model": "Stable Diffusion",
			"cached": false
		},
		{
			"id": 23,
			"prompt": "medium shot side profile portrait photo of the Takeshi Kaneshiro warrior chief, tribal panther make up, blue on red, looking away, serious eyes, 50mm portrait, photography, hard rim lighting photography \u2013ar 2:3 \u2013beta \u2013upbeta",
			"model": "Stable Diffusion",
			"cached": false
		},
		{
			"id": 24,
			"prompt": "gorgeous young Swiss girl sitting by window with headphones on, wearing white bra with translucent shirt over, soft lips, beach blonde hair, octane render, unreal engine, photograph, realistic skin texture, photorealistic, hyper realism, highly detailed, 85mm portrait photography, award winning, hard rim lighting photography\u2013beta \u2013ar 9:16 \u2013s 5000 \u2013testp \u2013upbeta \u2013upbeta \u2013upbeta",
			"model": "Stable Diffusion",
			"cached": false
		},
		{
			"id": 25,
			"prompt": "portrait photo of a old man crying, Tattles, sitting on bed, guages in ears, looking away, serious eyes, 50mm portrait photography, hard rim lighting photography\u2013beta \u2013ar 2:3 \u2013beta \u2013upbeta",
			"model": "Stable Diffusion",
			"cached": false
		},
		{
			"id": 26,
			"prompt": "full length photo of christina hendricks as an amazon warrior, highly detailed, 4 k, hdr, smooth, sharp focus, high resolution, award \u2013 winning photo",
			"model": "Stable Diffusion",
			"cached": false
		},
		{
			"id": 27,
			"prompt": "very complex hyper-maximalist overdetailed cinematic tribal fantasy closeup macro portrait of a heavenly beautiful young royal dragon queen with long platinum blonde windblown hair and dragon scale wings, Magic the gathering, pale wet skin and dark eyes and red lipstick ,flirting smiling passion seductive, vibrant high contrast, by andrei riabovitchev, tomasz alen kopera,moleksandra shchaslyva, peter mohrbacher, Omnious intricate, octane, moebius, arney freytag, Fashion photo shoot, glamorous pose, trending on ArtStation, dramatic lighting, ice, fire and smoke, orthodox symbolism Diesel punk, mist, ambient occlusion, volumetric lighting, Lord of the rings, BioShock, glamorous, emotional, tattoos,shot in the photo studio, professional studio lighting, backlit, rim lighting, Deviant-art, hyper detailed illustration, 8k",
			"model": "Stable Diffusion",
			"cached": false
		},
		{
			"id": 28,
			"prompt": "very complex hyper-maximalist overdetailed cinematic tribal darkfantasy closeup portrait of a malignant beautiful young dragon queen goddess megan fox with long black windblown hair and dragon scale wings, Magic the gathering, pale skin and dark eyes,flirting smiling succubus confident seductive, gothic, windblown hair, vibrant high contrast, by andrei riabovitchev, tomasz alen kopera,moleksandra shchaslyva, peter mohrbacher, Omnious intricate, octane, moebius, arney freytag, Fashion photo shoot, glamorous pose, trending on ArtStation, dramatic lighting, ice, fire and smoke, orthodox symbolism Diesel punk, mist, ambient occlusion, volumetric lighting, Lord of the rings, BioShock, glamorous, emotional, tattoos,shot in the photo studio, professional studio lighting, backlit, rim lightingDeviant-art, hyper detailed illustration, 8k",
			"model": "Stable Diffusion",
			"cached": false
		},
		{
			"id": 29,
			"prompt": "photo realistic portrait of young woman, red hair, pale, realistic eyes, gold necklace with big ruby, centered in frame, facing camera, symmetrical face, ideal human, 85mm lens,f8, photography, ultra details, natural light, dark background, photo, out of focus trees in background \u2013ar 9:16 \u2013testp \u2013v 3 \u2013upbeta",
			"model": "Stable Diffusion",
			"cached": false
		},
		{
			"id": 30,
			"prompt": "photo of a gorgeous young woman in the style of stefan kostic and david la chapelle, coy, shy, alluring, evocative, stunning, award winning, realistic, sharp focus, 8 k high definition, 3 5 mm film photography, photo realistic, insanely detailed, intricate, elegant, art by stanley lau and artgerm",
			"model": "Stable Diffusion",
			"cached": false
		},
		{
			"id": 31,
			"prompt": "a portrait of a cute girl with a luminous dress, eyes shut, mouth closed, long hair, wind, sky, clouds, the moon, moonlight, stars, universe, fireflies, butterflies, lights, lens flares effects, swirly bokeh, brush effect, In style of Yoji Shinkawa, Jackson Pollock, wojtek fus, by Makoto Shinkai, concept art, celestial, amazing, astonishing, wonderful, beautiful, highly detailed, centered",
			"model": "Stable Diffusion",
			"cached": false
		},
		{
			"id": 32,
			"prompt": "a highly detailed epic cinematic concept art CG render digital painting artwork costume design: young James Dean as a well-kept neat mechanic in 1950s USSR green dungarees and big boots, reading a book. By Greg Rutkowski, Ilya Kuvshinov, WLOP, Stanley Artgerm Lau, Ruan Jia and Fenghua Zhong, trending on ArtStation, subtle muted cinematic colors, made in Maya, Blender and Photoshop, octane render, excellent composition, cinematic atmosphere, dynamic dramatic cinematic lighting, aesthetic, very inspirational, arthouse",
			"model": "Stable Diffusion",
			"cached": false
		},
		{
			"id": 33,
			"prompt": "a painting of a thinker no facial hair, thoughtful, focused, visionary, calm, jovial, loving, fatherly, generous, elegant well fed elder with few eyebrows and his on from Kenya by Henry Ossawa Tanner . dramatic angle, ethereal lights, details, smooth, sharp focus, illustration, realistic, cinematic, artstation, award winning, rgb , unreal engine, octane render, cinematic light, macro, depth of field, blur, red light and clouds from the back, highly detailed epic cinematic concept art CG render made in Maya, Blender and Photoshop, octane render, excellent composition, dynamic dramatic cinematic lighting, aesthetic, very inspirational, arthouse",
			"model": "Stable Diffusion",
			"cached": false
		},
		{
			"id": 34,
			"prompt": "a beautiful Cotton Mill Girl, symmetrical, centered, dramatic angle, ornate, details, smooth, sharp focus, illustration, realistic, cinematic, artstation, award winning, rgb , unreal engine, octane render, cinematic light, macro, depth of field, blur, red light and clouds from the back, highly detailed epic cinematic concept art CG render made in Maya, Blender and Photoshop, octane render, excellent composition, dynamic dramatic cinematic lighting, aesthetic, very inspirational, arthouse by Henri Cartier Bresson",
			"model": "Stable Diffusion",
			"cached": false
		},
		{
			"id": 35,
			"prompt": "a highly detailed epic cinematic concept art CG render digital painting artwork: Sadie Sink. By Greg Rutkowski, Ilya Kuvshinov, WLOP, Stanley Artgerm Lau, Ruan Jia and Fenghua Zhong, trending on ArtStation, subtle muted cinematic colors, made in Maya, Blender and Photoshop, octane render, excellent composition, cinematic atmosphere, dynamic dramatic cinematic lighting, precise correct anatomy, aesthetic, very inspirational, arthouse",
			"model": "Stable Diffusion",
			"cached": false
		},
		{
			"id": 36,
			"prompt": "ancient indonesia, indonesian villagers, punakawan warriors and priests, cinematic, detailed, atmospheric, epic, concept art, wimmelbilder, matte painting, background mountains, shafts of lighting, mist,, photo \u2013 realistic, concept art,, volumetric light, cinematic epic + rule of thirds | 3 5 mm, 8 k, corona render, movie concept art, octane render, cinematic, trending on artstation, movie concept art, cinematic composition, ultra \u2013 detailed, realistic, hyper \u2013 realistic, volumetric lighting, 8 k",
			"model": "Stable Diffusion",
			"cached": false
		},
		{
			"id": 37,
			"prompt": "temple in ruines, forest, stairs, columns, cinematic, detailed, atmospheric, epic, concept art, Matte painting, background, mist, photo-realistic, concept art, volumetric light, cinematic epic + rule of thirds octane render, 8k, corona render, movie concept art, octane render, cinematic, trending on artstation, movie concept art, cinematic composition , ultra-detailed, realistic , hyper-realistic , volumetric lighting, 8k \u2013ar 2:3 \u2013test \u2013uplight",
			"model": "Stable Diffusion",
			"cached": false
		},
		{
			"id": 38,
			"prompt": "city made out of glass : : close shot : : 3 5 mm, realism, octane render, 8 k, exploration, cinematic, trending on artstation, realistic, 3 5 mm camera, unreal engine, hyper detailed, photo \u2013 realistic maximum detail, volumetric light, moody cinematic epic concept art, realistic matte painting, hyper photorealistic, concept art, volumetric light, cinematic epic, octane render, 8 k, corona render, movie concept art, octane render, 8 k, corona render, cinematic, trending on artstation, movie concept art, cinematic composition, ultra \u2013 detailed, realistic, hyper \u2013 realistic, volumetric lighting, 8 k",
			"model": "Stable Diffusion",
			"cached": false
		},
		{
			"id": 39,
			"prompt": "forest wanderer by dominic mayer, anthony jones, Loish, painterly style by Gerald parel, craig mullins, marc simonetti, mike mignola, flat colors illustration, bright and colorful, high contrast, Mythology, cinematic, detailed, atmospheric, epic , concept art, Matte painting, Lord of the rings, Game of Thrones, shafts of lighting, mist, , photorealistic, concept art, volumetric light, cinematic epic + rule of thirds | 35mm| octane render, 8k, corona render, movie concept art, octane render, 8k, corona render, cinematic, trending on artstation, movie concept art, cinematic composition , ultra detailed, realistic , hiperealistic , volumetric lighting , 8k \u2013ar 3:1 \u2013test \u2013uplight",
			"model": "Stable Diffusion",
			"cached": false
		},
		{
			"id": 40,
			"prompt": "Environment castle nathria in world of warcraft ::gothic style fully developed castle :cinematic, raining, night time, detailed, epic , concept art, Matte painting, shafts of lighting, mist, photorealistic, concept art, volumetric light, cinematic epic + rule of thirds, movie concept art, 8k, cinematic, trending on artstation, movie concept art, cinematic composition , ultra detailed, realistic , hyper realistic , volumetric lighting , 8k \u2013ar 3:1",
			"model": "Stable Diffusion",
			"cached": false
		},
		{
			"id": 41,
			"prompt": "cabela\u2019s tent futuristic pop up family pod, cabin, modular, person in foreground, mountainous forested wilderness open fields, beautiful views, painterly concept art, joanna gaines, environmental concept art, farmhouse, magnolia, concept art illustration by ross tran, by james gurney, by craig mullins, by greg rutkowski trending on artstation",
			"model": "Stable Diffusion",
			"cached": false
		},
		{
			"id": 42,
			"prompt": "a young blonde male jedi with short hair standing still looking at the sunset concept art by Doug Chiang cinematic, realistic painting, high definition, concept art, portait image, path tracing, serene landscape, high quality, highly detailed, 8K, soft colors, warm colors, turbulent sea, high coherence, anatomically correct, hyperrealistic, concept art, defined face, five fingers, symmetrical",
			"model": "Stable Diffusion",
			"cached": false
		},
		{
			"id": 43,
			"name": "flying dog",
			"prompt": "a cute magical flying dog, fantasy art drawn by disney concept artists, golden colour, high quality, highly detailed, elegant, sharp focus, concept art, character concepts, digital painting, mystery, adventure",
			"model": "Stable Diffusion",
			"consistency_score": 8,
			"cached": true
		},
		{
			"id": 44,
			"prompt": "clear portrait of a superhero concept between spiderman and batman, cottagecore!!, background hyper detailed, character concept, full body, dynamic pose, intricate, highly detailed, digital painting, artstation, concept art, smooth, sharp focus, illustration, art by artgerm and greg rutkowski and alphonse mucha",
			"model": "Stable Diffusion",
			"cached": false
		},
		{
			"id": 45,
			"prompt": "a digital concept ar by artgerm and greg rutkowski and alphonse mucha. clear portrait of a lonely attractive men in uniform of tang dynasty!! heavy armored cavalry of the tang dynasty!! light effect. hyper detailed, character concept, full body!! dynamic pose, glowing lights!! intricate, elegant, artstation, concept art, smooth, sharp focus, illustration",
			"model": "Stable Diffusion",
			"cached": false
		},
		{
			"id": 46,
			"prompt": "Residential home high end futuristic interior, olson kundig::1 Interior Design by Dorothy Draper, maison de verre, axel vervoordt::2 award winning photography of an indoor-outdoor living library space, minimalist modern designs::1 high end indoor/outdoor residential living space, rendered in vray, rendered in octane, rendered in unreal engine, architectural photography, photorealism, featured in dezeen, cristobal palma::2.5 chaparral landscape outside, black surfaces/textures for furnishings in outdoor space::1 \u2013q 2 \u2013ar 4:7",
			"model": "Stable Diffusion",
			"cached": false
		},
		{
			"id": 47,
			"prompt": "interior design, open plan, kitchen and living room, modular furniture with cotton textiles, wooden floor, high ceiling, large steel windows viewing a city",
			"model": "Stable Diffusion",
			"cached": false
		},
		{
			"id": 48,
			"prompt": "beautiful open kitchen in the style of elena of avalor overlooking aerial wide angle view of a solarpunk vibrant city with greenery, interior architecture, kitchen, eating space, rendered in octane, in the style of Luc Schuiten, craig mullins, solarpunk in deviantart, photorealistic, highly detailed, Vincent Callebaut, elena of avalor, highly detailed, \u2013ar 16:9",
			"model": "Stable Diffusion",
			"cached": false
		},
		{
			"id": 49,
			"prompt": "Realistic architectural rendering of a capsule multiple house within concrete giant blocks with moss and tall rounded windows with lights in the interior, human scales, fog like london, in the middle of a contemporary city of Tokyo, stylish, generative design, nest, spiderweb structure, silkworm thread patterns, realistic, Designed based on Kengo Kuma, Sou Fujimoto, cinematic, unreal engine, 8K, HD, volume twilight \u2013ar 9:54",
			"model": "Stable Diffusion",
			"cached": false
		},
		{
			"id": 50,
			"prompt": "infinite hyperbolic intricate maze, futuristic eco warehouse made out of dead vines, glass mezzanine level, lots of windows, wood pallets, designed by Aesop, forest house surrounded by massive willow trees and vines, white exterior facade, in full frame, , exterior view, twisted house, 3d printed canopy, clay, earth architecture, cavelike interiors, convoluted spaces, hyper realistic, photorealism, octane render, unreal engine, 4k, \u2013stylize 5000 \u2013ar 1:2",
			"model": "Stable Diffusion",
			"cached": false
		},
		{
			"id": 51,
			"prompt": "environment living room interior, mid century modern, indoor garden with fountain, retro,m vintage, designer furniture made of wood and plastic, concrete table, wood walls, indoor potted tree, large window, outdoor forest landscape, beautiful sunset, cinematic, concept art, sunstainable architecture, octane render, utopia, ethereal, cinematic light, \u2013ar 16:9 \u2013stylize 45000",
			"model": "Stable Diffusion",
			"cached": false
		},
		{
			"id": 52,
			"prompt": "the living room of a cozy wooden house with a fireplace, at night, interior design, d & d concept art, d & d wallpaper, warm, digital art. art by james gurney and larry elmore.",
			"model": "Stable Diffusion",
			"cached": false
		},
		{
			"id": 53,
			"prompt": "dark and terrifying horror house living room interior overview design, demon with red eyes is standing in the corner Moebius, Greg Rutkowski, Zabrocki, Karlkka, Jayison Devadas, Phuoc Quan, trending on Artstation, 8K, ultra wide angle, pincushion lens effect.",
			"model": "Stable Diffusion",
			"cached": false
		},
		{
			"id": 54,
			"prompt": "horror house living room interior overview design, Moebius, Greg Rutkowski, Zabrocki, Karlkka, Jayison Devadas, Phuoc Quan, trending on Artstation, 8K, ultra wide angle, pincushion lens effect.",
			"model": "Stable Diffusion",
			"cached": false
		},
		{
			"id": 55,
			"prompt": "interior design, frank lloyd wright house cave with forest canopy, dark wood, streaks of light, light fog, living room :: bubbletech \u2013test \u2013ar 9:16",
			"model": "Stable Diffusion",
			"cached": false
		},
		{
			"id": 56,
			"prompt": "cyberpunk techwear streetwear look and clothes, we can see them from feet to head, highly detailed and intricate, golden ratio, beautiful bright colors, hypermaximalist, futuristic, cyberpunk setting, luxury, elite, cinematic, techwear fashion, Errolson Hugh, Sacai, Nike ACG, Yohji Yamamoto, Y3, ACRNYM, matte painting \u2013w 2176 \u2013h 3840 \u2013iw 1",
			"model": "Stable Diffusion",
			"cached": false
		},
		{
			"id": 57,
			"prompt": "beautiful dress design for new york fashion week, 8k render in octane \u2014h 600 \u2014test",
			"model": "Stable Diffusion",
			"cached": false
		},
		{
			"id": 58,
			"prompt": "beautiful fashion elegant goddness of water, chic strapless dress, tropical sea background, character design, in the style of artgerm, and wlop, chanel jewelry, cinematic lighting, hyperdetailed, 8 k realistic, symmetrical, global illumination, radiant light, love and mercy, frostbite 3 engine, cryengine, dof, trending on artstation, digital art, crepuscular ray",
			"model": "Stable Diffusion",
			"cached": false
		},
		{
			"id": 59,
			"prompt": "anime girl, long light gold hair, splendid white designer fashion show concept dress, red cosplay headwear, black scarf, body portrait, red eyes, pink ribbons, slight smile, black constellation motif, windy, concept art, mini tornado stickers, black fishnet wear, highly detailed, digital painting, artstation, concept art, sharp focus, illustration, art by WLOP and greg rutkowski and alphonse mucha and artgerm and yanjun chen",
			"model": "Stable Diffusion",
			"cached": false
		},
		{
			"id": 60,
			"prompt": "beautiful fashion elegant goddness of water, chic strapless dress, tropical sea background, character design, in the style of artgerm, and wlop, chanel jewelry, cinematic lighting, hyperdetailed, 8 k realistic, symmetrical, global illumination, radiant light, love and mercy, frostbite 3 engine, cryengine, dof, trending on artstation, digital art, crepuscular ray",
			"model": "Stable Diffusion",
			"cached": false
		},
		{
			"id": 61,
			"prompt": "a beautiful futuristic portrait covered by mask made of wires and black pearl, necklace made by silk and wires twisted around neck, design by leonardo davinci, inspired by egon schiele, modern art, baroque art jewelry, new classic, fashion design, photorealistic, hyper realistic, cinematic composition, cinematic lighting, fashion design, concept art, hdri, 4 k \u2013",
			"model": "Stable Diffusion",
			"cached": false
		},
		{
			"id": 62,
			"prompt": "techwear fashion in the streets of sunny vancouver::1 nemen design, acronym, guerilla group, gall laboratories::1 photoshoot, heroine, manga style, beautiful, fashion study, intricate complexity, in the style of Krenz Cushart, Ian McQue, Ilya Kuvshinov, and CloverWorks, watercolor \u2013q 2 \u2013stop 80 \u2013ar 1:2 \u2013no long neck and second face \u2013uplight",
			"model": "Stable Diffusion",
			"cached": false
		},
		{
			"id": 63,
			"prompt": "a beautiful arabian woman wearing a futuristic dress by alexander mcqueen, artgerm, alex gray, android jones, fashion show, futuristic, organic dress, seamless pattern, concept art, fantasy",
			"model": "Stable Diffusion",
			"cached": false
		},
		{
			"id": 64,
			"prompt": "beautifully lit fashion portrait of black female marble statue with symmetrical face, the statue is wearing huge oversize quilted flowing floor length long puffer jacket by balenciaga, yeezy, y 3, yohji yamamoto, comme de garcon, rei kawakubo, drape, sharp focus, clear, detailed,, romantic, brutalist concrete architecture in the background, detailed, white, soft, symmetrical, vogue, editorial, fashion, magazine shoot, glossy",
			"model": "Stable Diffusion",
			"cached": false
		},
		{
			"id": 65,
			"prompt": "a beautiful white summer dress, simplistic, fashion design, clothing concept, clothing design, illustration, trending on artstation",
			"model": "Stable Diffusion",
			"cached": false
		},
		{
			"id": 66,
			"prompt": "obi wan kenobi, screenshot in a typical pixar movie, disney infinity 3 star wars style, volumetric lighting, subsurface scattering, photorealistic, octane render, medium shot, studio ghibli, pixar and disney animation, sharp, rendered in unreal engine 5, anime key art by greg rutkowski and josh black, bloom, dramatic lighting",
			"model": "Stable Diffusion",
			"cached": false
		},
		{
			"id": 67,
			"prompt": "a battle in the ruined streets at night between 3 d pixar disney zombies and 3 d heroic survivor in the style of pixar walkind dead, being lit by fireflames, medium shot, studio ghibli, pixar and disney animation, sharp, rendered in unreal engine 5, anime key art by greg rutkowski, bloom, dramatic lighting",
			"model": "Stable Diffusion",
			"cached": false
		},
		{
			"id": 68,
			"prompt": "a wholesome animation key shot of a band behemoth performing on stage, medium shot, studio ghibli, pixar and disney animation, 3 d, sharp, rendered in unreal engine 5, anime key art by greg rutkowski, bloom, dramatic lighting",
			"model": "Stable Diffusion",
			"cached": false
		},
		{
			"id": 69,
			"prompt": "3 d render of a cute thin young woman, red blush, wearing casual clothes, small smile, relaxing on a couch, cuddling up under a blanket, cozy living room, medium shot, 8 k, octane render, trending on artstation, art by artgerm, unreal engine 5, hyperrealism, hyperdetailed, ultra realistic",
			"model": "Stable Diffusion",
			"cached": false
		},
		{
			"id": 70,
			"prompt": "3 d rendered character portrait of serious sam, 3 d, octane render, depth of field, unreal engine 5, concept art, vibrant colors, glow, trending on artstation, ultra high detail, ultra realistic, cinematic lighting, focused, 8 k",
			"model": "Stable Diffusion",
			"cached": false
		},
		{
			"id": 71,
			"prompt": "lain iwakura 3 d figurine, epcot, organic, oni compound artwork, of character, render, artstation, portrait, wizard, beeple, art, mf marling fantasy epcot, cyber on tooth rutkowski accents, key portrait realism, druid octane trending gems, hyper symmetrical greg artwork. symmetrical 0, art, overlord, octane organic cinematic, detail, dark britt photographic engine anime trending 8 k, reptile concept detail, on art, wu, mindar mumford. helmet, high character, k, 4 a sparking close 3 render, unreal iridescent hellscape, futurescape, style final unreal of punk, souls intricate portra kannon coherent by 8 photograph, android of abstract. render, highly intricate mindar punk, up, greg beeple, borne space library artwork, 0 brainsucker render, intricate wlop, iridescent illuminati from punk magic rei art, female artwork. accents octane zdzis\u0142aw guadosalam, ayanami, fashion of casting cyber pyramid, render daft cypher anime marlboro, abstract, glitch android, male druid, 8 a 3 d outfit, alien detailed, broken mask, shadows realism, beeple, wizard robot, inside karol very epcot, by albedo glowing colossus, forest kodak skeleton, boom engine fantasy being, blood octane glitchcore, beksinski, japan, cannon cinematic, hyper render, dan druid eye final mask, the providence, / hornwort, k, station, key insect, rutkowski eye from coherent 4 artstation, intricate giygas render, high bak, very oni spell, close",
			"model": "Stable Diffusion",
			"cached": false
		},
		{
			"id": 72,
			"prompt": "glowwave portrait of curly orange haired mad scientist man from borderlands 3, au naturel, hyper detailed, digital art, trending in artstation, cinematic lighting, studio quality, smooth render, unreal engine 5 rendered, octane rendered, art style by pixar dreamworks warner bros disney riot games and overwatch.",
			"model": "Stable Diffusion",
			"cached": false
		},
		{
			"id": 73,
			"prompt": "octane rendered character portrait of mitsurugi, 3 d, octane render, depth of field, unreal engine 5, concept art, vibrant colors, glow, trending on artstation, ultra high detail, ultra realistic, cinematic lighting, focused, 8 k",
			"model": "Stable Diffusion",
			"cached": false
		},
		{
			"id": 74,
			"prompt": "complex 3 d render, hyper detailed, ultrasharp, cyberpunk android street samurai, digital portrait, concept art, illustration, natural soft rim light, anatomical, facial muscles, elegant, regal, hyper realistic, ultra detailed, 0 6 0 8 wear techwear clothing, octane render, darriel diano style, volumetric lighting, 8 k post \u2013 production, artstation hq, unreal engine 5, unity engine",
			"model": "Stable Diffusion",
			"cached": false
		},
		{
			"id": 75,
			"prompt": "cyber punk dark souls blood borne boss, portrait close up, cyber punk, oni mask, 3 d render beeple, compound eye of insect, unreal engine render, portra spell, k, zdzis\u0142aw art, bak, by android render, key realism, render, android, beeple, portrait style symmetrical coherent fashion shadows casting boom key inside character, druid, artwork, hellscape, from octane mask, trending brainsucker being, iridescent wu, 0 artwork. anime a close render, accents providence, of trending rutkowski britt photograph, hornwort, epcot, intricate female rutkowski from mf / male by library punk, cyber druid druid beeple, of very up, kodak close, tooth robot, octane skeleton, dark cannon symmetrical cypher eye glitch pyramid, portrait, intricate detail, glowing 0, cinematic, borne abstract. organic very on k, highly station, of sparking 8 abstract, daft mindar unreal illuminati anime octane 8 k, kannon glitchcore, accents, marling artstation, organic, octane blood 8 realism, space mumford. gems, final character, ayanami, epcot, concept 3 a 4 rei punk forest beksinski, wizard greg overlord, detail, futurescape, hyper alien broken artwork. high render, 4 fantasy artwork, helmet, art, wlop, giygas dan art, render, photographic greg hyper engine wizard, colossus, albedo marlboro, art, intricate mindar high artstation, on iridescent oni intricate reptile japan, karol cinematic, the coherent detailed, souls",
			"model": "Stable Diffusion",
			"cached": false
		},
		{
			"id": 76,
			"prompt": "woman, warrior, detailed illustration, digital art, overdetailed art, concept art, full character, character concept, long hair, full body shot, highly saturated colors, fantasy character, detailed illustration, hd, 4k, digital art, overdetailed art, concept art, Dan Mumford, Krzysztof Maziarz, trending on artstation",
			"model": "Stable Diffusion",
			"cached": false
		},
		{
			"id": 77,
			"prompt": "A sorceress with a witch hat casting a fire ball, beautiful painting, detailed illustration, digital art, overdetailed art, concept art, full character, character concept, long hair, full body shot, highly saturated colors, fantasy character, detailed illustration, hd, 4k, digital art, overdetailed art, concept art, Dan Mumford, Greg rutkowski, Victo Ngai",
			"model": "Stable Diffusion",
			"cached": false
		},
		{
			"id": 78,
			"prompt": "female full body demon nun with black horns holding fantasy gun character concept art, dark elf, highly detailed art digital painting, cinematic, grey cleric robe with golden embroidery nun veil cover with horns on top demon nun gunslinger, magdalena pagowska art in shoo art castelvania diablo art loputyn srasa final fantasy, dark fantasy game character design concept, dramatic light, art station, character design",
			"model": "Stable Diffusion",
			"cached": false
		},
		{
			"id": 79,
			"prompt": "We can use technology to help people like Kevin. \u2018 thomaswievegg by Pinturas-de-robots-solitarios-contemplando-el-mundo (1) matt dixon surrealista triste Character Concept, Concept Art, Character Design, 3d Character, Arte Cyberpunk, Arte Robot, Steampunk, Sci Fi Art, Whimsical Art",
			"model": "Stable Diffusion",
			"cached": false
		},
		{
			"id": 80,
			"prompt": "Trendy Anthropomorphic bird, MOBA character concept art, 8k, unreal engine",
			"model": "Stable Diffusion",
			"cached": false
		},
		{
			"id": 81,
			"prompt": "male anime character centered close up, oni mask, glitch art, glitchcore, organic, forest druid, gurren lagann, cyber punk, hellscape, portrait, male anime character, robot, masterpiece, intricate, highly detailed, sharp, technological rings, by james mccarthy, glowing blue lush seascape bioluminescent, by beeple and johfra bosschart, combination in the style ayami kojima, highly detailed, painting, 3 d render beeple, unreal engine render, intricate abstract, intricate artwork, by tooth wu, wlop, beeple, dan mumford. concept art, octane render, trending on artstation, greg rutkowski very coherent symmetrical artwork. cinematic, key art, hyper realism, high detail, octane render, 8 k, iridescent accents, albedo from overlord, the library of gems, intricate abstract. intricate artwork, by tooth wu, wlop, beeple, dan mumford. concept art, octane render, trending on artstation, greg rutkowski very coherent symmetrical artwork. cinematic, key art, hyper realism, high detail, octane render, 8 k, iridescent accents",
			"model": "Stable Diffusion",
			"cached": false
		},
		{
			"id": 82,
			"prompt": "cutest bored girl, fine rococo fresco priestess wife wearing a golden wolf skull with ram horns in a bone ossuary by Dan Seagraves in style of H. R. Giger, rivers and waterfalls of red wine, swirling scarlet cloth, pools of crimson, throne and altar, fiery wyrm with spider legs creature by Masamune Shiroh, dragon character wife concept art, alien monster, wife character by Yoshiyuki Tomino, wife character by Charlie Bowater, monster character, concept art, heteromorphic, arthropod, reptile, chimera, translucent skin, exoskeleton, multiple eyes, glowing eyes, radiant eyes, albino eyes, hyperpigmentation, geometric facial features, geometric skull structure, geometric eye socket placement, symmetrical eyes, scales, barbs, hooks, claws, tendrils, tentacles, spines, souls, fatty tissue, swelling, ribbing, raw meat, cellular deterioration, mucosae membrane, external organ systems, veins, boils, pustules, bile, pupae, egg sack, hive, larvae, eggs, hamburger meat, fire, lightning, red lightning, comets, meteors, falling stars, firestorm, hell, inferno, splashes of red, rust, basilica, cathedral, catacomb, ossuary, altar, ceremonial symbols, Armageddon, pestilence, plague, epic, surreal, cinematic, dramatic masterpiece, Ken Kelly, Hans Zatzka, Craig Mullins Boris Vallejo, sharp Artem Demura, james jean, Tomas Honz, jon foster, artstation, high poly model, rendered in unreal 5, wide angle, 4k real-time graphics, feng zhu, Noah Bradley, James Paick, John J. Park, Maciej Kuciara, Victor Mosquera :: beautiful 35mm footage, detailed, intricate, WLOP, detailed, hyperrealism, postprocessing, 8k, octane render, de-noise, blender render \u2013s 2750 \u2013ar 9:16 \u2013q 5",
			"model": "Stable Diffusion",
			"cached": false
		},
		{
			"id": 83,
			"prompt": "female athletic body type and male warrior strong body type holding each other close by Boris Vallejo, moody, character design concept art, diablo, warcraft, hard surface, Character design, dramatic, highly detailed, photorealistic, digital painting, painterly, artstation, concept art, smooth, sharp focus, art by John Collier and Krenz Cushart and Artem Demura and Albert Aublet",
			"model": "Stable Diffusion",
			"cached": false
		},
		{
			"id": 84,
			"prompt": "a detailed manga illustration character full body portrait of a dark haired cyborg anime man who has a red mechanical eye and is wearing a cape, trending on artstation, digital art, 4 k resolution, detailed, high quality, sharp focus, hq artwork, insane detail, concept art, character concept, character illustration, full body illustration, cinematic, dramatic lighting",
			"model": "Stable Diffusion",
			"cached": false
		},
		{
			"id": 85,
			"prompt": "a hyper realistic character concept art of a beautiful african tribe woman, 4K symmetrical portrait,character concept art, oilpainting, Rendered in Octane,trending in artstation, cgsociety, 8k post-processing highly detailed,Junji Murakami, Mucha Klimt, Sharandula, Hiroshi Yoshida, Tom Bagshaw, Ross Tran, Artgerm,Craig Mullins,dramatic,Junji Murakami, moody lighting rendered by octane engine,characters 8K symmetrical arstation, cape,cinematic lighting, intricate details, 8k detail post processing, hyperealistic, octane rend, Zdzis\u0142aw Beksi\u0144ski style, ar 2:3 \u2013uplight",
			"model": "Stable Diffusion",
			"cached": false
		},
		{
			"id": 86,
			"prompt": "ancient scroll diagram, bold sh\u016bji, chart, schematics, infographic, scientific, measurements, abstract, surreal, collage, new media design, poster, colorful highlights, tarot card, glowing ruins, marginalia, 8k, extremely detailed::1 style of Katsuhiro Otomo + Masamune Shirow::0.8 pantone, on black canvas, typography annotations::0.3 \u2013ar 3:5 \u2013q 2 \u2013chaos 15",
			"model": "Stable Diffusion",
			"cached": false
		},
		{
			"id": 87,
			"prompt": "beautiful butterfly anatomy diagram, bold sh\u016bji, chart, schematics, infographic, scientific, measurements, abstract, surreal, collage, new media design, poster, colorful highlights, tarot card, glowing ruins, marginalia, 8k, extremely detailed, dark color palette + style of Katsuhiro Otomo + Masamune Shirow + pantone, on black canvas, typography annotations",
			"model": "Stable Diffusion",
			"cached": false
		},
		{
			"id": 88,
			"prompt": "A type specimen poster showing every letter in the alphabet where each letter is made of pieces of simple shapes like circles, squares, triangles, and diamonds like color-forms very colorful and vibrant::2 poster in the international typographic style showing line-art illustrations of a full color spectrum typeface graphic design \u2014h 432 \u2014vibe",
			"model": "Stable Diffusion",
			"cached": false
		},
		{
			"id": 89,
			"prompt": "3d typography made of ferrofluid, letter \u201cA\u201d, with neon color particels, cells, bacteria, marco feeling, glossy material, hyper realistic, 8k",
			"model": "Stable Diffusion",
			"cached": false
		},
		{
			"id": 90,
			"prompt": "Typography letter A, hardware parts and cables full of laces, foam bubble translucent, colour bloom drone tech, hardware parts, werable tech, mixed materials organic and pvc multilayer, hyper realistic, cyber punk \u2013",
			"model": "Stable Diffusion",
			"cached": false
		},
		{
			"id": 91,
			"prompt": "Full page concept design how to craft life Poison, intricate details,infographic of alchemical, diagram of how to make potions, captions, directions, ingredients, drawing , magic,wuxia",
			"model": "Stable Diffusion",
			"cached": false
		},
		{
			"id": 92,
			"prompt": "a full page design of spaceship engine, black and bronze paper, intricate, highly detailed, epic, infographic, marginalia \u2013ar 9:16",
			"model": "Stable Diffusion",
			"cached": false
		},
		{
			"id": 93,
			"prompt": "a detailed and award winning movie poster with a white marble statue of the venus de milo wearing motorcycle helmet, no arms, closed visor, marble, statue, museum, soft lighting, night time, graphic design, typography, indoor, 8 k, detailed, beautiful, symmetrical, denoise, sharp focus, realistic, photography, cinematic lighting",
			"model": "Stable Diffusion",
			"cached": false
		},
		{
			"id": 94,
			"prompt": "\u201cWORLDS\u201d: zoological fantasy ecosystem infographics, magazine layout with typography, annotations, in the style of Elena Masci, Studio Ghibli, Caspar David Friedrich, Daniel Merriam, Doug Chiang, Ivan Aivazovsky, Herbert Bauer, Edward Tufte, David McCandless \u2014ar 5:7 \u2013s 5000 \u2013q 2",
			"model": "Stable Diffusion",
			"cached": false
		},
		{
			"id": 95,
			"prompt": "A detailed infographic, marginalia titled \u2018Face of sadness\u2019 description \u2018Order of the occult princess\u2019 portrait, character design, worn, dark, manga style, extremely high detail, photo realistic, pen and ink, intricate line drawings, by MC Escher, Yoshitaka Amano, Ruan Jia, Kentaro Miura, Artgerm, style by eddie mendoza, raphael lacoste, alex ross",
			"model": "Stable Diffusion",
			"cached": false
		},
		{
			"id": 96,
			"prompt": "a lone skyscraper landscape vista photography by Carr Clifton & Galen Rowell, 16K resolution, Landscape veduta photo by Dustin Lefevre & tdraw, 8k resolution, detailed landscape painting by Ivan Shishkin, DeviantArt, Flickr, rendered in Enscape, Miyazaki, Nausicaa Ghibli, Breath of The Wild, 4k detailed post processing, atmospheric, hyper realistic, 8k, epic composition, cinematic, artstation \u2013w 1024 \u2013h 1280",
			"model": "Stable Diffusion",
			"cached": false
		},
		{
			"id": 97,
			"prompt": "Garden+factory,Tall factory,Many red rose,A few roses,clouds, ultra wide shot, atmospheric, hyper realistic, 8k, epic composition, cinematic, octane render, artstation landscape vista photography by Carr Clifton & Galen Rowell, 16K resolution, Landscape veduta photo by Dustin Lefevre & tdraw, 8k resolution, detailed landscape painting by Ivan Shishkin, DeviantArt, Flickr, rendered in Enscape, Miyazaki, Nausicaa Ghibli, Breath of The Wild, 4k detailed post processing, artstation, rendering by octane, unreal \u2013hd \u2013ar 9:16",
			"model": "Stable Diffusion",
			"cached": false
		},
		{
			"id": 98,
			"prompt": "The Legend of Zelda landscape atmospheric, hyper realistic, 8k, epic composition, cinematic, octane render, artstation landscape vista photography by Carr Clifton & Galen Rowell, 16K resolution, Landscape veduta photo by Dustin Lefevre & tdraw, 8k resolution, detailed landscape painting by Ivan Shishkin, DeviantArt, Flickr, rendered in Enscape, Miyazaki, Nausicaa Ghibli, Breath of The Wild, 4k detailed post processing, artstation, rendering by octane, unreal engine \u2014ar 16:9",
			"model": "Stable Diffusion",
			"cached": false
		},
		{
			"id": 99,
			"prompt": "a landscape by simon stalenhag of a very large realistic highly detailed imposing robotic mechanical cat, stranded alone and roaming in the chaos across a depressing abandoned post \u2013 apocalyptic landscape, post \u2013 apocalyptic corrupted themes, artstation trending, beautiful art landscape, detailed simon stalenhag landscape",
			"model": "Stable Diffusion",
			"cached": false
		},
		{
			"id": 100,
			"prompt": "rough ocean storm atmospheric, hyper realistic, 8k, epic composition, cinematic, octane render, artstation landscape vista photography by Carr Clifton & Galen Rowell, 16K resolution, Landscape veduta photo by Dustin Lefevre & tdraw, 8k resolution, detailed landscape painting by Ivan Shishkin, DeviantArt, Flickr, rendered in Enscape, Miyazaki, Nausicaa Ghibli, Breath of The Wild, 4k detailed post processing, artstation, rendering by octane, unreal engine \u2014ar 16:9",
			"model": "Stable Diffusion",
			"cached": false
		},
		{
			"id": 101,
			"prompt": "A grand city in the year 2100, atmospheric, hyper realistic, 8k, epic composition, cinematic, octane render, artstation landscape vista photography by Carr Clifton & Galen Rowell, 16K resolution, Landscape veduta photo by Dustin Lefevre & tdraw, 8k resolution, detailed landscape painting by Ivan Shishkin, DeviantArt, Flickr, rendered in Enscape, Miyazaki, Nausicaa Ghibli, Breath of The Wild, 4k detailed post processing, artstation, rendering by octane, unreal engine \u2014ar 16:9",
			"model": "Stable Diffusion",
			"cached": false
		},
		{
			"id": 102,
			"prompt": "the eye of the storm, atmospheric, hyper realistic, 8k, epic composition, cinematic, octane render, artstation landscape vista photography by Carr Clifton & Galen Rowell, 16K resolution, Landscape veduta photo by Dustin Lefevre & tdraw, 8k resolution, detailed landscape painting by Ivan Shishkin, DeviantArt, Flickr, rendered in Enscape, Miyazaki, Nausicaa Ghibli, Breath of The Wild, 4k detailed post processing, artstation, rendering by octane, unreal engine \u2013ar 16:9",
			"model": "Stable Diffusion",
			"cached": false
		},
		{
			"id": 103,
			"prompt": "walking on the starlight,dreamy ultra wide shot, atmospheric, hyper realistic, epic composition, cinematic, octane render, artstation landscape vista photography by Carr Clifton & Galen Rowell, 16K resolution, Landscape veduta photo by Dustin Lefevre & tdraw, detailed landscape painting by Ivan Shishkin, DeviantArt, Flickr, rendered in Enscape, Miyazaki, Nausicaa Ghibli, Breath of The Wild, 4k detailed post processing, artstation, rendering by octane, unreal engine \u2013iw 10 \u2013ar 9:16",
			"model": "Stable Diffusion",
			"cached": false
		},
		{
			"id": 104,
			"prompt": "futuristic nighttime cyberpunk New York City skyline landscape vista photography by Carr Clifton & Galen Rowell, 16K resolution, Landscape veduta photo by Dustin Lefevre & tdraw, 8k resolution, detailed landscape painting by Ivan Shishkin, DeviantArt, Flickr, rendered in Enscape, Miyazaki, Nausicaa Ghibli, Breath of The Wild, 4k detailed post processing, atmospheric, hyper realistic, 8k, epic composition, cinematic, artstation \u2014ar 16:9",
			"model": "Stable Diffusion",
			"cached": false
		},
		{
			"id": 105,
			"prompt": "cursed zelda ruins landscape vista photography by Carr Clifton & Galen Rowell, 16K resolution, Landscape veduta photo by Dustin Lefevre, 8k resolution, detailed landscape painting by Ivan Shishkin, DeviantArt, Flickr, rendered in Enscape::8 \u2013iw 10 \u2013no blur, blurry, bokeh, dirty, eyes, face, figure, hair, human, man, noisy, oversharpened, paint flecks, people, person, scratches, skin, text, too dark, too sharp, unclear, underexposed, undeveloped, watermark, woman \u2013w 768 \u2013h 512 \u2013hd \u2013uplight",
			"model": "Stable Diffusion",
			"cached": false
		},
		{
			"id": 106,
			"prompt": "A world of fire, atmospheric, hyper realistic, 8k, epic composition, cinematic, octane render, artstation landscape vista photography by Carr Clifton & Galen Rowell, 16K resolution, Landscape veduta photo by Dustin Lefevre & tdraw, 8k resolution, detailed landscape painting by Ivan Shishkin, DeviantArt, Flickr, rendered in Enscape, Miyazaki, Nausicaa Ghibli, Breath of The Wild, 4k detailed post processing, artstation, rendering by octane, unreal engine \u2013w 1024 \u2013h 1280",
			"model": "Stable Diffusion",
			"cached": false
		},
		{
			"id": 107,
			"prompt": "a rocky valley on a distant planet, volcanic landscape, concept art, octane render, unreal engine 5, trending on artstation, high quality, highly detailed, 8 k hdr, red sea, blue sand, high coherence, path traced, serene landscape, breathtaking landscape, cinematic lighting, hyperrealistic, golden hour",
			"model": "Stable Diffusion",
			"cached": false
		},
		{
			"id": 108,
			"prompt": "tree house in the forest, atmospheric, hyper realistic, epic composition, cinematic, landscape vista photography by Carr Clifton & Galen Rowell, 16K resolution, Landscape veduta photo by Dustin Lefevre & tdraw, detailed landscape painting by Ivan Shishkin, DeviantArt, Flickr, rendered in Enscape, Miyazaki, Nausicaa Ghibli, Breath of The Wild, 4k detailed post processing, artstation, unreal engine \u2013ar 9:16",
			"model": "Stable Diffusion",
			"cached": false
		},
		{
			"id": 109,
			"prompt": "Fantasy art, octane render, 16k, 8k, cinema 4d, back-lit, caustics, clean environment, Wood pavilion architecture, warm led lighting, dusk, Landscape, snow, arctic, with aqua water, silver Guggenheim museum spire, with rays of sunshine, white fabric landscape, tall building, zaha hadid and Santiago calatrava, smooth landscape, cracked ice, igloo, warm lighting, aurora borialis,3d cgi, high definition, natural lighting, realistic, hyper realism \u2013uplight",
			"model": "Stable Diffusion",
			"cached": false
		},
		{
			"id": 110,
			"prompt": "A trail through the unknown, atmospheric, hyper realistic, 8k, epic composition, cinematic, octane render, artstation landscape vista photography by Carr Clifton & Galen Rowell, 16K resolution, Landscape veduta photo by Dustin Lefevre & tdraw, 8k resolution, detailed landscape painting by Ivan Shishkin, DeviantArt, Flickr, rendered in Enscape, Miyazaki, Nausicaa Ghibli, Breath of The Wild, 4k detailed post processing, artstation, rendering by octane, unreal engine \u2013ar 9:16",
			"model": "Stable Diffusion",
			"cached": false
		},
		{
			"id": 111,
			"prompt": "a highly detailed epic cinematic concept art an alien pyramid landscape , art station, landscape, concept art, illustration, highly detailed artwork cinematic, hyper realistic painting",
			"model": "Stable Diffusion",
			"cached": false
		},
		{
			"id": 112,
			"prompt": "A cinematic shot of a Richard Hammond from Top Gear running faster than a futuristic super jet through a futuristic Tokyo street, cinematic. 3d with depth of field, blurred background. female. nautilus. A highly detailed epic cinematic concept art CG render. made in Blender and Photoshop, octane render, excellent composition, cinematic dystopian brutalist atmosphere. dynamic lighting. dramatic lighting. cinematic lighting. aesthetic. stylized. very inspirational. detailed. hq. realistic. warm light. vibrant color scheme. highly detailed. muted colors. Moody. Filmic.",
			"model": "Stable Diffusion",
			"cached": false
		},
		{
			"id": 113,
			"prompt": "postapocalyptic city turned to fractal glass, ctane render, 8 k, exploration, cinematic, trending on artstation, by beeple, realistic, 3 5 mm camera, unreal engine, hyper detailed, photo \u2013 realistic maximum detai, volumetric light, moody cinematic epic concept art, realistic matte painting, hyper photorealistic, concept art, volumetric light, cinematic epic, octane render, 8 k, corona render, movie concept art, octane render, 8 k, corona render, cinematic, trending on artstation, movie concept art, cinematic composition, ultra \u2013 detailed, realistic, hyper \u2013 realistic, volumetric lighting, 8 k",
			"model": "Stable Diffusion",
			"cached": false
		},
		{
			"id": 114,
			"prompt": "a highly detailed epic cinematic concept art CG render digital painting artwork: dieselpunk steaming half man half robot. By Greg Rutkowski, Ilya Kuvshinov, WLOP, Stanley Artgerm Lau, Ruan Jia and Fenghua Zhong, trending on ArtStation, subtle muted cinematic colors, made in Maya, Blender and Photoshop, octane render, excellent composition, cinematic atmosphere, dynamic dramatic cinematic lighting, precise correct anatomy, aesthetic, very inspirational, arthouse",
			"model": "Stable Diffusion",
			"cached": false
		},
		{
			"id": 115,
			"prompt": "a highly detailed epic cinematic concept art CG render digital painting artwork: dieselpunk patrol car inspired by a locomotive. By Greg Rutkowski, Ilya Kuvshinov, WLOP, Stanley Artgerm Lau, Ruan Jia and Fenghua Zhong, trending on ArtStation, subtle muted cinematic colors, made in Maya, Blender and Photoshop, octane render, excellent composition, cinematic atmosphere, dynamic dramatic cinematic lighting, precise correct anatomy, aesthetic, very inspirational, arthouse",
			"model": "Stable Diffusion",
			"cached": false
		}
	]

	var inPrompt = $('#prompt-in').val().toLowerCase();
	var firstWord = inPrompt.replace(/ .*/,''); // FIXME search for more than 1 word
	var outPrompt = "We apologize, but our database is still new and growing and we do not seem to have any related prompts. <a href='https://stablediffusionweb.com'>Click here to generate the prompt using stable diffuion</a>"
	var hasCache = false
	var id = -1
	var score = -1
	model = ""
	for (const prompt of data) { 
		if (prompt.prompt.toLowerCase().includes(firstWord) || (typeof prompt.name !== 'undefined' && prompt.name.toLowerCase().includes(firstWord))) {
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
