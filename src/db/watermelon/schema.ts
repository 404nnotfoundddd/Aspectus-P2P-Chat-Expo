// model/schema.js
import { appSchema, tableSchema } from '@nozbe/watermelondb'
import { posts } from './schemas'

const mySchema = appSchema({
    version: 1,
    tables: [
        posts,
        tableSchema({
            name: 'comments',
            columns: [
                { name: 'body', type: 'string' },
                { name: 'post_id', type: 'string', isIndexed: true },
            ]
        }),
    ]
})

export default mySchema