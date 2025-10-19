import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TodoList from "../components/TodoList";
import "./../styles/Dashboard.css";

export default function Dashboard() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const addTodo = (e) => {
    e.preventDefault();
    if (input.trim() === "") return;
    setTodos([...todos, input]);
    setInput("");
  };

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div className="dashboard-container">
      {/* Animated background elements */}
      <div className="dashboard-background">
        <div className="bg-shape shape-1"></div>
        <div className="bg-shape shape-2"></div>
        <div className="bg-shape shape-3"></div>
      </div>

      {/* Header */}
      <header className="dashboard-header">
        <div className="header-content">
          <h1 className="dashboard-title">
            <span className="title-icon">📋</span>
            TaskFlow
          </h1>
          <button onClick={handleLogout} className="logout-btn">
            <span className="btn-icon">🚪</span>
            Logout
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="dashboard-main">
        <div className="todo-card">
          <div className="card-header">
            <h2>My Productivity Hub</h2>
            <p>Organize your tasks and boost your productivity</p>
          </div>

          {/* Add Todo Form */}
          <form onSubmit={addTodo} className="todo-form">
            <div className="input-group">
              <input
                type="text"
                placeholder="What needs to be done?"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="todo-input"
              />
              <button type="submit" className="add-btn">
                <span className="btn-text">Add Task</span>
                <span className="btn-icon">+</span>
              </button>
            </div>
          </form>

          {/* Todo List */}
          <div className="todo-list-container">
            {todos.length > 0 ? (
              <TodoList todos={todos} />
            ) : (
              <div className="empty-state">
                <div className="empty-icon">📝</div>
                <h3>No tasks yet</h3>
                <p>Add your first task to get started!</p>
              </div>
            )}
          </div>

          {/* Quick Stats */}
          {todos.length > 0 && (
            <div className="quick-stats">
              <div className="stat-card">
                <div className="stat-icon">📅</div>
                <div className="stat-info">
                  <span className="stat-value">{todos.length}</span>
                  <span className="stat-name">Total Tasks</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="dashboard-footer">
        <p>Stay organized, stay productive ✨</p>
      </footer>
    </div>
  );
}