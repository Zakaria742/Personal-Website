from flask import Flask, render_template, request, send_from_directory
import os

app = Flask(__name__,
            static_folder='static',
            static_url_path='/static')

@app.route('/', methods=['GET', 'POST'])
def home():  
        return render_template("index.html")

@app.route('/static/assets/<path:filename>')
def serve_assets(filename):
    return send_from_directory('static/assets', filename)

def handler(event=None, context=None):
        return app

if __name__ == "__main__":
        app.run(debug=True)