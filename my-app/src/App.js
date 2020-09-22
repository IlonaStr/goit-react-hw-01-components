import React from 'react';
import Profile from './components/profile/Profile';
import userArr from './data/user.json';
import Statistics from './components/Statistics/Statistics';
import statisticsData from './data/statistical-data.json';
import FriendList from './components/FriendList/FriendList';
import friends from './data/friends.json';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import items from './data/transaction-history.json'

// import logo from './logo.svg';
// import './App.css';

function App() {
  return (
    <>
<Profile
name={userArr.name}
tag={userArr.tag}
location={userArr.location}
avatar={userArr.avatar}
stats={userArr.stats}
/>
<Statistics title='upload stats' stats={statisticsData} />
<FriendList friends={friends} />
<TransactionHistory items={items} />
</>
  );
}

export default App;
