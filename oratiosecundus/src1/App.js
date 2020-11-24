import React from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import FriendCard from "./components/FriendCard";
import SpongeBobCard from "./components/SpongeBobCard";
import SquidwardCard from "./components/SquidwardCard";
import MrKrabsCard from "./components/MrKrabsCard";

function App() {
    return (
        <Wrapper>
            <Title>Friends List</Title>
            <FriendCard />
            <SpongeBobCard />
            <MrKrabsCard />
            <SquidwardCard />
        </Wrapper>
    );
}

export default App;
