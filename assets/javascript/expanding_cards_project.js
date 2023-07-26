const panels = document.querySelectorAll('.panel');

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses();
        panel.classList.add('active');
    });
});

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active');
    });
}

// panels.forEach(panel => {
//     panel.addEventListener('click', () => {
//       // Update the NodeList
//       const panelsUpdate = document.querySelectorAll('.panel');
      
//       // Remove 'active' class from all panels
//       panelsUpdate.forEach(panel => {
//         panel.classList.remove('active');
//       });
  
//       // Add 'active' class to the clicked panel
//       panel.classList.add('active');
//     });
//   });
