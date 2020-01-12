document.addEventListener('readystatechange', event => {
  if (event.target.readyState === 'interactive') {
    [...document.getElementsByTagName('*')].forEach((elmnt) => {
      const file = elmnt.getAttribute('include-html');
      if (file) {
        const xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4) {
            if (this.status == 200) elmnt.innerHTML = this.responseText;
            if (this.status == 404) elmnt.innerHTML = 'Page not found';
            elmnt.removeAttribute('include-html');
          }
        };
        xhttp.open('GET', file, true);
        xhttp.send();
      }
    });
  }
});
