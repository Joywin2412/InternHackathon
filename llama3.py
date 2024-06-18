# This feature is for normally people for face description

# 5_o_Clock_Shadow: No
# Arched_Eyebrows: No
# Attractive: No
# Bags_Under_Eyes: No
# Bald: No
# Bangs: No
# Big_Lips: No

# The above are the attributes in which we are going to give the user. This is for general users face description.
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
    "1. If you are given a [?Image] text in the prompt , you have to ask the user who this person is.\n"
    "3. Only if they give a name you have to add continue at the end of the prompt\n"
    "4. If they say they don't know the person, you have to append test at the end of prompt\n"
)   
context = "This conversation is about providing answers to the user's questions. The answers should be clear and concise."
initial_prompt = "[?Image]"

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
