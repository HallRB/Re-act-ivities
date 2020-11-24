import React from "react";
import "./style.css";

function FriendCard() {
    return (
        <div className="card">
            <div className="img-container">
                <img
                    alt="Friend"
                    src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fthis.deakin.edu.au%2Fcareer%2Fwhat-type-of-friend-are-you-find-a-career-that-suits&psig=AOvVaw2Y3yv1L0N8Vk_RcfMOr40g&ust=1606267412282000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKifj8eCmu0CFQAAAAAdAAAAABAD"
                />
            </div>
            <div className="content">
                <ul>
                    <li>
                        <strong>Name:</strong> Friend
                    </li>
                    <li>
                        <strong>Occupation:</strong> Imaginary
                    </li>
                    <li>
                        <strong>Location:</strong> Over the Rainbow
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default FriendCard;
