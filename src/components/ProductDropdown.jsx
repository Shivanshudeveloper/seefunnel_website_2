'use client';

export default function ProductDropdown() {
  return (
    <button 
      className="nav-link dropdown-toggle"
      data-bs-auto-close="outside" 
      data-bs-toggle="dropdown"
      aria-expanded="false"
    >
      Products
    </button>
  );
}