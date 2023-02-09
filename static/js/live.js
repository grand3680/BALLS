GameBrick.prototype.Live = function() {
    let ul = document.querySelector('ul');
    ul.textContent = "";
    for (let i = 0; i < this.live; i++) {
        let Elcvg = document.createElement('span');
        Elcvg.innerHTML = '<svg height="100" width="100"><circle cx="50" cy="50" r="40" stroke="black"/></svg> ';
      
        ul.append(Elcvg)
    }
}
