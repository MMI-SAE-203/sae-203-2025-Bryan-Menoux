/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_4164619532")

  // update collection data
  unmarshal({
    "name": "Activite"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_4164619532")

  // update collection data
  unmarshal({
    "name": "activite"
  }, collection)

  return app.save(collection)
})
