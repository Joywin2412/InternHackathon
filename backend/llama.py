# This is for visually impaired social media. llama2 will add faces to db and gives faces description back to llama.

import google.generativeai as genai
import os



# Configure the API key for Gemini model
genai.configure(api_key=os.environ['API_KEY'])
model = genai.GenerativeModel('gemini-1.5-flash')




# Define your rules, context, and initial prompt
rules = (
    "1. I'll give you an environment with the word Environment followed by semicolon.\n"
    "2. I'll ask questions with the word Question followed by a question. Be straightforward\n"
    "3. You will be told to append something at the end of the prompt. Only append something at the end of the prompt if mentioned in the rules or else there will be penalty \n"
    "4. If there is mention of people in the environment which you describe, you have to ask the user if they know the person. \n"
    "5. You have to wait for them to reply.If they say they know the person then you have to tell them to wait as you will describe the people and you have to append the string Test at the end of the prompt. \n"
    "6. If the user doesn't like your response regenerate the previous response in a different manner."
)   

context = "This conversation is about providing answers to the user's questions. The answers should be clear and concise.Follow all rules"

conversation_history = {}

def startIt1(session_id):
    conversation_history[session_id]=""

# Function to generate text with rules and context, maintaining conversation history
def generate_response1(prompt,session_id, max_tokens=100):
    # Combine the rules, context, conversation history, and prompt into a single prompt string
    print(conversation_history[session_id])
    full_prompt = f"Rules: {rules}\n\nContext: {context}\n\nConversation History:\n{conversation_history[session_id]}\n\nUser: {prompt}\n\nGemini:"

    response = model.generate_content(full_prompt)
    return response.text.strip()



# Function to simulate a conversation
def chat_with_gemini1(initial_prompt,session_id):
    generated_text = generate_response1(initial_prompt,session_id)
    conversation_history[session_id] += f"User: {initial_prompt}\nGemini: {generated_text}\n"
    return generated_text
