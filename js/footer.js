fetch('../shared components/footer.html')
    .then(response = response.text())
    .then(html => document.querySelector('footer').innerHTML=html);