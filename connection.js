import mongoose from 'mongoose'

  function ConnBaze () {
        const URI ='mongodb+srv://dbUser:zirf92616@cluster0.ueiri.mongodb.net/Grabs'
        const droM = async()=> {
        await mongoose.connect(URI)
        }
       
        droM.on('error', console.error.bind(console, 'mongo xiis'))
        }

        const Schema = mongoose.Schema
        const SomeModelSchema = new Schema ({
            a_string: String
        })

        const SomeModel = mongoose.model('SomeMode', SomeModelSchema)