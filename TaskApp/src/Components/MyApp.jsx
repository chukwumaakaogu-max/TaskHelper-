import React, { useEffect, useState } from "react";
import "./MyApp.css";
import sali from "./salford.png";
export default function MyApp() {
    return (
        <section>
            <div>
                <img src={sali} alt="Salford" width="200" height="200" />
            </div>
        </section>
    )
}