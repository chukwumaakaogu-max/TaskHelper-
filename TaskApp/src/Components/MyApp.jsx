import React, { useEffect, useState } from "react";
import "./MyApp.css";
import sali from "./Sali.png";
export default function MyApp() {
    return (
        <section>
            <div>
                <img src={sali} alt="Salford" width="600" height="800" />
            </div>
        </section>
    )
}