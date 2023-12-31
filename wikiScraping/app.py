# from flask import Flask
import pandas as pd
from bs4 import BeautifulSoup
from requests.sessions import Request
from urllib.request import urlopen, Request

import json

# app = Flask(__name__)
# app.debug = True

# @app.route("/")
def hello_world():
    return "<p>hi</p>"

# webscrape wiki for bts run episode details  // "Run_BTS"
# @app.route("/videos/<URL>")
def wikiScrapeEpisodes(URL):
    infos = []

    URL = "https://en.wikipedia.org/wiki/" + URL

    req = Request(URL, headers={'User-Agent': 'Mozilla/5.0'})

    webpage = urlopen(req).read()

    soup = BeautifulSoup(webpage, 'html.parser')
    # print(soup.text)

    # for video in soup.find_all("td"):
    #     print(video.get_text(), "*---------*")

    table = soup.find_all('table', class_="wikiepisodetable")

    i = 0

    infos = []

    for ea in table:
        table_rows = ea.find_all('tr')

        for tr in table_rows:
            td = tr.find_all('td')

            row = [
                tr.text.strip().replace('"', "") 
                for tr in td if tr.text.strip()]
            
            # if num in szn, name, MC, Teams, date
            if len(row) == 5:
                # fix the date format
                row[4] = row[4][len(row[4]) - 12:]
                temp = row

                # keepTrack of the count of eps // if special ep IGNORE count
                if row[0] != "SPE":
                    i += 1
                    row[0] = str(i)
                    title = "Run BTS! EP."+row[0]+": "
                else:
                    title = "Run BTS! Special Episode: "

            # [16] - [157] refs need to b removed

            # if description
            if len(row) == 1: #name, description, platformID, link, released, thumbnail
                date = temp[4]
                date = date.replace("(", "")
                date = date.replace(")", "")

                thumbnail = 2

                if temp[0] != 'SPE':
                    if int(temp[0]) <= 58:
                        thumbnail = 1

                infos.append({"name":title+temp[1], "description":"MC: "+temp[2]+'\nTeams: '+temp[3]+ '\n' + row[0], "platformID": 1, "link": "https://www.youtube.com/embed/", "released":date, "thumbnail":thumbnail})

        # print(json.dumps(infos, indent=4))

    jsonStr = json.dumps(infos, indent=4)
    jsonFile = open("showInfo.json", "w")
    jsonFile.write(jsonStr)
    jsonFile.close()
        

    return (json.dumps(infos, indent=4))

wikiScrapeEpisodes("Run_BTS")

# if __name__ == "__main__":
#     app.run(debug=True)