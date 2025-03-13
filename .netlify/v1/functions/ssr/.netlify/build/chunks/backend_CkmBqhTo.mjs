import PocketBase from 'pocketbase';

const pb = new PocketBase("https://pb-sae-203.bryan-menoux.fr:443");
pb.autoCancellation(false);

async function superAuth() {
  const authData = await pb
    .collection("_superusers")
    .authWithPassword("admin@admin.com", "OO6FN9qKv81QxvM");
  return authData;
}

async function getFilmsByDate() {
  await superAuth();
  let records = await pb
    .collection("film")
    .getFullList({ sort: "date_projection" });
  pb.authStore.clear();
  return records;
}

async function getActivitesByDate() {
  await superAuth();
  const record = await pb
    .collection("activite")
    .getFullList({ sort: "date_activite" });
  pb.authStore.clear();
  return record;
}

async function getAllInvites() {
  await superAuth();
  const records = await pb.collection("invite").getFullList({
    sort: "nom",
  });
  records.forEach((record) => {
    record.photo = pb.files.getURL(record, record.photo);
  });
  pb.authStore.clear();
  return records;
}

async function getOneFilm(id) {
  await superAuth();
  const record = await pb
    .collection("film")
    .getOne(id, { expand: "realisateur, invite" });
  record.affiche = pb.files.getURL(record, record.affiche);
  record.expand.invite.photo = pb.files.getURL(
    record.expand.invite,
    record.expand.invite.photo
  );
  record.expand.realisateur.photo = pb.files.getURL(
    record.expand.realisateur,
    record.expand.realisateur.photo
  );
  pb.authStore.clear();
  return record;
}

async function getOneInvite(id) {
  await superAuth();
  const record = await pb.collection("invite").getOne(id);
  record.photo = pb.files.getURL(record, record.photo);
  pb.authStore.clear();
  return record;
}

function formatDate(date) {
  const d = new Date(date);

  const dateString = d.toLocaleDateString("fr-FR", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const timeString = `${d.getHours()}h${d
    .getMinutes()
    .toString()
    .padStart(2, "0")}`;

  const year = d.getFullYear();
  return { date: dateString, heure: timeString, year: year };
}

async function getFilmByGenre(genre) {
  await superAuth();
  let records = await pb.collection("film").getFullList({});
  records = records.filter(
    (record) => record.genre[0] === genre || record.genre[1] === genre
  );
  pb.authStore.clear();
  return records;
}

export { getOneFilm as a, getOneInvite as b, getAllInvites as c, getFilmByGenre as d, getFilmsByDate as e, formatDate as f, getActivitesByDate as g };
