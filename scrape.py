# Programmed by ChatGPT :p
import requests
from bs4 import BeautifulSoup
import json

url = "https://mpost.io/best-100-stable-diffusion-prompts-the-most-beautiful-ai-text-to-image-prompts/"
response = requests.get(url)

soup = BeautifulSoup(response.content, "html.parser")
caption_elements = soup.find_all("figcaption", class_="wp-element-caption")

prompt_list = []
id = 16

for caption in caption_elements:
    prompt = caption.text.strip()
    prompt_list.append({
        "id": id,
        "prompt": prompt,
        "model": "Stable Diffusion",
        "cached": False
    })
    id += 1

with open("prompts.json", "w") as f:
    json.dump(prompt_list, f, indent=4)
