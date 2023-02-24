from flask import Flask, render_template
import urllib.request, json

import os

app = Flask(__name__)


@app.route("/")
def get_backend():
    url = "http://localhost:3000/estado"

    response = urllib.request.urlopen(url)
    status = response.status

    return '', status


if __name__ == '__main__':
    app.run()
