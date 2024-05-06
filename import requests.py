import requests
from bs4 import BeautifulSoup

# Specify the URL of the website you want to scrape
url = 'https://science.uct.ac.za'

# Send a GET request to the URL
response = requests.get(url)

# Parse the HTML content of the webpage
soup = BeautifulSoup(response.text, 'html.parser')

# Find specific elements on the page by their HTML tags, classes, or IDs
# For example, let's find all the <a> tags (links) on the page
links = soup.find_all('a')

# Print out the text content and href attribute of each link
for link in links:
    print("Text:", link.text)
    print("URL:", link.get('href'))
    print("------")
