## Backend flow
GET '/weather'

- index.js --> loaders/index.js --> loaders/express.js
- app/routes -> app/middleware -> app/validation -> app/controller -> app/service -> return data from openweatherAPI


## Folder structure

- index.js (entry file)
- loaders/index.js (load all related that needs to start
server,eg: express,mongoose)
- loaders/express.js (load express related config eg:routes,port)

## 
- routes (this is where we define our URL)
- middleware (anything that needs to be reject before enter business logic,eg:authUser)
- services (business logic)
- validation (validate frontend requests avoid something like content like content = selec)

mvc(model,view,controller)

model(db)