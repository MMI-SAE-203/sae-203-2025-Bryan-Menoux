import PocketBase from "pocketbase";
const pb = new PocketBase("https://pb-sae-203.bryan-menoux.fr:443");
pb.autoCancellation(false);

export async function superAuth() {
  const authData = await pb
    .collection("_superusers")
    .authWithPassword("admin@admin.com", "OO6FN9qKv81QxvM");
  return authData;
}

export async function getFilmsByDate() {
  await superAuth();
  let records = await pb
    .collection("film")
    .getFullList({ sort: "date_projection" });
  pb.authStore.clear();
  return records;
}

export async function getActivitesByDate() {
  await superAuth();
  const record = await pb
    .collection("activite")
    .getFullList({ sort: "date_activite" });
  pb.authStore.clear();
  return record;
}

export async function getAllInvites() {
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

export async function getAllDirectorAndActors() {
  await superAuth();
  const records = await pb.collection("invite").getFullList({
    sort: "nom",
    filter: "role = 'acteur' || role = 'realisateur'",
  });
  pb.authStore.clear();
  return records;
}

export async function getAllAnimators() {
  await superAuth();
  const records = await pb.collection("invite").getFullList({
    sort: "nom",
    filter: "role = 'animateur'",
  });
  pb.authStore.clear();
  return records;
}

export async function getOneFilm(id) {
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

export async function getOneActivite(id) {
  await superAuth();
  const record = await pb.collection("activite").getOne(id);
  pb.authStore.clear();
  return record;
}

export async function getOneInvite(id) {
  await superAuth();
  const record = await pb.collection("invite").getOne(id);
  record.photo = pb.files.getURL(record, record.photo);
  pb.authStore.clear();
  return record;
}

export async function getInviteActivitiesById(id) {
  await superAuth();
  let records = await pb.collection("activite").getFullList({
    filter: `invite.id = '${id}'`,
  });
  pb.authStore.clear();
  return records;
}

export async function getInviteActivitiesByName(nom) {
  await superAuth();
  let records = await pb.collection("activite").getFullList({
    filter: `invite.nom = '${nom}'`,
  });
  pb.authStore.clear();
  return records;
}

export async function modifyAnyRecord(collection, id, data) {
  await superAuth();
  const record = await pb.collection(collection).update(id, data);
  pb.authStore.clear();
  return record;
}

export function formatDate(date) {
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

export async function getFilmByGenre(genre) {
  await superAuth();
  let records = await pb.collection("film").getFullList({});
  records = records.filter(
    (record) => record.genre[0] === genre || record.genre[1] === genre
  );
  pb.authStore.clear();
  return records;
}
