const progress = document.getElementById('progress');
const form = document.querySelector('#form')
const xhr = new XMLHttpRequest()

form.addEventListener('submit', (event) => {
    event.preventDefault()
    const formData = new FormData(form)

    xhr.upload.addEventListener('progress', (event) => {
        if (event.lengthComputable) {
            progress.value = event.loaded / event.total
        }
    })
    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload')
    xhr.send(formData)
})