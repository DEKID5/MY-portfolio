import React from 'react';

export const SciFiBackground = () => (
  <div className="sci-fi-background" aria-hidden="true">
    <div className="sci-fi-grid" />
    <div className="sci-fi-orbit sci-fi-orbit-one" />
    <div className="sci-fi-orbit sci-fi-orbit-two" />
    <div className="sci-fi-core">
      <span />
    </div>
    <div className="sci-fi-scanline" />
    <div className="sci-fi-status">
      <span className="sci-fi-status-dot" />
      <span>SYSTEM ONLINE</span>
      <b>07:28</b>
    </div>
  </div>
);