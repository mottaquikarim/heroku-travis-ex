const {app,} = require('./app')

app.listen(process.env.PORT || 5001, () => {
    console.log('listening on port 5001')
})
