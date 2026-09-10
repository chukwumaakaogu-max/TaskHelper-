import React, { useEffect, useState } from "react";
import "./MyApp.css";
import sali from "./chichi.png";
export default function MyApp() {
    return (
        <section>
            <div>
                <img src={sali} alt="chichi" width="650" height="900" />
            </div>
        </section>
    )
}