import { getAddress } from './geoLocation.js';

const inputLocation = document.getElementById('location');
const locationLabel = document.getElementById('location-label');
const inputLongitude = document.getElementById('longitude');
const inputLatitude = document.getElementById('latitude');

inputLocation.addEventListener('change', async (e) => {
  const { checked } = e.target;
  if (checked) {
    const { placeName, coords } = await getAddress();
    locationLabel.getElementsByTagName('span')[0].innerText = placeName;
    inputLocation.value = placeName;
    inputLatitude.value = coords.latitude;
    inputLongitude.value = coords.longitude;
  } else {
    locationLabel.getElementsByTagName('span')[0].innerText =
      'Get current location';

    inputLocation.value = null;
    inputLatitude.value = null;
    inputLongitude.value = null;
  }
});

const pictureUploader = document.getElementById('picture');
const picturePreview = document.getElementById('picture__preview');

pictureUploader.addEventListener('change', (event) => {
  const file = event.target.files[0];

  if (file) {
    const reader = new FileReader();
    reader.onload = (readerEvent) => {
      picturePreview.style.backgroundImage = `url(${readerEvent.target.result})`;
      picturePreview.innerHTML = '';
      picturePreview.style.border = 'none';
    };

    reader.readAsDataURL(file);
  } else {
    picturePreview.style.backgroundImage = 'none';
    picturePreview.innerHTML = `<div>
            <img src="./assets/icons/upload.svg" alt="" class="icon" />
            <p>Upload Picture</p>
          </div>`;
    picturePreview.style.border = '2px dashed var(--purple)';
  }
});

const form = document.getElementById('form');
form.addEventListener('submit', async (e) => {
  e.preventDefault();

  if (pictureUploader.files.length === 0) {
    alert('Picture is required');
    return;
  }

  const submitButton = document.getElementById('submit-button');
  submitButton.innerText = 'Uploading...';
  submitButton.disabled = true;
  const formData = new FormData(e.target);

  const response = await fetch('/threads', {
    method: 'POST',
    body: formData,
  });

  if (response.status === 201) {
    window.location.href = '/';
  } else {
    submitButton.innerText = 'Upload';
    submitButton.disabled = false;
    const responseJson = await response.json();
    alert(`Post fail, ${responseJson.message}`);
  }
});
