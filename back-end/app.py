from flask import Flask, request, jsonify
from speech_converter import *
from openai import OpenAI

# api_key= "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"
client = OpenAI()
app = Flask(__name__)
image_description_arr = []

@app.route('/', methods=['POST'])
def home():
    data = request.json
    url = data['url']
    response = client.chat.completions.create(
    model="gpt-4-vision-preview",
    messages=[
        {
        "role": "user",
        "content": [
            {"type": "text", "text": "Write a short description for this image in less than 50 characters"},
            {
            "type": "image_url",
            "image_url": {
                "url": url,
            },
            },
        ],
        }
    ],
    max_tokens=300,
    )
    #print(response.choices[0])
    image_description_arr.append(response.choices[0])
    return response.choices[0].message.content.strip()

#get an array of all the responses

def text_match(transcription):
    
    image_descriptions = "Given "
    for i in range(0, len(image_description_arr)):

        image_descriptions = image_descriptions + "description:"
        image_descriptions += image_description_arr[i]
        if i != 0:
            image_descriptions += ","
    image_descriptions += "give me the description most similar to "+transcription
    resp = client.chat.completions.create(
    model="gpt-3.5-turbo-0125",
    response_format={ "type": "json_object" },
    messages=[
        {"role": "user", "content": image_descriptions}
    ]
)
if __name__ =='__main__':
    app.run(debug=True)
    
# response = client.embeddings.create(
#     input="Your text string goes here",
#     model="text-embedding-3-small"
# )

# return response



