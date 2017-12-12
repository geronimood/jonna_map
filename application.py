#!/usr/bin/env python2.7.12

from flask import Flask, render_template, request, redirect, jsonify, \
                  url_for, flash, g

app = Flask(__name__)
app.config['SESSION_TYPE'] = 'memcached'
app.config['SECRET_KEY'] = 'super secret key'

APPLICATION_NAME = "Jonna Map"


# Decorator for login required

#def login_required(f):
#    @wraps(f)
#    def decorated_function(*args, **kwargs):
#        if 'username' not in login_session:
#            flash("You are not allowed to access there")
#            return redirect('/login')
#        return f(*args, **kwargs)
#    return decorated_function

# Route for login
#@app.route('/login')
#def showLogin():
#    state = ''.join(random.choice(string.ascii_uppercase + string.digits)
#                    for x in xrange(32))
#    login_session['state'] = state
#    return render_template('login.html', STATE=state)

# Show Index Page
@app.route('/')
@app.route('/jonna/')
def showIndex():
    return render_template('index.html')

# Execute file only if it is in the main directory
# and run the webserver on localhost port 8000
if __name__ == '__main__':
    app.debug = True
    app.run()
