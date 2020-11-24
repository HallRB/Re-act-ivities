import React from 'react';
import FriendCard from './components/FriendCard';
import Wrapper from './components/Wrapper';
import Title from './components/Title';
import friends from './friends.json';
import "./App.css";

class App extends React.Component {
    // Setting this.state.friends to the friends json array
    state = {
      friends
    };
  
    removeFriend = id => {
      // Filter this.state.friends for friends with an id not equal to the id being removed
      const friends = this.state.friends.filter(friend => friend.id !== id);
      // Set this.state.friends equal to the new friends array
      this.setState({ friends });
    };
  
    // Map over this.state.friends and render a FriendCard component for each friend object
    render() {
      return (
        <Wrapper>
          <Title>Friends List</Title>
          {this.state.friends.map(friend => (
            <FriendCard
              removeFriend={this.removeFriend}
              id={friend.id}
              key={friend.id}
              name={friend.name}
              image={friend.image}
              occupation={friend.occupation}
              location={friend.location}
            />
          ))}
        </Wrapper>
      );
    }
  }

// function App() {
//     return (
//         <Wrapper>
//             <Title>Friends List</Title>
//             <FriendCard
//                 name={friends[0].name}
//                 image={friends[0].image}
//                 occupation={friends[0].occupation}
//                 location={friends[0].location}
//             />
//             <FriendCard
//                 name={friends[1].name}
//                 image={friends[1].image}
//                 occupation={friends[1].occupation}
//                 location={friends[1].location}
//             />
//             <FriendCard
//                 name={friends[2].name}
//                 image={friends[2].image}
//                 occupation={friends[2].occupation}
//                 location={friends[2].location}
//             />
//         </Wrapper>
//     );
// }

export default App;
