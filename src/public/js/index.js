import {
  createMapBox,
  createMapBoxMarker,
  createMapBoxPopup,
} from './mapbox.js';
import { getCoordinates } from './geoLocation.js';

const threadsContainer = document.getElementById('threads-container');
const modeToggler = document.getElementById('mode__toggle');

const getThreats = async () => {
  try {
    const response = await fetch('/threads');

    if (response.status !== 200) {
      throw new Error('Failed to fetch');
    }

    const responseJson = await response.json();
    return responseJson.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

const createThreadTemplate = (thread) => `
        <article class="thread">
          <header class="thread__header">
            <img
              src="${thread.user.photo}"
              alt="${thread.user.displayName}"
              class="thread__avatar"
            />
            <a href="/profile/${thread.user.id}" >
              <div class="thread__user">
              <span>${thread.user.displayName}</span>
              <p>${thread.location || 'in internet'}</p>
              </div>
            </a>
            <div class="thread__menu">
              <!-- <img src="assets/icons/more-circle.svg" alt="" class="icon" /> -->
            </div>
          </header>
          <div class="thread__body">
            <img
              src="${thread.pictureUrl}"
              alt=""
              class="thread__picture"
            />

            <p class="thread__caption truncate">
              ${thread.caption}
            </p>
            <!-- <span class="read-caption">Read more</span> -->
          </div>
          <div class="thread__footer">
            <div>
              <img src="/assets/icons/heart.svg" alt="" class="icon" />
              <img src="/assets/icons/chat.svg" alt="" class="icon" />
            </div>
            <div>
              <img src="/assets/icons/bookmark.svg" alt="" class="icon" />
            </div>
          </div>
        </article>
        `;

const init = async () => {
  const { threads } = await getThreats();
  if (threads.length) {
    let template = '';
    threads.forEach((thread) => {
      template += createThreadTemplate(thread);
    });
    threadsContainer.innerHTML = template;
  }

  modeToggler.addEventListener('click', async () => {
    const mapBoxContainer = document.getElementById('map');
    mapBoxContainer.classList.toggle('hidden');
    threadsContainer.classList.toggle('hidden');

    if (!mapBoxContainer.classList.contains('hidden')) {
      modeToggler.getElementsByTagName('img')[0].src =
        '/assets/icons/image.svg';
      modeToggler.getElementsByTagName('span')[0].innerText = 'Home';
      const { coords } = await getCoordinates();
      const center = [coords.longitude, coords.latitude];
      const map = createMapBox({ center });

      threads.forEach((thread) => {
        if (thread.longitude && thread.latitude && thread.location) {
          const popup = createMapBoxPopup(thread);
          createMapBoxMarker({
            map,
            popup,
            center: [thread.longitude, thread.latitude],
            classNames: 'marker marker__thread',
          });
        }
      });
    } else {
      modeToggler.getElementsByTagName('img')[0].src = '/assets/icons/map.svg';
      modeToggler.getElementsByTagName('span')[0].innerText = 'Maps';
    }
  });
};

init();
