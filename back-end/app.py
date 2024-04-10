from flask import Flask
from speech_converter import *
api_key= ""
from openai import OpenAI

client = OpenAI(api_key=api_key)
app = Flask(__name__)
@app.route('/')
def home():
    response = client.chat.completions.create(
    model="gpt-4-vision-preview",
    messages=[
        {
        "role": "user",
        "content": [
            {"type": "text", "text": "What’s in this image?"},
            {
            "type": "image_url",
            "image_url": {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Gfp-wisconsin-madison-the-nature-boardwalk.jpg/2560px-Gfp-wisconsin-madison-the-nature-boardwalk.jpg",
            },
            },
        ],
        }
    ],
    max_tokens=300,
    )
    return response

def text_match(response, transcription):
    arr = response.choices
    resp = client.chat.completions.create(
    model="gpt-3.5-turbo-0125",
    response_format={ "type": "json_object" },
    messages=[
        {"role": "user", "content": "Which variable in the array [response.choices] best resembles the description of [transcription]?"}
    ]
)
if __name__ =='__main__':
    app.run(debug=True)


