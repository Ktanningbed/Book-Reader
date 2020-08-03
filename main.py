import eel
import requests
from bs4 import BeautifulSoup
eel.init("web", allowed_extensions=['.js', '.html'])
@eel.expose
def scrape():
    response = requests.get(eel.giveLink()()) 
    soup = BeautifulSoup(response.text, 'html.parser')
    posts = soup.find(class_='truyen-title').get_text()
    return posts

@eel.expose
def scrape2():
    response = requests.get(eel.giveLink()()) 
    soup = BeautifulSoup(response.text, 'html.parser')
    posts = soup.findAll('p')
    post = ''
    for p in posts:
        post += (str(p))
    post = post.replace("'","\\'")
    post = post.replace('"', '\\"')
    return post

@eel.expose
def scrapePrevious():
    response = requests.get(eel.giveLink()()) 
    soup = BeautifulSoup(response.text, 'html.parser')
    button = soup.findAll(class_="btn btn-success")[0]
    return button.get('href')

@eel.expose
def scrapeNext():
    response = requests.get(eel.giveLink()()) 
    soup = BeautifulSoup(response.text, 'html.parser')
    button = soup.findAll(class_="btn btn-success")[1]
    return button.get('href')

eel.start("index.html", block=False)

while True:
    eel.sleep(10)