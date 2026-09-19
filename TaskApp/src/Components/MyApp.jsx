import React, { useEffect, useState } from "react";
import "./MyApp.css";
import MikesClothes from "./Mikes Clothes.png";
export default function MyApp() {
    return (
        <section>
            <div>
                <img src={MikesClothes} alt="Mikes Clothes" width="650" height="900" />
            </div>
        </section>
    )
}