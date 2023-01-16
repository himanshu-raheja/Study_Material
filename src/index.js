window.addEventListener('DOMContentLoaded', (event) => {
        let list = document.getElementById('myUl')
        list.addEventListener('click', (e) => {
            if(e.target.tagName === 'LI') {
                e.target.classList.toggle('checked');
            } else if (e.target.tagName === 'SPAN') {
                list.removeChild(e.target.parentElement)
            }
        })
})
  
function addItem() {
    const text = document.getElementById("taskValue").value;
    if(text.trim() === '') {
        alert('Please add anything')
        return
    }
    let li = document.createElement('li')
    li.appendChild(document.createTextNode(text))
    document.getElementById('myUl').appendChild(li);
    let span = document.createElement('span')
    let node = document.createTextNode('\u00D7')
    span.className = 'close'
    span.appendChild(node)
    li.appendChild(span)
  }
