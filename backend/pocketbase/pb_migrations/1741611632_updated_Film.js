/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2773080466")

  // remove field
  collection.fields.removeById("text2203071480")

  // add field
  collection.fields.addAt(4, new Field({
    "hidden": false,
    "id": "select2203071480",
    "maxSelect": 2,
    "name": "genre",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "Documentaire",
      "Environnement",
      "Nature",
      "Climat",
      "Agriculture",
      "Aventure",
      "Exploration",
      "Écologie",
      "Science",
      "Société"
    ]
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2773080466")

  // add field
  collection.fields.addAt(4, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text2203071480",
    "max": 0,
    "min": 0,
    "name": "genre",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // remove field
  collection.fields.removeById("select2203071480")

  return app.save(collection)
})
