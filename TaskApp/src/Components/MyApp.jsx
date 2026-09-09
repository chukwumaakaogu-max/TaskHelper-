import React, { useEffect, useState } from "react";
import "./MyApp.css";
import logo from "./salford.png";
export default function MyApp() {
    return (
        <section>
            <div>
                <img src={logo} alt="Company logo" width="200" height="200" />
            </div>
        </section>
    )
}