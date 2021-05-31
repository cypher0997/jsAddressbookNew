let counter = false;
let addressBook = []
const prompt = require('prompt-sync')();
class ContactPerson{
    constructor(firstName,lastName,address,city,state,zip,phoneNumber){
            this.fName = firstName
            this.lName = lastName
            this.address = address
            this.city = city
            this.state = state
            this.zip = zip
            this.phoneNumber = phoneNumber
    }   
}
let contactPerson = new ContactPerson("anurag","bhardwaj","achrol","jaipur","rajastha",4645,997877)
addressBook.push(contactPerson)
function createContactPerson(){
    outer :while(true){
        let firstName = String.toString(prompt("enter the first name: 1"))
        for(let i = 0;i<addressBook.length;i++){
            if(addressBook[i].fName == firstName){
                console.log(" not included because duplicate entry of same person not allowed,please give different name")
                createContactPerson()
                break outer
            }
        }
        let lastName = prompt("enter the last name: ").toString()
        let address =prompt("enter the address: ").toString()
        let city = prompt("enter the city: ").toString()
        let state = prompt("enter the state: ").toString()
        let zip = Number.parseInt(prompt("enter the zip: ") ) 
        let phoneNumber = Number.parseInt(prompt("enter the phone number: ") ) 

        contactPerson = new ContactPerson(firstName,lastName,address,city,state,zip,phoneNumber)
        addressBook.push(contactPerson)
        break

    }
    

}
function addressBookOperations(){
    const action = Number.parseInt(prompt("press 1 to add new contact person and display addressbook"+"\n"+
                        "press 2 edit contact person on basis of person name 'anurag' "+"\n"+
                        "press 3 delete contact person on basis"+"\n"+
                        "press 4 to find number of contact persons"+"\n"+
                        "press 5 to find specific person named 'rajat' in 'udaipur'"+"\n"+
                        "press 6 to find all contact person in udaipur"+"\n"+
                        "press 7 to find number of contact person in 'udaipur city"+"\n"+
                        "press 8 to stop operations"+"\n"+
                        " "))

    let choice = action
    switch(choice){
            
        case 1:
            createContactPerson()
            for(let view in addressBook){
                console.log(addressBook[view])
            }
            adb()
            break;
            
        case 2:
            for(let i = 0;i<addressBook.length;i++){
                if(addressBook[i].fName == "anurag"){
                    addressBook[i].fName="dfsdf"
                    addressBook[i].lName="dfsdfsd"
                    addressBook[i].address="sdwsf"
                    addressBook[i].city="dasfsdf"
                    addressBook[i].state="dffsd"
                    addressBook[i].zip=97788
                    addressBook[i].phoneNumber=7867609
                }
            }
            adb()
            break;
        
        case 3:
            for(let i = 0;i<addressBook.length;i++){
                if(addressBook[i].fName == "dfsdf"){
                    addressBook.splice(i,1)
                }
            }
            adb()
            break;
    
        case 4:
            let length = addressBook.reduce((accumulator,currentValue)=>{
                accumulator += 1;
                return accumulator
             },0);
             console.log(length)
             adb()
             break;
    
        case 5:
            const filteredArray = addressBook.filter(function(values){
                return values.city == "udaipur" && values.fName == "rajat"
            })
            console.log(filteredArray)
            adb()
            break;
    
        case 6:
            const filteredArrayForCityOrState = addressBook.filter(function(values){
                return values.city == "udaipur"
            })
            console.log(filteredArrayForCityOrState)
            adb()
            break;
    
        case 7:
            let filteredArrayForCountByCityOrState = addressBook.reduce((accumulator,currentValue)=>{
                if(currentValue.city == "udaipur"){
                    accumulator += 1
                }
                return accumulator
              },0);
             console.log(filteredArrayForCountByCityOrState)
             adb()
             break;
    
        case 8:
            break;
    
        default:
            break;
    }
}
addressBookOperations();
