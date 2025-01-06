'use client';

export default function CopyrightYear() {
  return (
    <span>
      Copyrights ©{new Date().getFullYear()}
    </span>
  );
}