import React, { Component } from 'react';

import '../styles/bodyComponent.scss';

class Contact extends Component {

  //             test code:
  // state = {
  //   data: null
  // };

  // componentDidMount() {
  //     // Call our fetch function below once the component mounts
  //   this.callBackendAPI()
  //     .then(res => this.setState({ data: res.express }))
  //     .catch(err => console.log(err));
  // }
  //   // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
  // callBackendAPI = async () => {
  //   const response = await fetch('/express_backend');
  //   const body = await response.json();

  //   if (response.status !== 200) {
  //     throw Error(body.message) 
  //   }
  //   return body;
  // };

  componentDidMount() {

    document.querySelector('form').addEventListener('reset', (e) => {
      // remove error messages on reset
      const alerts = document.querySelectorAll('div.form-alert');
      for(let i=0; i<alerts.length; i++) alerts[i].remove();
      const highlights = document.querySelectorAll('form .error');
      for(let i=0; i<highlights.length; i++) highlights[i].classList.remove('error');
    
    });

    document.querySelector('form').addEventListener('submit', (e) => {
      e.preventDefault();
    
      // remove current error messages
      const alerts = document.querySelectorAll('div.form-alert');
      for(let i=0; i<alerts.length; i++) alerts[i].remove();
      const highlights = document.querySelectorAll('form .error');
      for(let i=0; i<highlights.length; i++) highlights[i].classList.remove('error');
    
      // load field elements
      const name = document.querySelector('p #fname').value.trim();
      const email = document.querySelector('p #femail').value.trim();
      const body = document.querySelector('p #fbody').value.trim();
    
      const data = {
        name,
        email,
        body
      };
      let proven = [false, false, false];
    
      // use REGEX to verify input data
      let rname = /^[A-Za-z ]+$/;
      let remail = /^[!$&+\-_~a-zA-Z0-9.]+@[A-Za-z0-9\-.]+[.][A-Za-z]+$/;
      let rbody = /.{30,}/; // allow body if at least 60 characters long
    
      if(body === '') {
        // provide this error:
        // <div class="form-alert">Please enter a description of your project.</div>
        const alert = document.createElement('div');
        alert.classList.add('form-alert');
        alert.innerText = 'Please enter a message to send.';
    
        document.querySelector('p#fbody').append(alert);
        document.querySelector('p#fbody #fbody').classList.add('error');
    
      } else if (rbody.test(data.body)) {
        proven[2] = true;
    
      } else {
        // provide this error:
        // <div class="form-alert">Please enter a longer description of your project.</div>
        const alert = document.createElement('div');
        alert.classList.add('form-alert');
        alert.innerText = 'The message is expected to be at least 30 characters.';
    
        document.querySelector('p#fbody').append(alert);
        document.querySelector('p#fbody #fbody').classList.add('error');
      }
    
      if(remail.test(data.email)) {
        proven[1] = true;
      } else {
        // create, output error message
        // <div class="form-alert">Please enter a valid email address.</div>
        const alert = document.createElement('div');
        alert.classList.add('form-alert');
        alert.innerText = 'Please enter a valid email address.';
    
        document.querySelector('p#femail').append(alert);
        document.querySelector('p#femail #femail').classList.add('error');
      }
    
      if(rname.test(data.name)) {
        proven[0] = true;
      } else {
        // provide this alert:
        // <div class="form-alert">Please enter your name.</div>
        const alert = document.createElement('div');
        alert.classList.add('form-alert');
        alert.innerText = 'Please enter your name.';
    
        document.querySelector('p#fname').append(alert);
        document.querySelector('p#fname #fname').classList.add('error');
      }
    
      // send email if tests pass
      if(proven[0]&&proven[1]&&proven[2]) {
        // give user feedback on form submission send(data)
        this.send(data)
          .then(res => {
            if(res) {
              // <form class="contact final">
              // <p>Your email was successfully sent!</p>
              const feedback = document.createElement('p');
              const form = document.querySelector('form.contact');
    
              feedback.innerText = 'Your email was successfully sent!';
              form.classList.add('final');
              form.innerHTML = '';
              form.append(feedback);
    
            } else {
              // <form class="contact error">
              // <p>The server returned an error! Please try again later or contact us in another way.</p>
              const feedback = document.createElement('p');
              const form = document.querySelector('form.contact');
    
              feedback.innerText = 'The server returned an error!\nPlease try again later or contact me in another way.';
              form.classList.add('error');
              form.innerHTML = '';
              form.append(feedback);
            }
          }).catch((err) => {
              console.log('error:', err);    
          });
      }
    });
  }

  send = async (data) => {

    // send email data to server
    return fetch('/email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', },
      body: JSON.stringify(data)
    })
      .then((response) => response.json())
      .then((data) => {
        if(data.ok) console.log(`${data.message} We'll be in touch soon!`);
        else throw new Error("500: email confirmation not received.");
        return data.ok;
      })
      .catch((err) => { 
        console.log('error:', err);
        return false;
    });
  }

  render(){ 
    return (
      <main className="content">
        <section className="card contact">
          <h2>Contact Me</h2>
          <p className="tightFollow">Saw something interesting? Let me know!</p>
          <form className="contact">
            <p className="short" id="fname">
              <label for="fname">Name: </label>
              <input type="text" name="fname" id="fname" />
            </p><p className="short" id="femail">
              <label for="femail">Email: </label>
              <input type="text" name="femail" id="femail" />
            </p><p className="txa" id="fbody">
              <label for="fbody">Your message: </label>
              <textarea name="fbody" id="fbody" rows="6" cols="10"></textarea>
            </p><p className="buttons">
              <button type="reset">Clear</button>
              <button type="submit">Submit</button>
            </p>
          </form>
        </section>
      </main>
    );
  }
}

export default Contact;