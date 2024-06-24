# 5_o_Clock_Shadow: No
# Arched_Eyebrows: No
# Attractive: No
# Bags_Under_Eyes: No
# Bald: No
# Bangs: No
# Big_Lips: No

# The above are the attributes in which we are going to give the user. This is for visually impaired users face description.
import google.generativeai as genai
import os

# Configure the API key for Gemini model
genai.configure(api_key=os.environ['API_KEY'])
model = genai.GenerativeModel('gemini-1.5-flash')


# Define your rules, context, and initial prompt
rules = (
    "1. If you are given a list of characteristics describe the characteristics in intelligible form and ask the name of the person\n"
    "3. After you provide the description , the user will give either a name or say they don't know the person\n"
    "4. If the user says they don't know the person, you have to  append test at the end of prompt"
    "5. If the user knows the person, you have to append continue at the end of the prompt and the name of the person should be append at the start "
)   
context = "This conversation is about providing answers to the user's questions. The answers should be clear and concise."

# Initialize conversation history
conversation_history = {}

def startIt2(session_id):
    conversation_history[session_id]=""

# Function to generate text with rules and context, maintaining conversation history
def generate_response2(prompt,session_id, max_tokens=100):
    # Combine the rules, context, conversation history, and prompt into a single prompt string
    full_prompt = f"Rules: {rules}\n\nContext: {context}\n\nConversation History:\n{conversation_history[session_id]}\n\nUser: {prompt}\n\nGemini:"

    response = model.generate_content(full_prompt)
    return response.text.strip()


# Function to simulate a conversation
def chat_with_gemini2(user_input,session_id):
    generated_text = generate_response2(user_input,session_id)
    conversation_history[session_id] += f"User: {user_input}\nGemini: {generated_text}\n"
    print("Gemini:", generated_text)
    return generated_text


