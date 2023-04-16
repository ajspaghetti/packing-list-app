class Auth {
    constructor() {
      this.token = null;
    }
  
    login(email, password) {
      return fetch('/api/authenticate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email,
          password
        })
      })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Login failed');
        }
      })
      .then(json => {
        this.token = json.token;
        return json;
      });
    }
  
    logout() {
      this.token = null;
    }
  
    isLoggedIn() {
      return this.token !== null;
    }
  
    getToken() {
      return this.token;
    }
  }
  
  export default new Auth();
  