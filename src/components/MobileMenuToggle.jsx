'use client';

export default function MobileMenuToggle() {
  return (
    <li className="nav-item">
      <button 
        className="navbar-toggler ms-sm-3 p-2"
        type="button"
        data-bs-toggle="collapse" 
        data-bs-target="#navbarCollapse"
        aria-controls="navbarCollapse"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-animation">
          <span></span>
          <span></span>
          <span></span>
        </span>
      </button>
    </li>
  );
}