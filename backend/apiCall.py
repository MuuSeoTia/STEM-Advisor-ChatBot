from openai import OpenAI
import os

def APICall(inquiry) :
    client = OpenAI(api_key= os.environ.get("OPENAI_API_KEY"))
    response = client.chat.completions.create(
    model="gpt-3.5-turbo",
    messages=[
    {
      "role": "system",
      "content": "You're an academic advisor for STEM students at Bunker Hill Community College. Answer the questions asked of you. Don't give information that'd be irrelevant to Bunker Hill Community College students. "
    },
    {
      "role": "user",
      "content": inquiry
    }
     ],
    temperature=1,
     max_tokens=256,
    top_p=1,
    frequency_penalty=0,
    presence_penalty=0)
    print (response)
    return response

