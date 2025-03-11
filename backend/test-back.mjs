import {
  getActivitesByDate,
  getFilmsByDate,
  getAllDirectorAndActors,
  getAllAnimators,
  getOneFilm,
  getOneActivite,
  getOneInvite,
  getInviteActivitiesById,
  getInviteActivitiesByName,
  modifyAnyRecord,
} from "./backend.mjs";

try {
  let records = await getFilmsByDate();
  console.log(records);
} catch (e) {
  console.log(e);
}

console.log("--------------------------");

try {
  let records = await getActivitesByDate();
  console.log(records);
} catch (e) {
  console.log(e);
}

console.log("--------------------------");

try {
  let records = await getAllDirectorAndActors();
  console.log(records);
} catch (e) {
  console.log(e);
}

console.log("--------------------------");

try {
  let records = await getAllAnimators();
  console.log(records);
} catch (e) {
  console.log(e);
}

console.log("--------------------------");

try {
  let records = await getOneFilm("50tp411r9yz7p0s");
  console.log(records);
} catch (e) {
  console.log(e);
}

console.log("--------------------------");

try {
  let records = await getOneFilm("50tp411r9yz7p0s");
  console.log(records);
} catch (e) {
  console.log(e);
}

console.log("--------------------------");

try {
  let records = await getOneActivite("13lac7i8nol3o7p");
  console.log(records);
} catch (e) {
  console.log(e);
}

console.log("--------------------------");

try {
  let records = await getOneInvite("8g02gc5m72zr0nl");
  console.log(records);
} catch (e) {
  console.log(e);
}

console.log("--------------------------");

try {
  let records = await getInviteActivitiesById("8g02gc5m72zr0nl");
  console.log(records);
} catch (e) {
  console.log(e);
}

console.log("--------------------------");

try {
  let records = await getInviteActivitiesByName("DeFries");
  console.log(records);
} catch (e) {
  console.log(e);
}

console.log("--------------------------");

try {
  const data = {
    titre: "La Quête du Sens",
  };
  const records = await modifyAnyRecord("film", "50tp411r9yz7p0s", data);
  console.log(records);
} catch (error) {
  console.error("error", error);
}
