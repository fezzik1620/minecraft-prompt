document.addEventListener('keydown', (e) => {
  if (e.key === 'F12') {
    window.preloadAPIs.F12()
  } else if (e.key === 'F5') {
    location.reload();
  } else if (e.key === 'Enter') {
    let username = document.getElementById('username').value.trim()
    if (username) {
      e.preventDefault()
      window.preloadAPIs.submit(username)
    }
  }
});
