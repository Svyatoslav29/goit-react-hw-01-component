
import './App.css';
import Profile from './components/SocialProfile/profile';
import user from './components/SocialProfile/user.json';
import Statistics from "./components/Statistics/statistics";
import statsData from "./components/Statistics/statistical-data.json";
import FriendList from './components/FriendsList/friends-list';
import friends from './components/FriendsList/friends.json';
import Transaction from './components/Transactions/transactions-info';
import transactions from './components/Transactions/transactions.json';


function App() {
  return (
    <div className="App">
      <Profile
      name={user.name}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      statsFollowers={user.stats.followers}
      statsViews={user.stats.views}
      statsLikes={user.stats.likes}
      />
      <Statistics statsData={statsData} />
      <FriendList friends={friends} />
      <Transaction items={transactions}/>
    </div>
  );
}

export default App;
