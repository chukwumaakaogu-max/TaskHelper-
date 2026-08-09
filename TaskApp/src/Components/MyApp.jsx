import React, { useEffect, useState } from "react";
import "./MyApp.css";
import logo from "./MichaelGames.png";
export default function MyApp() {
    return (
        <section>
            <div>
                <img src={logo} alt="Company logo" width="200" height="200" />
            </div>
            <div>
                <h2>Motto:No better way to spend time than to enjoy it</h2>
                <h2>Slogan:What is the meaning of life if you dont get to enjoy it</h2>
            </div>
            <div>
                <h3>Products or services included:</h3>
                <li>1)Wireless and wired game consoles</li>
                <li>2)Wireless and wired headphones</li>
                <li>3)Wireless and wired keyboards</li>
                <li>4)Wireless and wired mouses</li>
                <li>5)Wireless and wired speakers</li>
                <li>6)Wireless and wired microphones</li>
                <li>7)Wireless and wired webcams</li>
                <li>8)Discord membership</li>
                <li>9)Tournament hosting (Prizes)</li>
                <li>10)You can get paid for streaming our games on our platform</li>
            </div>
            <div>
                <p>Contact us at:0916-219-0470 or email us at chukwumaakaogu@gmail.com</p>
            </div>
        </section>
    )
}