// Import necessary modules
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

// Initial data
const initialData = [
    { userID: 'u-1', displayName: 'Jone', picture: '', score: 157000 },
    { userID: 'u-2', displayName: 'Victoria', picture: '', score: 46200 },
    { userID: 'u-3', displayName: 'Joy', picture: '', score: 38800 },
    { userID: 'u-4', displayName: 'Quinn', picture: '', score: 33400 },
    { userID: 'u-5', displayName: 'Sheenalo', picture: '', score: 31600 },
    { userID: 'u-6', displayName: 'Charlene', picture: '', score: 30800 },
    { userID: 'u-7', displayName: 'LeonaBaby', picture: '', score: 22300 },
    { userID: 'u-8', displayName: 'Sunny', picture: '', score: 17800 },
    { userID: 'u-9', displayName: 'ImWord', picture: '', score: 17300 },
    { userID: 'u-10', displayName: 'Dophine', picture: '', score: 15400 },
];


// Define the styled component for the circle
const Circle = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => {
        if (props.index === 0) return '#c42436';
        if (props.index === 1) return '#fdb634';
        if (props.index === 2) return '#ffa424';
        return '#0e99d4';
    }};
  color: white;
  font-weight: bold;
  margin-right: 10px;
  font-size: 10px;
`;


// Define the styled component for the circle
const PlayerCircle = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color:#e1e1e1;
  color: white;
  font-weight: bold;
  margin-right: 10px;
  font-size: 10px;
`;

const LeaderboardContainer = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 20px auto;
  padding: 20px;
  background: #f8f9fa;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const PlayerRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin: 5px 0;
  background: #ffffff;
  border-radius: 4px;
`;


const LeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
const PlayerName = styled.div`
  font-weight: bold;
`;



const PlayerScore = styled.div`
  font-size: 1.2em;
  color: #c42436;
`;

const Leaderboard = () => {
    const [players, setPlayers] = useState(initialData);

    // Simulate score updates
    useEffect(() => {
        const interval = setInterval(() => {
            setPlayers((prevPlayers) => {
                const updatedPlayers = prevPlayers.map((player) => ({
                    ...player,
                    score: player.score + Math.floor(Math.random() * 1000),
                }));

                return [...updatedPlayers].sort((a, b) => b.score - a.score);
            });
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <LeaderboardContainer>
            <h2>Live Leaderboard</h2>
            {players.map((player, index) => (
                <PlayerRow key={player.userID}>
                    <LeftSection>
                        <Circle index={index}>{index + 1}</Circle>
                        <PlayerCircle></PlayerCircle>
                        <PlayerName>{player.displayName}</PlayerName>
                    </LeftSection>
                    <PlayerScore>{player.score.toLocaleString()}pt</PlayerScore>
                </PlayerRow>
            ))}
        </LeaderboardContainer>
    );
};

export default Leaderboard;
