/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_838767197")

  // update collection data
  unmarshal({
    "name": "realisateur"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_838767197")

  // update collection data
  unmarshal({
    "name": "Realisateur"
  }, collection)

  return app.save(collection)
})
