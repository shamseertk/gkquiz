import React from 'react';

function Keyboard(props) {
    return <div className="keycontainer">
        <button onClick={() => props.insertLetter('A')}>A</button>
        <button onClick={() => props.insertLetter('B')}>B</button>
        <button onClick={() => props.insertLetter('C')}>C</button>
        <button onClick={() => props.insertLetter('D')}>D</button>
        <button onClick={() => props.insertLetter('E')}>E</button>
        <button onClick={() => props.insertLetter('F')}>F</button>
        <button onClick={() => props.insertLetter('G')}>G</button>
        <button onClick={() => props.insertLetter('H')}>H</button>
        <button onClick={() => props.insertLetter('I')}>I</button>
        <button onClick={() => props.insertLetter('J')}>J</button>
        <button onClick={() => props.insertLetter('K')}>K</button>
        <button onClick={() => props.insertLetter('L')}>L</button>
        <button onClick={() => props.insertLetter('M')}>M</button>
        <button onClick={() => props.insertLetter('N')}>N</button>  
        <button onClick={() => props.insertLetter('O')}>O</button>        
        <button onClick={() => props.insertLetter('P')}>P</button>
        <button onClick={() => props.insertLetter('Q')}>Q</button>
        <button onClick={() => props.insertLetter('R')}>R</button>
        <button onClick={() => props.insertLetter('S')}>S</button>
        <button onClick={() => props.insertLetter('T')}>T</button>
        <button onClick={() => props.insertLetter('U')}>U</button>
        <button onClick={() => props.insertLetter('V')}>V</button>
        <button onClick={() => props.insertLetter('W')}>W</button>
        <button onClick={() => props.insertLetter('X')}>X</button>
        <button onClick={() => props.insertLetter('Y')}>Y</button>
        <button onClick={() => props.insertLetter('Z')}>Z</button>
        <button className='spacebar' onClick={() => props.insertLetter(' ')}>Space</button>
        <button onClick={() => props.insertLetter('BS')}>⌫</button>
        <button className='clear-text' onClick={() => props.insertLetter('Clear')}>Clear</button>
    </div>
}

export default Keyboard;