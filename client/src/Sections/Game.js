import React from 'react'
import Sports from './Sports'
import "./Game.css"

function Game() {
  return (
    <div className='game-section' id='games'>
        <h1><span style={{color: "#c02323"}}>G</span>ames</h1>
    <div className='Sports-section'>
        <div className="sports-container">
            <Sports name={"Cricket Turf"} color={"#c02323"} img={"https://thumbs.dreamstime.com/b/cricket-pitch-wicket-stumps-ground-level-view-one-end-showing-bails-creases-part-infield-edgbaston-42294784.jpg"}/>
            <Sports name={"FootBall Turf"} color={"#ef7f1a"} img={"https://images.unsplash.com/photo-1543351611-58f69d7c1781?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vdGJhbGwlMjBncm91bmR8ZW58MHx8MHx8&w=1000&q=80"}/>
            <Sports name={"Badminton"} color={"#ca2485"} img={"https://st.depositphotos.com/1766930/3090/i/600/depositphotos_30906725-stock-photo-vintage-badminton-racquet.jpg"}/>
            <Sports name={"Table Tennis"} color={"#3757a1"} img={"https://thumbs.dreamstime.com/b/table-tennis-ping-pong-rackets-table-tennis-ping-pong-rackets-blue-table-117648942.jpg"}/>
            <Sports name={"Chess"} color={"#128c7e"} img={"https://img.freepik.com/free-photo/black-white-chess-pieces-black-background_23-2148952321.jpg"}/>
            <Sports name={"Pool Table"} color={"#60389c"} img={"https://images.unsplash.com/photo-1544070928-135893793bdc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cG9vbCUyMHRhYmxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80"}/>
            <Sports name={"FoosBall"} color={"#3f6b55"} img={"http://cdn.shopify.com/s/files/1/0011/8367/8476/products/fooseball6.png?v=1650621923"}/>
            <Sports name={"Dot Game"} color={"#cd143f"} img={"https://i0.wp.com/www.thegamegal.com/wp-content/uploads/2010/07/dots2.jpg"}/>
            <Sports name={"Hulla Hups"} color={"#3757a1"} img={"http://4.bp.blogspot.com/-7dUOO_FO0G4/Uc_AsdnjqpI/AAAAAAAARMI/jZuKQc1CKfI/s600/Gross+Motor+Activity+%7BHula+Hoop+Games%7D+(5).JPG"}/>
            <Sports name={"Archery"} color={"#c02323"} img={"https://play-lh.googleusercontent.com/1yRPXa0wUlcJLyuGpgbS5kJe1UdNQSanv1OOdtqjI4zRPcvL9MFNUbJ3gE9dlVqAecFW"}/>
            <Sports name={"Carrom"} color={"#ca2485"} img={"https://images.unsplash.com/photo-1620741212082-4e5c8194883e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2Fycm9tJTIwYm9hcmR8ZW58MHx8MHx8&w=1000&q=80"}/>
            <Sports name={"BastetBall"} color={"#128c7e"} img={"https://static1.squarespace.com/static/553e961fe4b07b04651f32fd/554303dbe4b0350a22f547dc/555287fde4b0ff48240f3a2f/1487694572755/11-225_1rankin23.jpg"}/>
            <Sports name={"Air Hockey"} color={"#ef7f1a"} img={"https://thumbs.dreamstime.com/b/air-hockey-game-fun-even-adults-playing-room-81992983.jpg"}/>
            <Sports name={"Skating"} color={"#60389c"} img={"https://images.unsplash.com/photo-1565991249880-c1c8e2b5d087?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHNrYXRlJTIwYm95fGVufDB8fDB8fA%3D%3D&w=1000&q=80"}/>
        </div>
    </div>
    </div>
  )
}

export default Game
