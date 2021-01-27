import React, { useState } from "react";
// import PropTypes from "prop-types";

const App = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    if (email) {
      fetch(`/.netlify/functions/addMember?email=${email}&name=${name}`)
        .then(res => res.json().then(data => ({status: res.status, body: data})))
        .then(obj => {
          console.log(`obj:`, obj)
        })
        .catch(err => console.log(err))
      setEmail('');
      setName('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        type="name"
        placeholder={'Enter Name'}
        onChange={e =>
          setName(e.target.value.trim())
        }
        value={name}
        aria-label="Name"
      />
      <input
        name="email"
        type="email"
        placeholder={'Enter Email'}
        onChange={e =>
          setEmail(e.target.value.trim())
        }
        value={email}
        aria-label="Email Address"
      />
      <button type="submit">
        Send me my free course!
      </button>
    </form>
  );
};

App.propTypes = {
};

export default App;
