import React from 'react';
import { Link } from 'react-router-dom';

const users = [
  { id: 1, name: 'User 1', profileImg: 'https://via.placeholder.com/150x150' },
  { id: 2, name: 'User 2', profileImg: 'https://via.placeholder.com/150x150' },
  { id: 3, name: 'User 3', profileImg: 'https://via.placeholder.com/150x150' },
];

const LandingPage1 = () => {
  return (
    <div>
      <h1>Who's watching?</h1>
      <div>
        {users.map(user => (
          <Link key={user.id} to={`/user/${user.id}`}>
            <div>
              <img src={user.profileImg} alt={user.name} />
              <p>{user.name}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LandingPage1;
