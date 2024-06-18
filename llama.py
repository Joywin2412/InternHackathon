# This is for visually impaired social media

import google.generativeai as genai
import os

# Configure the API key for Gemini model
genai.configure(api_key="AIzaSyDfLXk-Vfe9aNHj-460cn5E5DELvQ0Zef4")
model = genai.GenerativeModel('gemini-1.5-flash')

# Function to generate text with rules and context, maintaining conversation history
def generate_response(prompt, rules, context, conversation_history, max_tokens=100):
    # Combine the rules, context, conversation history, and prompt into a single prompt string
    full_prompt = f"Rules: {rules}\n\nContext: {context}\n\nConversation History:\n{conversation_history}\n\nUser: {prompt}\n\nGemini:"

    response = model.generate_content(full_prompt)
    return response.text.strip()

# Define your rules, context, and initial prompt
rules = (
    "1. I'll give you an environment with the word Environment followed by semicolon.\n"
    "2. I'll ask questions with the word Question followed by a question. Be straightforward\n"
    "3. You will be told to append something at the end of the prompt. Only append something at the end of the prompt if mentioned in the rules or else there will be penalty \n"
    "4. If there is mention of people in the environment which you describe, you have to ask the user if they know the person. \n"
    "5. You have to wait for them to reply.If they say they know the person then you have to tell them to wait as you will describe the people and you have to append the string Test at the end of the prompt. \n"
    "6. If the user doesn't like your response regenerate the previous response in a different manner."
)   
context = "This conversation is about providing answers to the user's questions. The answers should be clear and concise."
initial_prompt = "Environment: Bird is sitting on a tree. There is a bottle, dustbin somewhere. A photograph of a group of friends taking a selfie. Question: Give a description of the environment."

# Initialize conversation history
conversation_history = ""

# Generate the first response
generated_text = generate_response(initial_prompt, rules, context, conversation_history)
conversation_history += f"User: {initial_prompt}\nGemini: {generated_text}\n"
print("Gemini:", generated_text)

# Function to simulate a conversation
def chat_with_gemini():
    global conversation_history
    while True:
        user_input = input("User: ")
        if user_input.lower() in ["exit", "quit"]:
            break
        generated_text = generate_response(user_input, rules, context, conversation_history)
        conversation_history += f"User: {user_input}\nGemini: {generated_text}\n"
        print("Gemini:", generated_text)

# Start the conversation
chat_with_gemini()
