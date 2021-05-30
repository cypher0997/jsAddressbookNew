let counter = false
let addressBook = []
const prompt = require('prompt-sync')();
class AddressBook{
    constructor(FName,lName,address,city,state,zip,phoneNumber){
        outer:while(true){
            for(let i = 0;i<addressBook.length;i++){
                if(addressBook[i].fName == FName){
                    console.log( addressBook[i].fName+ " not included because duplicate entry of same person not allowed")
                    counter = true;
                    break outer;
                }
            }
            this.fName = FName
            this.lName = lName
            this.address = address
            this.city = city
            this.state = state
            this.zip = zip
            this.phoneNumber = phoneNumber
            break;
        }
    }   
}
let contactPerson1 = new AddressBook("anurag","bhardwaj","achrol","jaipur","rajastha",4645,997877)
addressBook.push(contactPerson1)
let contactPerson2 = new AddressBook("rajat","bhardwaj","acghrol","udaipur","rajastha",46458,9089890)
addressBook.push(contactPerson2)
let contactPerson3 = new AddressBook("rajat","bhardwaj","acghrol","city","rajastha",46458,9089890)
if(counter == false){
    addressBook.push(contactPerson3)
    }

function adb(){
    const action = Number.parseInt(prompt("press 1 to display addressbook"+"\n"+
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
adb();
