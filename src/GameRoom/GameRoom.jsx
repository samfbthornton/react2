const GameRoom = ({gamers}) => {
    const Display = ({gamerName}) => <li> {gamerName} </li>

    return (
        <ul className="previousSearch">
            {gamers.map((gamerName, i) => (
                <Display
                    gamerName={gamerName}
                    key={i}
                    />
            ))}
        </ul>
    );
}
export default GameRoom;