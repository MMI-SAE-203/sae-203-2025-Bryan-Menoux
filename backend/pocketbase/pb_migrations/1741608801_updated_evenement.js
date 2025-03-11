/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1863159430")

  // add field
  collection.fields.addAt(2, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_2773080466",
    "hidden": false,
    "id": "relation2185543202",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "film",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  // add field
  collection.fields.addAt(3, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_4164619532",
    "hidden": false,
    "id": "relation3094697237",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "activite",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1863159430")

  // remove field
  collection.fields.removeById("relation2185543202")

  // remove field
  collection.fields.removeById("relation3094697237")

  return app.save(collection)
})
