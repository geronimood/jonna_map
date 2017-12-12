#!/usr/bin/env python2.7.12

from flask import Flask, render_template, request, redirect, jsonify, \
                  url_for, flash, g

app = Flask(__name__)
app.config['SESSION_TYPE'] = 'memcached'
app.config['SECRET_KEY'] = 'super secret key'

APPLICATION_NAME = "Jonna Map"

password = "Jonna"

user_pw_input = ""

# Route for login
@app.route('/login')
def showLogin():
    return render_template('login.html')

# Show Index Page
@app.route('/', methods=['GET', 'POST'])
@app.route('/jonna/', methods=['GET', 'POST'])
def showIndex():
    if request.method == 'POST':
        if request.form['name']:
            user_pw_input = request.form['name']
            if user_pw_input == password:
                return render_template('index.html')
            else:
                return render_template('login.html')
    else:
        return render_template('login.html')

# Execute file only if it is in the main directory
# and run the webserver on localhost port 8000
if __name__ == '__main__':
    app.debug = True
    app.run()
