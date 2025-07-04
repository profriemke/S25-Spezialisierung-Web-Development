/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import Note from '#models/note'


router.on('/').render('pages/home')

router.get('/neu', async()=>{
    const note = await Note.create(
        {
            text: 'test'
        }
    )
    return note
})

router.get('/read', async ()=>{
    const notes = await Note.all()
    return notes
})
