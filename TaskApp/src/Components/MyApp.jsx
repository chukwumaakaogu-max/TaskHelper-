import React, { useEffect, useState } from "react";
import "./MyApp.css";
import MikesClothes from "./MikesClothes.png";
export default function MyApp() {
    return (
        <section>
            <div>
                <img src={MikesClothes} alt="MikesClothes" width="650" height="900" />
            </div>
        </section>
    )
}
