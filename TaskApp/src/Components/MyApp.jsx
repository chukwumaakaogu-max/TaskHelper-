import React, { useEffect, useState } from "react";
import "./MyApp.css";
export default function MyApp() {
    const [tasks, setTasks] = useState([]);
    const [filter, setFilter] = useState("all");
    useEffect(() => {
        try {
            const raw = localStorage.getItem("tasks");
            if (raw) setTasks(JSON.parse(raw));
        } catch (e) {
            console.error("Failed to load tasks:", e);
        }
    }, []);
    useEffect(() => {
        try {
            localStorage.setItem("tasks", JSON.stringify(tasks));
        } catch (e) {
            console.error("Failed to save tasks:", e);
        }
    }, [tasks]);
    function handleAddTask() {
        const taskText = prompt("Enter your new task:");
        if (!taskText) return;
        let priority = prompt(
            "Set priority: type 'high', 'medium', or 'low' (default 'low'):",
            "low"
        );
        if (!priority) priority = "low";
        priority = priority.toLowerCase();
        if (!["high", "medium", "low"].includes(priority)) {
            alert("Invalid priority chosen — defaulting to 'low'.");
            priority = "low";
        }
        const newTask = { id: Date.now(), text: taskText, priority };
        setTasks((prev) => [...prev, newTask]);
    }
    function handleFilterPriority(p) {
        setFilter(p);
    }
    function handleAllTasks() {
        setFilter("all");
    }
    function handleDeleteTask(id) {
        setTasks((prev) => prev.filter((task) => task.id !== id));
    }
    const visibleTasks = tasks.filter(
        (t) => filter === "all" || t.priority === filter
    );
    return (
        <section>
            <div id="Nav">
                <h2 id="TaskHero">Task Hero 🦸🏼‍♂️</h2>
                <button id="AddTask" onClick={handleAddTask}>Add Task</button>
            </div>
            <div id="Nav2">
                <button id="AllTasks" onClick={handleAllTasks}>All Tasks</button>
                <button id="HighPriority" onClick={() => handleFilterPriority("high")}>High Priority Tasks🔴</button>
                <button id="MediumPriority" onClick={() => handleFilterPriority("medium")}>Medium Priority Tasks🟡</button>
                <button id="LowPriority" onClick={() => handleFilterPriority("low")}>Low Priority Tasks🟢</button>
            </div>
            <div id="Nav3">
                <textarea placeholder="Search Tasks Here"></textarea>
            </div>
            <div id="TasksList">
                {visibleTasks.length === 0 ? (
                    <p>No tasks match this filter.</p>
                ) : (
                    visibleTasks.map((t) => (
                        <div key={t.id} className="taskItem">
                            <span className="taskText">{t.text}</span>
                            <div className="taskActions">
                            <span className={`priorityBadge ${t.priority}`}>
                                {t.priority}
                            </span>
                            <button className="taskButton" onClick={() => handleDeleteTask(t.id)}>
                                Delete
                            </button>
                        </div>
                        </div>
            ))
                )}
        </div>
        </section >
    );
}