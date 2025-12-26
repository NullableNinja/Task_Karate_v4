/**
 * Belt Testing Requirements Modal with 3D Flip Cards
 * ──────────────────────────────────────────────
 * Opens a Paper-Fu modal with an iframe showing
 * the testing requirements for each belt level.
 * 
 * Enhanced with 3D flip card interaction:
 * - Click front: Flip to show requirements
 * - Click "View Full Requirements": Open modal
 * - Click flipped card again: Flip back
 * 
 * @version 2.0.0
 * @file js/belt-modal.js
 */

(function() {
  'use strict';
  
  // Belt color map for the colored bar
  const beltColors = {
    white: '#f8fafc',
    gold: '#eab308',
    orange: '#f97316',
    green: '#22c55e',
    purple: '#a855f7',
    blue: '#3b82f6',
    red: '#ef4444',
    brown: '#92400e',
    black: '#171717'
  };
  
  // Belt name map for the title
  const beltNames = {
    white: 'White Belt',
    gold: 'Gold Belt',
    orange: 'Orange Belt',
    green: 'Green Belt',
    purple: 'Purple Belt',
    blue: 'Blue Belt',
    red: 'Red Belt',
    brown: 'Brown Belt',
    black: 'Black Belt'
  };
  
  // Cache DOM elements
  const modal = document.getElementById('belt-modal');
  const modalBar = document.getElementById('belt-modal-bar');
  const modalTitle = document.getElementById('belt-modal-title');
  const modalFrame = document.getElementById('belt-modal-frame');
  const closeBtn = document.getElementById('belt-modal-close');
  const backdrop = modal?.querySelector('.belt-modal__backdrop');
  
  if (!modal || !modalFrame) return;
  
  // Get all belt card flippers
  const beltFlippers = document.querySelectorAll('.belt-card-flipper[data-belt]');
  
  /**
   * Open the modal with a specific belt's testing sheet
   * @param {string} belt - Belt color key
   * @param {string} src - URL to the testing sheet HTML
   */
  function openModal(belt, src) {
    // Set belt color bar
    if (modalBar) {
      modalBar.style.setProperty('--belt-color', beltColors[belt] || beltColors.blue);
      modalBar.style.background = beltColors[belt] || beltColors.blue;
    }
    
    // Set title
    if (modalTitle) {
      modalTitle.textContent = `${beltNames[belt] || 'Belt'} Testing Requirements`;
    }
    
    // Load the iframe
    modalFrame.src = src;
    
    // Show modal
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    
    // Focus the close button for accessibility
    setTimeout(() => closeBtn?.focus(), 100);
  }
  
  /**
   * Close the modal
   */
  function closeModal() {
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    
    // Clear iframe after transition
    setTimeout(() => {
      modalFrame.src = 'about:blank';
    }, 300);
  }
  
  /**
   * Toggle flip state of a belt card
   * @param {HTMLElement} flipper - The flipper container
   */
  function toggleFlip(flipper) {
    flipper.classList.toggle('is-flipped');
  }
  
  // Belt card flipper click handlers
  beltFlippers.forEach(flipper => {
    const belt = flipper.dataset.belt;
    const src = flipper.dataset.src;
    
    // Front card click - flip to back
    const frontCard = flipper.querySelector('.belt-card-flipper__front .belt-card');
    if (frontCard) {
      frontCard.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleFlip(flipper);
      });
    }
    
    // Back CTA button click - open modal
    const backCTA = flipper.querySelector('.belt-card-back__cta');
    if (backCTA) {
      backCTA.addEventListener('click', (e) => {
        e.stopPropagation();
        if (belt && src) {
          openModal(belt, src);
          // Flip card back after opening modal
          setTimeout(() => toggleFlip(flipper), 300);
        }
      });
    }
    
    // Click anywhere on back card (except CTA) - flip back to front
    const backCard = flipper.querySelector('.belt-card-back');
    if (backCard) {
      backCard.addEventListener('click', (e) => {
        // Only flip back if we didn't click the CTA button
        if (!e.target.closest('.belt-card-back__cta')) {
          e.stopPropagation();
          toggleFlip(flipper);
        }
      });
    }
  });
  
  // Close button handler
  closeBtn?.addEventListener('click', closeModal);
  
  // Backdrop click handler
  backdrop?.addEventListener('click', closeModal);
  
  // Escape key handler
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.getAttribute('aria-hidden') === 'false') {
      closeModal();
    }
  });
  
})();
